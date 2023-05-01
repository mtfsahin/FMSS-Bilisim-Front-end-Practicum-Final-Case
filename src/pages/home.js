import React from 'react';
import { Outlet } from 'react-router-dom'
import SWLogo from '../assets/img/sw_logo.webp'
import StarshipList from '../components/StarshipListComponent/StarshipList'

const Home = () => {
    return (
        <>
            {/* {create logo area} */}
            <div className='flex justify-center'>
                <img alt="star_wars_logo" src={SWLogo} className='w-36 mt-4 mb-5'></img>
            </div>
            {/* {call starshiplist component} */}
            <StarshipList />
            {/* Outlet */}
            <Outlet />
        </>
    )
}
export default Home;