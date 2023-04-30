import React, { useEffect, useState } from 'react';
import Button from '../ButtonComponent/ButtonComponent';
import SearchBox from '../SearchComponent/SearchComponent';
import StarWarsBanner from '../../assets/img/star-wars-banner.png'

function StarshipFilterComponent(props) {
    const [searchText, setSearchText] = useState('');
    const [selectedCrewFilter, setSelectedCrewFilter] = useState('');
    const [selectedCargoFilter, setSelectedCargoFilter] = useState('');
    const [selectedLengthFilter, setSelectedLengthFilter] = useState('');
    const [selectedPassengerFilter, setSelectedPassengerFilter] = useState('');
    const [selectedRatingFilter, setSelectedRatingFilter] = useState('');


    const crewOptions = [
        { label: "All", value: "" },
        { label: "1+", value: "1" },
        { label: "10+", value: "10" },
        { label: "100+", value: "100" },
        { label: "500+", value: "500" },
        { label: "1000+", value: "1000" },
        { label: "100.000+", value: "100000" },
        { label: "250.000+", value: "250000" },
    ];

    const passengerOptions = [
        { label: "All", value: "" },
        { label: "10+", value: "10" },
        { label: "50+", value: "50" },
        { label: "100+", value: "100" },
        { label: "500+", value: "500" },
        { label: "1000+", value: "1000" },
        { label: "10.000+", value: "10000" },
        { label: "50.000+", value: "50000" },
    ];

    const ratingOptions = [
        { label: "No sorting", value: "" },
        { label: "Highest rating", value: "highest" },
        { label: "Lowest rating", value: "lowest" },
    ];

    const cargoOptions = [
        { label: "All", value: "" },
        { label: "1K+", value: "1000" },
        { label: "50K+", value: "50000" },
        { label: "100K+", value: "100000" },
        { label: "500K+", value: "500000" },
        { label: "1M+", value: "1000000" },
        { label: "10M+", value: "10000000" },
    ];

    const LengthOptions = [
        { label: "All", value: "" },
        { label: "1+", value: "1" },
        { label: "10+", value: "10" },
        { label: "100+", value: "100" },
        { label: "500+", value: "500" },
        { label: "1000+", value: "1000" },
    ];

    useEffect(() => {
        handleFilterAndSearch();
    }, [
        selectedCrewFilter,
        selectedPassengerFilter,
        selectedCargoFilter,
        selectedLengthFilter,
        selectedRatingFilter
    ]);

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    }

    const handleCrewFilterChange = event => {
        setSelectedCrewFilter(event.target.value);
    }

    const handleCargoFilterChange = event => {
        setSelectedCargoFilter(event.target.value);
    }

    const handleLengthFilterChange = event => {
        setSelectedLengthFilter(event.target.value);
    }

    const handlePassengerFilterChange = event => {
        setSelectedPassengerFilter(event.target.value);
    }

    const handleRatingFilterChange = event => {
        setSelectedRatingFilter(event.target.value);
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

        // Cargo filter
        if (selectedCargoFilter !== '') {
            filters.cargo_capacity = selectedCargoFilter;
        }

        // Cargo filter
        if (selectedLengthFilter !== '') {
            filters.length = selectedLengthFilter;
        }

        // rating sort
        if (selectedRatingFilter !== null) {
            filters.rating = selectedRatingFilter;
        }

        onFilter(filters);
    };

    return (

        <div className="flex flex-col rounded-3xl border-2 border-secondary-500 pb-4 bg-opacity-80 max-w-xs sm:max-w-full pl-6 pr-6" style={{ backgroundImage: `url(${StarWarsBanner})` }}>
            <div className="flex flex-col sm:flex-row sm:justify-center p-4 rounded-full md:px-48">
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

            <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4 ">
                <div className='col-span-2 pl-2'>
                    <blockquote className="block border-l-4 backdrop-blur-lg rounded-lg bg-black bg-opacity-75">
                        <p className="italic pl-2 py-2">"Do. Or do not. There is no try."</p>
                        <footer className="text-right pr-2">- YODA</footer>
                    </blockquote>

                    <div className="backdrop-blur-lg flex flex-col bg-black bg-opacity-40 rounded-lg p-2 mt-1">
                        <label htmlFor="rating-select" className="text-white text-center font-medium mb-1 md:mr-2 text-xs">Sort by Rating</label>
                        <select
                            onChange={handleRatingFilterChange}
                            value={selectedRatingFilter}
                            id="rating-select"
                            className="block w-full md:w-auto py-1 px-3 text-base text-primary-700 bg-primary-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm md:mb-0 md:mr-2">
                            {ratingOptions.map(option => (
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

                        <label htmlFor="crew-select" className="block text-xs font-medium text-primary-50 mt-2">
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
                        <label htmlFor="cargo-select" className="block text-xs font-medium text-primary-50 mb-2">
                            Cargo filter
                        </label>
                        <select
                            id="cargo-select"
                            value={selectedCargoFilter}
                            onChange={handleCargoFilterChange}
                            className="block w-full py-1 pl-3 pr-10 text-base text-primary-700 bg-primary-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                        >
                            {cargoOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="lengh-select" className="block text-xs font-medium text-primary-50 mt-2">
                            Length filter
                        </label>
                        <select
                            id="lengh-select"
                            value={selectedLengthFilter}
                            onChange={handleLengthFilterChange}
                            className="block w-full py-1 pl-3 pr-10 text-base text-primary-700 bg-primary-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                        >
                            {LengthOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarshipFilterComponent;

