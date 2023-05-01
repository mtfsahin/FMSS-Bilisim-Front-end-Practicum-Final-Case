import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        // Render a fixed footer at the bottom of the page with linkedin & github
        <footer className="fixed bottom-0 bg-primary-100 z-10 text-black p-1 sm:p-5">
            <div className="mx-auto flex justify-between items-center">
                <div>
                    {/* Render a LinkedIn icon */}
                    <a href="https://www.linkedin.com/in/mustafa-sahin-dev/" target="_blank" rel="noopener noreferrer" className="text-primary-950 mr-4 hover:text-primary-800"><FaLinkedin size={24} /></a>
                    {/* Render a GitHub icon &*/}
                    <a href="https://github.com/mtfsahin" target="_blank" rel="noopener noreferrer" className="text-primary-950 hover:text-primary-800"><FaGithub size={24} /></a>
                </div>
            </div>
        </footer>
    )
}
