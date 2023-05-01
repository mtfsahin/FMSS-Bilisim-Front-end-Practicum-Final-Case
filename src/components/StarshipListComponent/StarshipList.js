import React, { useContext, useState, useEffect } from 'react';
import { StarshipContext } from '../../context/StarshipContext';
import Card from '../CardComponent/CardComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { Link } from 'react-router-dom'
import StarshipFilterComponent from '../StarshipFilterComponent/StarshipFilterComponent';
import Button from '../ButtonComponent/ButtonComponent';
import Images from "../../assets/img/image.json"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function StarshipList() {
    // call starships, fetchNextPage, nextPage, loading with useContex
    const { starships, fetchNextPage, nextPage, loading,loadingNext } = useContext(StarshipContext);

    const [page, setPage] = useState(1);
    const [noMoreData, setNoMoreData] = useState(false);
    const [filteredStarships, setFilteredStarships] = useState([]);
    const [sortOption, setSortOption] = useState(null);
    const [selectedStarships, setSelectedStarships] = useState([]);

    const handleFavoriteClick = (starship) => {
        //get existing selected starships from local storage or set an empty array
        const existingStarships = JSON.parse(localStorage.getItem("selectedStarships")) || [];

        //if the selected starship already exists, remove it
        if (existingStarships.some((ship) => ship.name === starship.name)) {
            const updatedStarships = existingStarships.filter((ship) => ship.name !== starship.name);
            localStorage.setItem("selectedStarships", JSON.stringify(updatedStarships));
            setSelectedStarships(updatedStarships);
        }
        //otherwise, add the selected starship to the list of favorites
        else {
            const updatedStarships = [...existingStarships, starship];
            localStorage.setItem("selectedStarships", JSON.stringify(updatedStarships));
            setSelectedStarships(updatedStarships);
        }
    };

    useEffect(() => {
        // Check if there is no more data to load
        if (starships.length && !nextPage) {
            setNoMoreData(true);
        } else {
            setNoMoreData(false);
        }

        // Load selected starships from local storage
        const storedSelectedStarships = JSON.parse(localStorage.getItem("selectedStarships"));
        if (storedSelectedStarships) {
            setSelectedStarships(storedSelectedStarships);
        }

        // Set filtered starships based on current starships
        setFilteredStarships(starships);

    }, [starships, page, nextPage]);

    // Handle next page button click
    const handleNextPage = async () => {
        setPage(prevPage => prevPage + 1);
        await fetchNextPage(page + 1);
    }

    // This function filters the starships based on the given filters object
    // searchText: string to search for in starship names and models
    // crew: filters starships based on crew count
    // passengers: filters starships based on passenger count
    // cargo_capacity: filters starships based on cargo capacity
    // length: filters starships based on length
    // rating: sorts the filtered starships based on their hyperdrive rating in ascending or descending order
    // based on the "highest" or "lowest" value of the rating property in the filters object
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
            console.log(sortOption);
        } else {
            setSortOption(null);
        }

        setFilteredStarships(filtered);
    };

    return (
        <div className="max-w-screen-2xl mx-auto ">

            {loading ? (
                <div className="relative justify-center items-center">
                    <LoadingComponent />
                </div>

            ) : (

                <div className="grid justify-center">

                    <StarshipFilterComponent onFilter={handleFilter} />
                    {/* if filter lenght === 0 print not found screen */}
                    {filteredStarships.length === 0 ?
                        (
                            <div className='flex justify-center bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5 p-20'>
                                Not Found.</div>
                        ) : (
                            <div className='flex justify-center bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5'>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 pr-5 pb-10">
                                    {/* Map starships */}
                                    {filteredStarships.map((starship, index) => (
                                        <div key={starship.name} className='hover:scale-105'>
                                            <div className='absolute ml-48 mt-4 justify-center text-black z-10 cursor-pointer '>
                                                <div className="p-1 ">
                                                    {/* heart icon used to mark a starship as favorite & unFavorite*/}
                                                    {selectedStarships.some((ship) => ship.name === starship.name) ?
                                                        <AiFillHeart
                                                            className="w-9 h-9 hover:scale-110 transition-all duration-100 text-red-500"
                                                            onClick={() => handleFavoriteClick(starship)}
                                                        /> :
                                                        <AiOutlineHeart
                                                            className="w-9 h-9 hover:scale-110 transition-all duration-100 text-red-500"
                                                            onClick={() => handleFavoriteClick(starship)}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                            {/* The Link component wraps the Card component and makes it clickable */}
                                            <Link
                                                to={`/starship/${starship.url.split("/").filter(Boolean).pop()}`}
                                            >
                                                {/* The Card component displays information about the starship */}
                                                <Card
                                                    key={starship.name}
                                                    title={starship.name}
                                                    subtitle={starship.model}
                                                    image={Images.find(
                                                        (image) => image.name === starship.name
                                                    )?.img}
                                                    crew={starship.crew}
                                                    rating={starship.hyperdrive_rating}
                                                    passengers={starship.passengers}
                                                    length={starship.length}
                                                    cargo_capacity={starship.cargo_capacity}
                                                />
                                            </Link>
                                        </div>
                                    ))}

                                    <div className="flex justify-center col-span-full">
                                        {/* Load More button */}
                                        {loadingNext ?
                                            <div>
                                                Loading...
                                            </div> 
                                            :
                                            (
                                                <Button
                                                    onClick={handleNextPage}
                                                    disabled={loading}
                                                    className={`mt-5 ${noMoreData ? "opacity-50 cursor-not-allowed" : ""}`}
                                                >Load More</Button>
                                            )
                                        }

                                        {/* text content of the button */}


                                    </div>
                                </div>

                            </div>
                        )}

                </div>

            )}

        </div>



    );
}

export default StarshipList;  
