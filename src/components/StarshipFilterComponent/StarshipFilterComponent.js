import React, { useState } from 'react';
import Button from '../ButtonComponent/ButtonComponent';
import SearchBox from '../SearchComponent/SearchComponent';
import StarWarsBanner from '../../assets/img/star-wars-banner.png'

function StarshipFilterComponent(props) {
    const [searchText, setSearchText] = useState('');
    const [selectedCrewFilter, setSelectedCrewFilter] = useState('');
    const [selectedPassengerFilter, setSelectedPassengerFilter] = useState('');

    const crewOptions = [
        { label: "All", value: "" },
        { label: "1+", value: "1+" },
        { label: "10+", value: "10+" },
        { label: "100+", value: "100+" },
        { label: "500+", value: "500+" },
        { label: "1000+", value: "1000+" },
        { label: "100.000+", value: "100000+" },
        { label: "250.000+", value: "250000+" },
    ];

    const passengerOptions = [
        { label: "All", value: "" },
        { label: "10+", value: "10+" },
        { label: "50+", value: "50+" },
        { label: "100+", value: "100+" },
        { label: "500+", value: "500+" },
        { label: "1000+", value: "1000+" },
        { label: "10.000+", value: "10000+" },
        { label: "50.000+", value: "50000+" },
    ];

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    }

    const handleCrewFilterChange = event => {
        setSelectedCrewFilter(event.target.value);
    }

    const handlePassengerFilterChange = event => {
        setSelectedPassengerFilter(event.target.value);
    }

    const handleFilterAndSearch = () => {
        const { onFilter } = props;
        let filters = {};

        // Search text filter
        if (searchText !== '') {
            filters.searchText = searchText.toLowerCase();
        }

        // Crew filter
        if (selectedCrewFilter !== '') {
            filters.crew = selectedCrewFilter;
        }

        // Passenger filter
        if (selectedPassengerFilter !== '') {
            filters.passengers = selectedPassengerFilter;
        }

        onFilter(filters);
    };

    return (

        <div className="flex flex-col rounded-lg border-2 border-secondary-500 p-2 bg-opacity-80 "
            style={{ backgroundImage: `url(${StarWarsBanner})` }}>

            <div className="flex flex-col sm:flex-row sm:justify-center p-4 rounded-full">
                <SearchBox
                    placeholder="Search here"
                    value={searchText}
                    onChange={handleSearchTextChange}
                />

                <Button
                    onClick={handleFilterAndSearch}
                    className="w-full sm:w-auto lg:ml-2 sm:ml-2 mt-2 lg:mt-0 md:mt-0 sm:mt-0 "
                    color="secondary"
                >
                    Search
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-4 ">

                <div className='col-span-2 pl-2'>
                    <blockquote className="border-l-4 backdrop-blur-lg rounded-lg bg-black bg-opacity-75">
                        <p className="italic pl-2">"Do. Or do not. There is no try."</p>
                        <br />
                        <footer className="text-right pr-2">- YODA</footer>
                    </blockquote>

                </div>

                <div className="col-span-1">
                    <div className="backdrop-blur-lg bg-black bg-opacity-40 rounded-lg p-4">
                        <label htmlFor="crew-select" className="block text-xs font-medium text-primary-50 mb-2">
                            Crew filter
                        </label>
                        <select
                            id="crew-select"
                            value={selectedCrewFilter}
                            onChange={handleCrewFilterChange}
                            className="block w-full py-1 pl-3 pr-10 text-base text-primary-700 bg-primary-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                        >
                            {crewOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="backdrop-blur-lg bg-black bg-opacity-40 rounded-lg p-4">
                        <label htmlFor="passengers-select" className="block text-xs font-medium text-primary-50 mb-2">
                            Passengers filter
                        </label>
                        <select
                            id="passengers-select"
                            value={selectedPassengerFilter}
                            onChange={handlePassengerFilterChange}
                            className="block w-full py-1 pl-3 pr-10 text-base text-primary-700 bg-primary-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                        >
                            {passengerOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default StarshipFilterComponent;
