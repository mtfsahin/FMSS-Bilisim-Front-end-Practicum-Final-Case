import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ButtonComponent/ButtonComponent';

export default function Header() {
    return (
        <>
            {/* Navbar content */}
            <div className="sticky z-10 top-0 flex flex-col lg:flex-row justify-between gap-3 p-3 pl-10 border-2 border-gray-500 backdrop-blur-lg rounded-lg bg-black bg-opacity-40 order-dotted rounded-b-lg">
                {/* create nav using react router dom Link property */}
                <div className='flex justify-center gap-3'>
                    <Link to="/">
                        <Button color="header">Home</Button>
                    </Link>
                    <Link to="/favorites">
                        <Button color="header">Favorites</Button>
                    </Link>
                    {/* create nav using react router dom Link property */}
                    <Link to="/about">
                        <Button color="header">About</Button>
                    </Link>
                </div>
                {/* create right-aligned text */}
                <div className=" lg:mt-2">
                    <div id="scroll-container">
                        <div id="scroll-text" className="text-center lg:text-right text-primary-50 text-sm">Mustafa Şahin - FMSS Bilişim Front-End Practicum Final Case</div>
                    </div>
                </div>
            </div>


            {/* Scrooling text css */}
            <style>
                {` #scroll-container {
                            overflow: hidden;
                        }
                        #scroll-text {
                            /* animation properties */
                            -moz-transform: translateX(100%);
                            -webkit-transform: translateX(100%);
                            transform: translateX(100%);
                            -moz-animation: my-animation 15s linear infinite;
                            -webkit-animation: my-animation 15s linear infinite;
                            animation: my-animation 15s linear infinite;
                        }
                        /* for Firefox */
                        @-moz-keyframes my-animation {
                            from {
                                -moz-transform: translateX(100%);
                            }
                            to {
                                -moz-transform: translateX(-100%);
                            }
                        }
                        /* for Chrome */
                        @-webkit-keyframes my-animation {
                            from {
                                -webkit-transform: translateX(100%);
                            }
                            to {
                                -webkit-transform: translateX(-100%);
                            }
                        }
                        @keyframes my-animation {
                            from {
                                -moz-transform: translateX(100%);
                                -webkit-transform: translateX(100%);
                                transform: translateX(100%);
                            }
                            to {
                                -moz-transform: translateX(-100%);
                                -webkit-transform: translateX(-100%);
                                transform: translateX(-100%);
                            }
                        }
                    `}
            </style>
        </>
    );
}
