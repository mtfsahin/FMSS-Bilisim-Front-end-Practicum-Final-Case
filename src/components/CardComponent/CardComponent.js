import React from 'react';
import RatingComponent from '../RatingComponent/RatingComponent';
import StarshipImg from '../../assets/img/starship_1.png'


const Card = ({ title, subtitle, rating, passengers , length, cargo_capacity}) => {
    return (
        <div className="w-64 mt-1 transition-all duration-100 rounded-3xl overflow-hidden bg-primary-950 
                    cursor-pointer border-2 border-secondary-500 
                    shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] 
                    hover:scale-105">
            <div className='hover:text-secondary-400 text-secondary-50 transition-all duration-300 '>
                {/*Image area*/}
                <div className="flex justify-center">
                    <img className="w-48 hover:scale-105 transition-all duration-300 rounded-b-3xl border-b-2 border-secondary-500 bg-primary-950 p-10"
                        src={StarshipImg} alt="image_starship" />
                </div>
                <div className="px-6 py-3 bg-primary-950">
                    {/* Rating Area */}
                    <div className='flex justify-center'>
                        <RatingComponent rating={Math.floor(rating)} />
                    </div>
                    {/* Functional area  */}
                    <div className="text-center overflow-hidden truncate text-primary-100 text-md font-bold">{title}</div>
                    {/* Functional area  */}
                    <p className="text-center overflow-hidden truncate text-primary-100 text-sm">{subtitle}</p>
                    {/* Functional area */}
                    <div className="text-primary-50 text-xs font-sans mt-2 ">
                        <div className="flex justify-between">
                            <p className="font-bold">Passengers:</p>
                            <p className="ml-4 font-normal no-underline">{(passengers)}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-bold">Length:</p>
                            <p className="ml-4 font-normal">{length}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-bold">Cargo capacity:</p>
                            <p className="ml-4 font-normal">{cargo_capacity}</p>
                        </div>
                    </div>
                </div>
                <p className='flex justify-center mb-2 font-sans hover:underline text-sm'>Click to detail</p>
            </div>
        </div>
    )
}

export default Card;
