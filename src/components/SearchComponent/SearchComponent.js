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
            <div className="font-sans">Search Box Helvetica G</div>
            <div className="font-sans font-bold">Search Box Helvetica Bold</div>
            <div className="font-starjedi">Search Box G</div>
            <div className="font-starjhol">Search Box G</div>
            <div>Search Box G</div>


            <input
                type="text"
                className="w-full py-2 pl-10 pr-3 leading-tight text-gray-700 bg-gray-200 border-2 border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300"
                placeholder={props.placeholder}
                value={query}
                onChange={handleQueryChange}
            />
        </div>
    );
};
    
export default SearchBox;
