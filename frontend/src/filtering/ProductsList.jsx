import { useEffect, useState, useMemo } from "react";
import { useFilter } from "./FilterContext.jsx";
import { Server } from "../serverComms/server.jsx";

//help from this tutorial
//https://medium.com/@pankaj21dhal/mastering-advanced-filtering-in-react-a-step-by-step-guide-with-code-examples-675d027d27d5

// I WONT USE THIS ANYWHERE RIGHT NOW, BUT WILL ENTIRELY REWRITE IT LATER

const ProductsList = () => {
	const { filters } = useFilter();
	const [listings, setListings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;
		setLoading(true);
		Server.listings
			.getAll()
			.then((data) => {
				if (!mounted) return;
				setListings(Array.isArray(data) ? data : []);
				setLoading(false);
			})
			.catch((err) => {
				if (!mounted) return;
				setError(err);
				setLoading(false);
			});
		return () => {
			mounted = false;
		};
	}, []);

	const filteredProducts = useMemo(() => {
		const search = (filters?.search ?? "").toString();
		const tagFilter = filters?.tags ?? "";
		return listings.filter((listing) => {
			const title = (listing.title ?? "").toString();
			const titleMatch = title.toLowerCase().includes(search.toLowerCase());
			const tagsValue = listing.tags ?? "";
			const tagsMatch =
				tagFilter === "" || (Array.isArray(tagsValue) ? tagsValue.includes(tagFilter) : tagsValue === tagFilter);
			return titleMatch && tagsMatch;
		});
	}, [listings, filters]);

	// Exclude the final array item (it's used to store numListings)
	const displayProducts = useMemo(() => {
		const count = Math.max(0, filteredProducts.length - 1);
		return filteredProducts.slice(0, count);
	}, [filteredProducts]);

	if (loading) return <p className="text-gray-500 text-center">Loading...</p>;
	if (error) return <p className="text-red-500 text-center">Error loading products</p>;

	return (
		<div className="listing-list min-w-full">
			{displayProducts.length > 0 ? (
				displayProducts.map((listing, i) => (
					<div className="listing-card" key={listing.id ?? `listing-${i}`}>
						<img src={listing.image} alt={listing.title} className="listing-card-image" />
						<div className="px-4 py-0 m-0">
							<h1 className="listing-card-price text-2xl font-bold text-left">${listing.price}</h1>
							<h1 className="listing-card-title text-l font-bold text-left">{listing.title}</h1>
							<p className="listing-card-date text-sm text-gray-500">{listing.created_at}</p>
						</div>
					</div>
				))
			) : (
				<p className="text-gray-500 text-center">No products found</p>
			)}
		</div>
	);
};

export default ProductsList;