import React from 'react';

const FilterComponent = ({
    handleFilterChange,
    sizeOptions,
    sizeFilterName,
    crewOptions,
    crewFilterName,
}) => {
    return (
        <div className="flex items-center justify-center space-x-4 mb-8">
            <label htmlFor={sizeFilterName} className="font-medium text-lg text-primary-700">
                Size:
            </label>
            <select
                name={sizeFilterName}
                id={sizeFilterName}
                className="py-2 px-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                onChange={handleFilterChange}
            >
                {sizeOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label htmlFor={crewFilterName} className="font-medium text-lg text-primary-700">
                Crew:
            </label>
            <select
                name={crewFilterName}
                id={crewFilterName}
                className="py-2 px-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                onChange={handleFilterChange}
            >
                {crewOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterComponent;
