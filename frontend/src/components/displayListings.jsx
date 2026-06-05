import { Server } from "../serverComms/server.jsx";
import { useEffect, useState } from "react";

function longAgo(listingTime) {
    const currentDate = new Date();
	const listingDate = new Date(listingTime);

	let differenceSeconds = Math.floor((currentDate - listingDate) / 1000);
	console.log(differenceSeconds, "seconds");

	if (differenceSeconds < 60) {
		if (differenceSeconds === 1) return `1 second ago`;
		return `${differenceSeconds} seconds ago`;
	} else {
		let differenceMins = Math.floor((currentDate - listingDate) / (1000*60));
		if (differenceMins < 60) {
			if (differenceMins === 1) return `1 minute ago`;
			return `${differenceMins} minutes ago`;
		} else {
			let differenceHours = Math.floor((currentDate - listingDate) / (1000*60*60));
			if (differenceHours < 24) {
				if (differenceHours === 1) return `1 hour ago`;
				return `${differenceHours} hours ago`;
			} else {
				let differenceDays = Math.floor((currentDate - listingDate) / (1000*60*60*24));
				//if (differenceDays < 29) {
				//	if (differenceDays === 1) return "1 day ago";
				//	return `${differenceDays} days ago`;
				//}
				return `${differenceDays} days ago`;
				//later make better logic for handling months ago, years ago, etc...
			}
		}
	}
}

export default function DisplayListings() {
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
		return () => { mounted = false };
	}, []);

    
    if (loading) return <p className="text-gray-500 text-center">Loading...</p>;
	if (error) return <p className="text-red-500 text-center">Error loading products</p>;
    
    return (
        <div className="listing-list min-w-full">
			{listings.length > 0 ? (
				listings.map((listing) => (
					<div className="listing-card" key={listing.id}>
						<div className="listing-card-image-container">
							{
								(() => {
									const images = listing.images;
									let src = "/data.png";
									if (Array.isArray(images) && images.length > 0) {
										src = images[0];
									} else if (typeof images === "string" && images.length > 0) {
										const maybe = images.replace(/^\{|\}$/g, "").split(',')[0];
										src = maybe;
									}
									return <img src={src} alt={listing.title} className="listing-card-image" />;
								})()
							}
						</div>
						<div className="px-4 py-0 m-0">
							<h1 className="listing-card-price text-2xl font-bold text-left">${listing.price}</h1>
							<h1 className="listing-card-title text-l font-bold text-left">{listing.title}</h1>
							<p className="listing-card-date text-sm text-gray-500">{longAgo(listing.created_at)}</p>
						</div>
					</div>
				))
			) : (
				<p className="text-gray-500 text-center">No products found</p>
			)}
		</div>
    )
}