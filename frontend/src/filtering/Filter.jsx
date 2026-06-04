//import { useFilter } from "./FilterContext.jsx";
import { FloatingLabel, Dropdown, DropdownItem, Button } from "flowbite-react";
import ListingsDrawer from "../components/listingsDrawer.jsx";

//onChange={(e) => setFilters({ ...filters, search: e.target.value })} (in FloatingLabel)
const Filter = () => {
	return (
		<div className="flex flex-col items-center gap-2 sm:flex-row">
			<FloatingLabel
				className="max-w-60 ml"
				variant="outlined"
				label="Search listings"
				color="error"
				value="doesnt work rn"
				readOnly
			/>
			<div className="flex sm:order-first gap-2">
				<ListingsDrawer />
				<Dropdown label="Categories" color="red">
					<DropdownItem>
						All Categories
					</DropdownItem>
					<DropdownItem>
						All physical goods
					</DropdownItem>
					<DropdownItem>
						All services
					</DropdownItem>
					<DropdownItem>
						Books (incl. textbooks)
					</DropdownItem>
					<DropdownItem>
						Stationery
					</DropdownItem>
					<DropdownItem>
						Homework
					</DropdownItem>
					<DropdownItem>
						Tutoring
					</DropdownItem>
					<DropdownItem>
						Old tests/exams
					</DropdownItem>
					<DropdownItem>
						Leaked tests/exams??
					</DropdownItem>
				</Dropdown>
			</div>
		</div>
	);
};

export default Filter;