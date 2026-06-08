import { useState } from "react";
import "./Listings.css";
import { Button } from "flowbite-react";

//import { FilterProvider } from "../filtering/FilterContext.jsx";
import Filter from "../../filtering/Filter.jsx";
//import ProductList from "../filtering/ProductsList.jsx";

import CreateListing from "../../components/CreateListing.jsx";

import DisplayListings from "../../components/displayListings.jsx";

export default function Listings() {
    const [createListingOpen, setCreateListingOpen] = useState(false);
    
    return (
        <div className="listings-page px-10 min-h-screen">
            <div className="listings-settings p-4 min-w-full flex flex-col justify-between items-center sm:flex-row gap-2">
				<div className="flex">
					<Button color="red" className="create-button px-4" onClick={() => setCreateListingOpen(true)}>
						Create listing
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2">
							<path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
						</svg>
					</Button>
				</div>
                <Filter />
            </div>
            <div className="listings-content flex items-center justify-center p-4">
                <div className="container">
                    <DisplayListings />
                </div>
            </div>
            <CreateListing
                open={createListingOpen}
                onClose={() => setCreateListingOpen(false)}
            />
        </div>
    )
}