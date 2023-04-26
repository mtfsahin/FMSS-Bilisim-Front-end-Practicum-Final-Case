import React, { useState } from "react";

const SearchBox = (props) => {
    //create query state with useState
    const [query, setQuery] = useState("");

    //Changes in the input box update the query state
    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            {/* input box */}
            <input
                type="text"
                className="w-full mt-3 py-2 pl-5 pr-3 text-primary-50 leading-tight bg-primary-950 hover:bg-primary-900 border-2 focus:p-2  transition-all duration-300 border-secondary-500 rounded-lg focus:outline-none focus:bg-primary-800 focus:border-secondary-300"
                placeholder={props.placeholder}
                value={query}
                onChange={handleQueryChange}
            />
        </div>
    );
};

export default SearchBox;
