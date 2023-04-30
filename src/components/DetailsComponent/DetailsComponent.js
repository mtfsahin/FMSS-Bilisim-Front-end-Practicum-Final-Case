import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function DetailsComponent({ url }) {
    const [starship, setStarship] = useState(null);
    //Call BooksContent with useContext
    const { starshipID } = useParams();
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);

    // handle go back button click
    const handleGoBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        setLoading(true);
        const fetchStarship = async () => {
            const response = await fetch(`https://swapi.dev/api/starships/${starshipID}`);
            const data = await response.json();
            setStarship(data);
            console.log("gelen data", data)
            setLoading(false);
        };
        fetchStarship();
    }, []);



    //If the book variable is empty, a warning will appear on the screen


    function getData(name, description) {
        return <p className="text-sm mb-2">
            <strong className="underline">{name}</strong>{" "}
            {description}
        </p>;
    }

    function notFound(name) {
        return <p className="text-sm mb-2">
            <strong className="underline">{name}</strong>{" "}
            Data not found.
        </p>;
    }

    return (
        <div className="container mx-auto mt-10 p-10 bg-white backdrop-blur-sm bg-opacity-20 rounded-md">
            {loading ? (
                <div className="relative justify-center items-center">
                    <LoadingComponent />
                </div>
                ) : (
                <div>
                    <Link
                        to="/"
                        className="px-4 py-2 mr-2 mt-10 font-bold underline"
                        onClick={handleGoBackClick}
                    >
                        Go back
                    </Link>
                    <div className="flex flex-wrap my-8">
                        <div className="w-full md:w-2/5 md:pr-10 ">
                            {/* Book image area */}
                            {/* {starship.volumeInfo.imageLinks && (
                                <img
                                    className="w-52 pl-4"
                                    // change zoom=1 value zoom=2, because images in zoom2 more than clear zoom1
                                    //In some, images do not appear when http so i changed https
                                    src={starship.volumeInfo.imageLinks.thumbnail.replace(
                                        "http://",
                                        "https://"
                                    ).replace("zoom=1", "zoom=2")}
                                    alt={starship.volumeInfo.title}
                                />
                            )} */}
                        </div>
                        <div className="w-full md:w-3/5 mt-8 md:mt-0 pl-4">
                            <h1 className="text-xl md:text-4xl font-bold mb-2">
                                {/* Book title area */}
                                {starship.name}
                            </h1>

                            {starship.model ? (
                                getData("Model:", starship.model)
                            ) : (
                                notFound("Model")
                            )}


                            {starship.manufacturer ? (
                                getData("Manufucturer:", starship.manufacturer)
                            ) : (
                                notFound("Manufucturer")
                            )}

                            {starship.cost_in_credits ? (
                                getData("Cost In Credits:", starship.cost_in_credits)
                            ) : (
                                notFound("Cost In Credits")
                            )}

                            {starship.length ? (
                                getData("Length:", starship.length)
                            ) : (
                                notFound("Length")
                            )}

                            {starship.max_atmosphering_speed ? (
                                getData("Max atmosphering speed:", starship.max_atmosphering_speed)
                            ) : (
                                notFound("LengMax atmosphering speedth")
                            )}

                            {starship.crew ? (
                                getData("Crew:", starship.crew)
                            ) : (
                                notFound("Crew")
                            )}

                            {starship.passengers ? (
                                getData("Passengers:", starship.passengers)
                            ) : (
                                notFound("Passengers")
                            )}

                            {starship.cargo_capacity ? (
                                getData("Cargo Capacity:", starship.cargo_capacity)
                            ) : (
                                notFound("Cargo Capacity")
                            )}

                            {starship.consumables ? (
                                getData("Consumables:", starship.consumables)
                            ) : (
                                notFound("Consumables")
                            )}

                            {starship.hyperdrive_rating ? (
                                getData("Hyperdrive Rating:", starship.hyperdrive_rating)
                            ) : (
                                notFound("Hyperdrive Rating")
                            )}

                            {starship.MGLT ? (
                                getData("MGLT:", starship.MGLT)
                            ) : (
                                notFound("MGLT")
                            )}

                            {starship.starship_class ? (
                                getData("Starship Class:", starship.starship_class)
                            ) : (
                                notFound("Starship Class")
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* create go back button and link it to the home page */}

        </div>
    );
}
