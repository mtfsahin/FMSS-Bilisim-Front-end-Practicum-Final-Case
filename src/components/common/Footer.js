import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from '../ButtonComponent/ButtonComponent';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 bg-primary-100 z-10 text-black p-1 sm:p-5">
            <div className="mx-auto flex justify-between items-center">
                <div>
                    <a href="https://www.linkedin.com/in/mustafa-sahin-dev/" target="_blank" rel="noopener" className="text-primary-950 mr-4 hover:text-primary-800"><FaLinkedin size={24} /></a>
                    <a href="https://github.com/mtfsahin" target="_blank" rel="noopener" className="text-primary-950 hover:text-primary-800"><FaGithub size={24} /></a>
                </div>
            </div>
        </footer>
    )
}
