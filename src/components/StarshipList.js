import React, { useContext, useState, useEffect } from 'react';
import { StarshipContext } from '../context/StarshipContext';
import Card from './CardComponent/CardComponent';
import StarshipImg from '../assets/img/starship_1.png'


import StarshipFilterComponent from './StarshipFilterComponent/StarshipFilterComponent';

function StarshipList() {
    const { starships, fetchNextPage, nextPage, loading } = useContext(StarshipContext);
    const [page, setPage] = useState(1);
    const [noMoreData, setNoMoreData] = useState(false);
    const [filteredStarships, setFilteredStarships] = useState([]);

    useEffect(() => {
        if (starships.length && !nextPage) {
            setNoMoreData(true);
        } else {
            setNoMoreData(false);
        }

        setFilteredStarships(starships);
    }, [starships]);

    const handleNextPage = async () => {
        setPage(prevPage => prevPage + 1);
        await fetchNextPage(page + 1);
    }

    const handleFilter = filters => {
        let filtered = starships;

        // Search text filter
        if (filters.searchText) {
            filtered = filtered.filter(starship =>
                starship.name.toLowerCase().includes(filters.searchText) ||
                starship.model.toLowerCase().includes(filters.searchText)
            );
        }

        // Crew filter
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
        // Passengers filter
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

        setFilteredStarships(filtered);
    }

    return (
        <div className="max-w-screen-2xllg mx-auto">
            <div className="grid justify-center">
                <StarshipFilterComponent onFilter={handleFilter} />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {filteredStarships.map(starship => (
                        <Card
                            key={starship.name}
                            title={starship.name}
                            subtitle={starship.model}
                            image={StarshipImg}
                            rating={3}
                            details={[
                                { label: 'Manufacturer:', value: starship.manufacturer },
                                { label: 'Crew:', value: starship.crew },
                                // add more details as needed
                            ]}
                        />
                    ))}
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