import React from "react";

//Created a search box component that can receive props such as value, 
//placeholder, onChange, className from the outside

const SearchBox = ({ value, placeholder, onChange , className, onKeyDown}) => {

    return (
        <>
            {/* search input */}
            <input
                type="text"
                className={`w-full py-2 pl-5 pr-3 text-primary-50 leading-tight bg-primary-950 hover:bg-primary-900 border-2 focus:p-2  transition-all duration-300 border-secondary-500 rounded-lg focus:outline-none focus:bg-primary-800 focus:border-secondary-300 ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </>
    );
};

export default SearchBox;
