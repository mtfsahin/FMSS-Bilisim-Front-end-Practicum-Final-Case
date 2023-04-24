import React from 'react'
import { Link, } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
    return (
        <>
            {/* Navbar content */}
            <nav className="flex gap-1 p-3 border-2 border-gray-500 border-dotted rounded-b-lg">
                {/* create nav using react router dom Link property */}
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
                <div className="ml-auto flex ">
                    {/* create linkedin redirecting */}
                    <a
                        href="https://www.linkedin.com/in/mustafa-sahin-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white hover:border-gray-800 rounded-lg mr-2 border-dashed border-2"
                    >
                        {/* use linekdin icon from react-icons library */}
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/mtfsahin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white hover:border-gray-800 rounded-lg mr-2 border-dashed border-2 underline"
                    >
                        {/* use github icon from react-icons library */}
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </>
    )
}
