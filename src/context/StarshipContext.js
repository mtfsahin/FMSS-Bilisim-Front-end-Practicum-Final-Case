import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);

        const fetchStarships = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/starships/');
                setStarships(response.data.results);
                setNextPage(response.data.next);
            } catch (error) {
                console.error('Error fetching starships:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStarships();
    }, []);

    const fetchNextPage = async () => {
        if (!nextPage) return;

        const response = await fetch(nextPage);
        const data = await response.json();
        setStarships(prevState => [...prevState, ...data.results]);
        setNextPage(data.next);
    };

    return (
        <StarshipContext.Provider value={{ starships, setStarships, fetchNextPage, nextPage, loading }}>
            {children}
        </StarshipContext.Provider>
    );
};

