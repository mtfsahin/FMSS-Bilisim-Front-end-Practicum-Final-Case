import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBox from '../components/SearchComponent/SearchComponent'
import Card from '../components/CardComponent/CardComponent'
import Button from '../components/button/ButtonComponent'
import SWLogo from '../assets/img/sw_logo.webp'

export default function home() {
    return (
        <>
            <div className='flex justify-center bg-blue-800 text-white p-3'>Home Page</div>
            <div className='flex justify-center'>
                <img alt="star_wars_logo" src={SWLogo} className='w-24 mt-4 mb-2'></img>
            </div>
            <div className='flex gap-2'>
                <Button color='secondary'>Search</Button>
                <Button color='primary'>Search</Button>
            </div>
            <SearchBox placeholder="Search here" />
            <Card />
            <Outlet></Outlet>
        </>
    )
}
