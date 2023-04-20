import React from 'react'
import { Outlet } from 'react-router-dom'

export default function home() {
    return (
        <>
        <div className='flex justify-center bg-blue-800 text-white p-3'>Home Page</div>
        <Outlet></Outlet>
        </>
    )
}
