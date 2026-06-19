import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

import Auth from "../../../auth/auth";

//import { FilterProvider } from "../filtering/FilterContext.jsx";
//import Filter from "../../filtering/Filter.jsx";
//import ProductList from "../filtering/ProductsList.jsx";

//import CreateListing from "../../components/CreateListing.jsx";

import DisplayListingsForMods from "../../../components/DisplayListingsForMods.jsx";

export default function Moderation() {
	const navigate = useNavigate();

    const [createListingOpen, setCreateListingOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="listings-page p-0 min-h-screen">
            <div className="listings-content flex items-center justify-center sm:p-4">
                <div className="container">
                    <DisplayListingsForMods
                        onListingClick={(listing) => {
                            navigate(`${listing.id}`);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}