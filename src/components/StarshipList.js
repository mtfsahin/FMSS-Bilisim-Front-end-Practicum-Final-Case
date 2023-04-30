import React, { useContext, useState, useEffect } from 'react';
import { StarshipContext } from '../context/StarshipContext';
import Card from './CardComponent/CardComponent';
import StarshipImg from '../assets/img/starship_1.png'


import StarshipFilterComponent from './StarshipFilterComponent/StarshipFilterComponent';

function StarshipList() {
    const { starships, fetchNextPage, nextPage, loading, setStarships } = useContext(StarshipContext);

    const [page, setPage] = useState(1);
    const [noMoreData, setNoMoreData] = useState(false);
    const [filteredStarships, setFilteredStarships] = useState([]);
    const [sortOption, setSortOption] = useState(null);
    
    useEffect(() => {
        if (starships.length && !nextPage) {
            setNoMoreData(true);
        } else {
            setNoMoreData(false);
        }

        setFilteredStarships(starships);

    }, [starships, page,]);

    const handleNextPage = async () => {
        setPage(prevPage => prevPage + 1);
        await fetchNextPage(page + 1);
    }

    const handleFilter = filters => {
        let filtered = starships;

        //search text filter
        if (filters.searchText) {
            filtered = filtered.filter(starship =>
                starship.name.toLowerCase().includes(filters.searchText) ||
                starship.model.toLowerCase().includes(filters.searchText)
            );
        }

        //crew filter
        if (filters.crew) {
            filtered = filtered.filter(starship => {
                const crewCount = parseInt(starship.crew);

                if (filters.crew === 'unknown') {
                    return isNaN(crewCount);
                } else if (filters.crew === 'other') {
                    return crewCount <= 0;
                } else {
                    return crewCount >= parseInt(filters.crew);
                }
            });
        }

        //passengers filter
        if (filters.passengers) {
            filtered = filtered.filter(starship => {
                const passengersCount = parseInt(starship.passengers);
                if (filters.passengers === 'unknown') {
                    return isNaN(passengersCount);
                } else if (filters.passengers === 'other') {
                    return passengersCount <= 0;
                } else {
                    return passengersCount >= parseInt(filters.passengers);
                }
            });
        }

        //cargo_capacity filter
        if (filters.cargo_capacity) {
            filtered = filtered.filter(starship => {
                const cargoCount = parseInt(starship.cargo_capacity);

                if (filters.cargo_capacity === 'unknown') {
                    return isNaN(cargoCount);
                } else if (filters.cargo_capacity === 'other') {
                    return cargoCount <= 0;
                } else {
                    return cargoCount >= parseInt(filters.cargo_capacity);
                }
            });
        }

        //length filter
        if (filters.length) {
            filtered = filtered.filter(starship => {
                const lengthCount = parseInt(starship.length);

                if (filters.length === 'unknown') {
                    return isNaN(lengthCount);
                } else if (filters.length === 'other') {
                    return lengthCount <= 0;
                } else {
                    return lengthCount >= parseInt(filters.length);
                }
            });
        }

        // rating sort
        if (filters.rating) {
            const sortFunc =
                filters.rating === "highest"
                    ? (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
                    : (a, b) => a.hyperdrive_rating - b.hyperdrive_rating;

            filtered = filtered.sort(sortFunc);
            setSortOption(filters.rating);
        } else {
            setSortOption(null);
        }

        setFilteredStarships(filtered);
    };


    return (
        <div className="max-w-screen-2xl mx-auto ">
            <div className="grid justify-center">
                <StarshipFilterComponent onFilter={handleFilter} />
                <div className='flex justify-center bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5'>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 pr-5 pb-10">
                        {filteredStarships.map(starship => (
                            <Card
                                key={starship.name}
                                title={starship.name}
                                subtitle={starship.model}
                                image={StarshipImg}
                                rating={starship.hyperdrive_rating}
                                passengers={starship.passengers}
                                length={starship.length}
                                cargo_capacity={starship.cargo_capacity}
                            />
                        ))}
                    </div>
                </div>
                {!noMoreData && (
                    <div className="flex justify-center">
                        <button
                            className="btn btn-primary px-8 py-3 mt-6 rounded-full shadow-lg hover:shadow-xl transition duration-200"
                            onClick={handleNextPage}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                )}
                {noMoreData && (
                    <div className="text-center mt-6 text-gray-500">No more data</div>
                )}
            </div>
        </div>


    );
}

export default StarshipList;  
