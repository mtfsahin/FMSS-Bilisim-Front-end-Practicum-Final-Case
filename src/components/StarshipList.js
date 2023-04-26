import React, { useState } from 'react';
import FilterComponent from './FilterComponent/FilterComponent';

const StarshipList = () => {
    const [starships, setStarships] = useState([]);
    const [filteredStarships, setFilteredStarships] = useState([]);

    const fetchStarships = async () => {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        setStarships(data.results);
        setFilteredStarships(data.results);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        console.log("starshipler",fetchStarships());
        setFilteredStarships(
            starships.filter((starship) => {
                if (!value) return true;

                if (name === 'crewFilter') {
                    const [min, max] = value.split('-');
                    return starship.crew >= min && starship.crew <= max;
                }

                return starship[name] === value;
            })
        );
    };

    return (
        <div className="container mx-auto mt-8">
            <FilterComponent
                handleFilterChange={handleFilterChange}
                sizeOptions={[
                    { label: 'All', value: '' },
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                ]}
                sizeFilterName="size"
                crewOptions={[
                    { label: 'All', value: '' },
                    { label: '1-10', value: '1-10' },
                    { label: '11-50', value: '11-50' },
                    { label: '51-100', value: '51-100' },
                    { label: '100+', value: '100+' },
                ]}
                crewFilterName="crew"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {filteredStarships.map((starship, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                        <div className="px-4 py-3 bg-primary-950">
                            <h3 className="text-lg font-bold text-primary-100">{starship.name}</h3>
                            <p className="text-sm text-primary-300">Model: {starship.model}</p>
                        </div>
                        <div className="px-4 py-3 bg-white">
                            <p className="text-sm font-bold text-primary-700 mb-1">Manufacturer</p>
                            <p className="text-sm text-primary-500">{starship.manufacturer}</p>
                            <p className="text-sm font-bold text-primary-700 mb-1 mt-2">Passengers</p>
                            <p className="text-sm text-primary-500">{starship.passengers}</p>
                            <p className="text-sm font-bold text-primary-700 mb-1 mt-2">Crew</p>
                            <p className="text-sm text-primary-500">{starship.crew}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StarshipList;
