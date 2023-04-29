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

    }, [starships,page]);

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

                console.log("crew count", crewCount)

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
        <div className="max-w-screen-2xl mx-auto ">
            <div className="grid justify-center">
                <StarshipFilterComponent onFilter={handleFilter} />
                <div className='flex justify-center bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5'>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 pr-5 pb-10">
                        {filteredStarships.map(starship => (
                            <div>
                                 {/* <p>{starship.passengers}</p> */}
                                 {/* <p>{starship.crew}</p> */}

                                <p>Lenght:{starship.length}</p>
                                {/* <p>Cargo {starship.cargo_capacity}</p> */}


                            </div>

                            // <Card
                            //     key={starship.name}
                            //     title={starship.name}
                            //     subtitle={starship.model}
                            //     image={StarshipImg}
                            //     rating={starship.hyperdrive_rating}
                            //     passengers={starship.passengers}
                            //     length={starship.length}
                            //     cargo_capacity={starship.cargo_capacity}
                            // />
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