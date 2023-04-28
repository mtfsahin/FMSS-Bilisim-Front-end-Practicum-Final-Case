import React from 'react';

//set defatult color key primary
const Button = ({ children, onClick, color = 'secondary', className}) => {

    //define to color properties to change the colors of the button
    const colors = {
        primary: 'bg-primary-50 hover:bg-primary-200',
        secondary: 'bg-secondary-500 hover:bg-primary-100',
    };

    //define to color properties to change the colors of the button
    const colorClass = colors[color] || colors.blue;

    return (
        //create button 
        <button onClick={onClick} className={`py-2 px-4 ${colorClass} text-primary-950 font-sans shadow-2xl shadow-secondary-500 rounded-lg  focus:outline-none  ${className}`}>
            {children}
        </button>
    );
};

export default Button;
