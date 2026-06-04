import { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState(
        {   
            tags: "", 
            search: "", 
            priceRange: [0, 1500],
        });

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => useContext(FilterContext);

//help from this tutorial
//https://medium.com/@pankaj21dhal/mastering-advanced-filtering-in-react-a-step-by-step-guide-with-code-examples-675d027d27d5

// I WONT USE THIS ANYWHERE RIGHT NOW, BUT WILL ENTIRELY REWRITE IT LATER