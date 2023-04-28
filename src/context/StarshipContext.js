import React, { createContext, useState, useEffect } from 'react';

export const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
    const [starships, setStarships] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        const fetchStarships = async () => {
            const response = await fetch('https://swapi.dev/api/starships/');
            const data = await response.json();
            setStarships(data.results);
            setNextPage(data.next);
            setLoading(false);
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
        <StarshipContext.Provider value={{ starships, fetchNextPage , nextPage, loading}}>
            {children}
        </StarshipContext.Provider>
    );
};

