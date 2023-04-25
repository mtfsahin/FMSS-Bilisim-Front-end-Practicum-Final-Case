import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBox from '../components/SearchComponent/SearchComponent'

export default function home() {
    return (
        <>
        <div className='flex justify-center bg-blue-800 text-white p-3'>Home Page</div>
        <SearchBox placeholder="Search here" />
        <Outlet></Outlet>
        </>
    )
}
