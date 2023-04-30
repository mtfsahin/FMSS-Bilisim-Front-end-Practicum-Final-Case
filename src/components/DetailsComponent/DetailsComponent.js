import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import axios from 'axios';
import Images from "../../assets/img/image.json"

export default function DetailsComponent({ url }) {
    const [starship, setStarship] = useState(null);
    //Call starshipID with useContext
    const { starshipID } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // handle go back button click
    const handleGoBackClick = () => {
        navigate(-1);
    };

    //sent the Starship ID, which I extracted from the link, to the API to fetch the details
    useEffect(() => {
        setLoading(true);
        //fetchStarship
        const fetchStarship = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/starships/${starshipID}`);
                  //response data
                setStarship(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStarship();
    }, []);


    // am making the area that fetches the data a
    //function to avoid writing it repeatedly
    function getData(name, description) {
        return <p className="text-sm mb-2">
            <strong className="underline">{name}</strong>{" "}
            {description}
        </p>;
    }

     // am making the area that error the notFound
    //function to avoid writing it repeatedly
    function notFound(name) {
        return <p className="text-sm mb-2">
            <strong className="underline">{name}</strong>{" "}
            Data not found.
        </p>;
    }

    return (
        <div className="container mx-auto mt-10 p-10 bg-white backdrop-blur-sm bg-opacity-20 rounded-md">

            {/* check loading */}
            {loading ? (
                <div className="relative justify-center items-center">
                    <LoadingComponent />
                </div>
            ) : (
                <div>
                    {/* create go back button and link it to the home page */}
                    <Link
                        to="/"
                        className="px-4 py-2 mr-2 mt-10 font-bold underline"
                        onClick={handleGoBackClick}
                    >
                        Go back
                    </Link>

                    <div className="flex flex-wrap my-8">
                        <div className="w-full md:w-2/5 md:pr-10 ">
                            {/* Ship image area */}
                            <img
                                className="w-52 pl-4"
                                // change zoom=1 value zoom=2, because images in zoom2 more than clear zoom1
                                //In some, images do not appear when http so i changed https
                                src={Images.find(
                                    (image) => image.name === starship.name
                                )?.img}
                            />

                        </div>
                        <div className="w-full md:w-3/5 mt-8 md:mt-0 pl-4">
                            <h1 className="text-xl md:text-4xl font-bold mb-2">
                                {/* Ship title */}
                                {starship.name}
                            </h1>
                            {/* Ship model */}
                            {starship.model ? (
                                getData("Model:", starship.model)
                            ) : (
                                notFound("Model")
                            )}

                            {/* Ship Manufucturer */}
                            {starship.manufacturer ? (
                                getData("Manufucturer:", starship.manufacturer)
                            ) : (
                                notFound("Manufucturer")
                            )}
                            {/* Ship Cost In Credits */}
                            {starship.cost_in_credits ? (
                                getData("Cost In Credits:", starship.cost_in_credits)
                            ) : (
                                notFound("Cost In Credits")
                            )}
                            {/* Ship length */}
                            {starship.length ? (
                                getData("Length:", starship.length)
                            ) : (
                                notFound("Length")
                            )}
                            {/* Max atmosphering spee */}
                            {starship.max_atmosphering_speed ? (
                                getData("Max atmosphering speed:", starship.max_atmosphering_speed)
                            ) : (
                                notFound("LengMax atmosphering speedth")
                            )}
                            {/* Crew */}
                            {starship.crew ? (
                                getData("Crew:", starship.crew)
                            ) : (
                                notFound("Crew")
                            )}
                            {/* Passengers */}
                            {starship.passengers ? (
                                getData("Passengers:", starship.passengers)
                            ) : (
                                notFound("Passengers")
                            )}
                            {/* Cargo Capacity */}
                            {starship.cargo_capacity ? (
                                getData("Cargo Capacity:", starship.cargo_capacity)
                            ) : (
                                notFound("Cargo Capacity")
                            )}
                            {/* Consumables */}
                            {starship.consumables ? (
                                getData("Consumables:", starship.consumables)
                            ) : (
                                notFound("Consumables")
                            )}
                             {/* Hyperdrive Rating */}
                            {starship.hyperdrive_rating ? (
                                getData("Hyperdrive Rating:", starship.hyperdrive_rating)
                            ) : (
                                notFound("Hyperdrive Rating")
                            )}
                            {/* MGLT*/}
                            {starship.MGLT ? (
                                getData("MGLT:", starship.MGLT)
                            ) : (
                                notFound("MGLT")
                            )}
                            {/* Starship Class*/}
                            {starship.starship_class ? (
                                getData("Starship Class:", starship.starship_class)
                            ) : (
                                notFound("Starship Class")
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
