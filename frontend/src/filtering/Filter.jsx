import { useFilter } from "./FilterContext.jsx";
import { FloatingLabel, Dropdown, DropdownItem, Button } from "flowbite-react";
import ListingsDrawer from "../components/listingsDrawer.jsx";

const Filter = () => {
	const { filters, setFilters } = useFilter();

	return (
		<div className="flex flex-col items-center gap-2 sm:flex-row">
			<FloatingLabel
				className="max-w-60 ml"
				variant="outlined"
				label="Search listings"
				color="error"
				value={filters.search}
				onChange={(e) => setFilters({ ...filters, search: e.target.value })}
			/>
			<div className="flex sm:order-first gap-2">
				<ListingsDrawer />
				<Dropdown label="Categories" color="red">
					<DropdownItem onClick={() => setFilters({ ...filters, category: "" })}>
						All Categories
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "PhysicalGoods" })}>
						All physical goods
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "Services" })}>
						All services
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "Books" })}>
						Books (incl. textbooks)
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "Stationery"})}>
						Stationery
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "Homework" })}>
						Homework
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "Tutoring" })}>
						Tutoring
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "OldTestsOrExams" })}>
						Old tests/exams
					</DropdownItem>
					<DropdownItem onClick={() => setFilters({ ...filters, category: "LeakedTestsOrExams" })}>
						Leaked tests/exams??
					</DropdownItem>
				</Dropdown>
			</div>
		</div>
	);
};

export default Filter;