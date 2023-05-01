import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageNotFound() {
    //basic 404 page
    return (
        <>
            <div className='flex justify-center bg-blue-800 text-white p-3'>404 Page Not Found</div>
            <Outlet/>
        </>
    )
}
