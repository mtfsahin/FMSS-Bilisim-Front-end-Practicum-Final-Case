import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getShips } from './data'

export default function starships() {
    let ships = getShips()
    return (
        <>
            <div className='flex justify-center bg-yellow-400 p-3'>Starships Page</div>
            <main className='text-center'>
                <div className='flex flex-col gap-3 mt-4'>
                    {ships.map(ship => (
                        <Link
                            className='bg-red-300'
                            to={`/starships/${ship.number}`}
                            key={ship.number}
                        >
                            {ship.name}
                        </Link>
                    ))}
                </div>
            </main>
            <Outlet></Outlet>
        </>
    )
}
