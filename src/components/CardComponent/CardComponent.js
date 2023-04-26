import React from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';
import StarshipImg from '../../assets/img/starship_1.png'


const Card = () => {
    return (
        <div class="w-60 mt-7 hover:w-64 hover:border-4 hover:secondary-700 transition-all duration-300 rounded-3xl overflow-hidden bg-primary-950 cursor-pointer border-2 border-secondary-500 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
            <div className='hover:text-secondary-400 text-secondary-50 transition-all duration-300 '>
                {/*Image area*/}
                <div className="flex justify-center">
                    <img className="w-48 hover:w-60 transition-all duration-300 rounded-b-3xl border-b-2 border-secondary-500 bg-primary-950 p-10"
                        src={StarshipImg} alt="Random" />
                </div>
                <div className="px-6 py-3 bg-primary-950">
                    {/* Rating Area */}
                    <div className='flex justify-center'>
                        <RatingComponent rating={3} />
                    </div>
                    {/* Functional area  */}
                    <div className="flex  justify-center text-primary-100 text-md font-bold ">Starship Name</div>
                    {/* Functional area  */}
                    <p className="flex justify-center text-primary-100  text-sm">Starship model</p>
                    {/* Functional area */}
                    <div className="text-primary-50 text-xs font-sans mt-2 ">
                        <div className="flex justify-between">
                            <p className="font-bold">Passengers:</p>
                            <p className="ml-4 font-normal no-underline">Ship name</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-bold">Lenght:</p>
                            <p className="ml-4 font-normal">100.000.0000</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-bold">MLTG:</p>
                            <p className="ml-4 font-normal">10000</p>
                        </div>
                    </div>
                </div>
                <p className='flex justify-center mb-2 font-sans hover:underline text-sm'>Click to detail</p>
            </div>
        </div>
    )
}

export default Card;
