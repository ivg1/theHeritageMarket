import { Button, Spinner } from "flowbite-react"
import "./Listings.css";

import { FilterProvider } from "../filtering/FilterContext.jsx";
import Filter from "../filtering/Filter.jsx";
import ProductList from "../filtering/ProductsList.jsx";

export default function Listings() {
    return (
        <FilterProvider>
            <div className="listings-page px-10 min-h-screen">
                <div className="listings-settings p-4 min-w-full flex flex-row justify-end ">
                        <Filter />
                </div>
                <div className="listings-content flex items-center justify-center p-4">
                    <div className="container">
                        <ProductList />
                    </div>
                </div>
            </div>
        </FilterProvider>
    )
}