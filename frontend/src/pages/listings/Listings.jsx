import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Listings.css";
import { Button } from "flowbite-react";

import Auth from "../../auth/auth";

//import { FilterProvider } from "../filtering/FilterContext.jsx";
import Filter from "../../filtering/Filter.jsx";
//import ProductList from "../filtering/ProductsList.jsx";

import CreateListing from "../../components/CreateListing.jsx";

import DisplayListings from "../../components/DisplayListings.jsx";

import DisplayFullListing from "./DisplayFullListing.jsx"

export default function Listings() {
	const navigate = useNavigate();

    const [createListingOpen, setCreateListingOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let isMounted = true;

        Auth.loginState().then((status) => {
            if (isMounted) {
                setIsLoggedIn(status);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [location.pathname]);

    return (
        <div className="listings-page px-10 min-h-screen">
            <div className="listings-settings p-4 min-w-full flex flex-col justify-between items-center sm:flex-row gap-2">
				<div className="flex">
					<Button color="red" className="create-button px-4" onClick={async () => { (isLoggedIn) ? setCreateListingOpen(true) : navigate("/login") }}>
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
                    <DisplayListings
                        onListingClick={(listing) => {
                            navigate(`${listing.id}`);
                        }}
						className="z-30"
                    />
                </div>
            </div>
            <CreateListing
                open={createListingOpen}
                onClose={() => setCreateListingOpen(false)}
            />
        </div>
    )
}