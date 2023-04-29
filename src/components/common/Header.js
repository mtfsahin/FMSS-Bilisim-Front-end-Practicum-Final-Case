import React from 'react'
import { Link, } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            {/* Navbar content */}
            <nav className="sticky z-10 top-0 flex gap-1 p-3 border-2 border-gray-500 backdrop-blur-lg rounded-lg bg-black bg-opacity-40 order-dotted rounded-b-lg">                {/* create nav using react router dom Link property */}
                <Link to="/">
                    <span className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2">
                        Home
                    </span>
                </Link>
                {/* create nav using react router dom Link property */}
                <Link to="/about">
                    <span className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2">
                        About
                    </span>
                </Link>
            </nav>
        </>
    )
}
