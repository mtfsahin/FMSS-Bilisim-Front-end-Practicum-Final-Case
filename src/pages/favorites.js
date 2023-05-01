import React, { useState, useEffect } from 'react';
import Card from '../components/CardComponent/CardComponent';
import { Link } from 'react-router-dom'
import Images from "../assets/img/image.json"
import { AiFillHeart } from "react-icons/ai";


function Favorites() {
    const [selectedStarships, setSelectedStarships] = useState([]);

    console.log("dizi", selectedStarships.length)

    const handleFavoriteClick = (starship) => {
        const existingStarships = JSON.parse(localStorage.getItem("selectedStarships")) || [];
        // If the clicked starship is already in the list of selected starships, we remove it.
        if (existingStarships.some((ship) => ship.name === starship.name)) {
            const updatedStarships = existingStarships.filter((ship) => ship.name !== starship.name);
            localStorage.setItem("selectedStarships", JSON.stringify(updatedStarships));
            setSelectedStarships(updatedStarships);
            // If the clicked starship is not in the list of selected starships, we add it.
        } else {
            const updatedStarships = [...existingStarships, starship];
            localStorage.setItem("selectedStarships", JSON.stringify(updatedStarships));
            setSelectedStarships(updatedStarships);
        }
    };
    // This is a side effect that runs once, on mount. It retrieves the list of selected starships from localStorage
    // and updates the state with it if there is any.
    useEffect(() => {
        const storedSelectedStarships = JSON.parse(localStorage.getItem("selectedStarships"));
        if (storedSelectedStarships) {
            setSelectedStarships(storedSelectedStarships);
        }

    }, []);

    return (
        <div className="max-w-screen-4xl mx-auto px-10 ">

            <div className='flex justify-center p-5 bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5 '>
                <div className='text-lg font-semibold'>
                    Favorites
                </div>
            </div>
            {selectedStarships.length !== 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 pr-5 pb-10">
                    {selectedStarships.map((starship, index) => (
                        <div key={starship.name} className='hover:scale-105'>
                            <div className='absolute ml-48 mt-4 justify-center text-black z-10 cursor-pointer '>
                                <div className="p-1 ">
                                    <AiFillHeart
                                        className="w-9 h-9 hover:scale-110 transition-all duration-100 text-red-500"
                                        onClick={() => handleFavoriteClick(starship)}
                                    />
                                </div>
                            </div>
                            <Link
                                to={`/starship/${starship.url.split("/").filter(Boolean).pop()}`}
                            >
                                <Card
                                    key={starship.name}
                                    title={starship.name}
                                    subtitle={starship.model}
                                    image={Images[index].img}
                                    crew={starship.crew}
                                    rating={starship.hyperdrive_rating}
                                    passengers={starship.passengers}
                                    length={starship.length}
                                    cargo_capacity={starship.cargo_capacity}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-center h-72 p-5 bg-white backdrop-blur-sm bg-opacity-20 rounded-3xl mt-5 '>
                    <div className='text-sm mt-28 font-semibold'>
                        Favorites not found!
                    </div>
                </div>
            )}
        </div>
    );

}

export default Favorites;  
