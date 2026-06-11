import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "flowbite-react";

import Server from "../../serverComms/server";

export default function DisplayFullListing() {
	const navigate = useNavigate();

	const [listing, setListing] = useState(null);
	const [loading, setLoading] = useState(true);
	const [found, setFound] = useState(false);
	const [error, setError] = useState(null);

	const { listingId } = useParams();
	const id = Number(listingId);
	
	useEffect(() => {
		let mounted = true;
		setLoading(true);
		Server.listings
			.getOne(id)
			.then((data) => {
				if (!mounted) return;
				setListing(data);
				setLoading(false);
				setFound(true);
			})
			.catch((err) => {
				if (!mounted) return;
				setError(err);
				setLoading(false);
			});
		return () => { mounted = false };
	}, []);

	console.log(listing);

	if (loading) return <div className="min-w-screen min-h-screen flex justify-center items-center text-gray-500">Loading...</div>
	if (error) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">Error displaying listing.</div>
	if (!found) return <div className="min-w-screen min-h-screen flex justify-center items-center text-red-500">Listing not found.</div>

	const tags = listing.tags;
	const images = listing.images === null ? [] : listing.images;

	const setMainImage = (url) => {
		const mainImageElement = document.querySelector(".main-image");
		mainImageElement.src = url;
	}

	return (
		<div>
		<div>
			<Button color="bgless" className="mx-6 mt-4" onClick={() => { navigate(-1) }}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
					<path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
				</svg>&nbsp;
				Back
			</Button>
		</div>
		<div className="min-w-screen min-h-screen p-6 flex flex-col lg:grid lg:grid-cols-2 gap-2">
			<div className="min-w-full">
				<div className="p-2 flex flex-col md:flex-row justify-start">
					<div className="flex md:flex-col flex-row gap-2 md:mr-2 mt-2 md:mt-0 order-last md:order-first max-w-full overflow-x-scroll md:overflow-x-hidden">
						{images.length > 0 ? (
							images.map((image) => (
								<img className="w-15 h-15 aspect-square bg-gray-200 rounded-lg hover:cursor-pointer opacity-80 hover:opacity-100" key={image} src={image} onClick={() => { setMainImage(image, this) }}/>
							))
						) : (
							<div className="w-15 h-15 bg-gray-200 rounded-lg flex justify-center items-center">kein<br/>images</div>
						)}
					</div>
					{images.length > 0 ? (
						<img src={images[0]} className="main-image min-w-0 flex-1 aspect-square object-contain bg-white dark:bg-black rounded-lg" />
					) : (
						<div className="main-image min-w-0 flex-1 flex justify-center items-center aspect-square bg-white dark:bg-black rounded-lg">NO IMAGE</div>
					)}
					
				</div>
			</div>
			<div className=" min-w-full">
				<div className="flex flex-col  p-4">
					<div>
						<div className="flex flex-col mb-6">
							<h1 className="text-4xl font-bold">{listing.title}</h1>
						</div>
						<div className="flex mb-6">
							<h2 className="flex text-2xl font-semibold items-center">Price:&nbsp;<span className="text-3xl">€{listing.price}</span>&nbsp;{listing.negotiable ? <span className="text-sm text-red-700 flex items">(negotiable)</span> : <></>}</h2>
						</div>
						<div className="mb-6">
							<h2 className="text-2xl font-semibold">Description:</h2>
							<p>{listing.description}</p>
						</div>
						<div className=" flex mb-6 gap-2">
							{tags.length > 0 ? (
								tags.map((tag) => (
									<div className="border-solid border-gray-500 border rounded-2xl px-2" key={tag}>
										{tag}
									</div>
								))
							) : (
								<div className="">(no tags given)</div>
							)}
						</div>
					</div>
					<div className="other mt-20">
						<p className="text-[12px] text-gray-500">ID: {listing.id} | Created: {listing.created_at} | Seller ID: {listing.seller_id}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}