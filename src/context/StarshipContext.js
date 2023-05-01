import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingNext, setLoadingNext] = useState(true);


    // Use the useEffect hook to run the fetchStarships function when the component mounts
    useEffect(() => {
        // Set the loading state to true
        setLoading(true);

        //dfine an async function to fetch starship data
        const fetchStarships = async () => {
            try {
                //GET request to the URL defined in the environment variables
                const response = await axios.get(`${process.env.REACT_APP_URL}`);

                //update the state with the starship data from the response
                setStarships(response.data.results);
                setNextPage(response.data.next);
            } catch (error) {
                //Log any errors that occur during the fetch
                console.error('Error fetching starships:', error);
            } finally {
                //set the loading state to false after the fetch is complete
                setLoading(false);
            }
        };

        //call the fetchStarships()
        fetchStarships();
    }, []);

    //define an async function to fetch the next page of starship data
    const fetchNextPage = async () => {
        setLoadingNext(true);
        //If there is no nextPage value, return and do nothing
        if (!nextPage) return;
        
        // Fetch the next page of data using the nextPage URL
        const response = await fetch(nextPage);
        const data = await response.json();

        // Update the state with the new starship data
        setStarships(prevState => [...prevState, ...data.results]);
        setNextPage(data.next);
        setLoadingNext(false);
    };


    return (
        <StarshipContext.Provider value={{ starships, setStarships, fetchNextPage, nextPage, loading, loadingNext}}>
            {children}
        </StarshipContext.Provider>
    );
};

