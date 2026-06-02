import { products } from "./data.js";
import { useFilter } from "./FilterContext.jsx";
import { Card } from "flowbite-react";

const ProductList = () => {
    const { filters } = useFilter();

		const filteredProducts = products.filter(product => {
			const nameMatch = product.name.toLowerCase().includes(filters.search.toLowerCase());
			const categoryValue = product.category ?? "";
			const categoryMatch =
				filters.category === "" ||
				(Array.isArray(categoryValue) ? categoryValue.includes(filters.category) : categoryValue === filters.category);
			return nameMatch && categoryMatch;
		});

    return (
		<div className="product-list min-w-full md:px-10">
			{filteredProducts.length > 0 ? (
			filteredProducts.map(product => (
				<div className="listing-card" key={product.id}>
					<img src={product.image} alt={product.name} className="listing-card-image" />
					<div className="px-4 py-0 m-0">
						<h1 className="listing-card-price text-2xl font-bold text-left">${product.price}</h1>
						<h1 className="listing-card-title text-l font-bold text-left">{product.name}</h1>
						<p className="listing-card-date text-sm text-gray-500">{product.datePosted}</p>
					</div>
				</div>
			))
			) : (
				<p className="text-gray-500 text-center">No products found</p>
			)}
		</div>
    );
};

export default ProductList; 