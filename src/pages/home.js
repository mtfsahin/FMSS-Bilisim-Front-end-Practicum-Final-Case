import React, { useContext } from 'react';
import { StarshipContext } from '../context/StarshipContext';
import { Outlet } from 'react-router-dom'
import SearchBox from '../components/SearchComponent/SearchComponent'
import Button from '../components/ButtonComponent/ButtonComponent'
import SWLogo from '../assets/img/sw_logo.webp'

import StarshipList from '../components/StarshipList'

const Home = () => {



    return (
        <>
            <div className='flex justify-center'>
                <img alt="star_wars_logo" src={SWLogo} className='w-24 mt-4 mb-2'></img>
            </div>
            
            <StarshipList />




            <Outlet></Outlet>
        </>
    )
}

export default Home;