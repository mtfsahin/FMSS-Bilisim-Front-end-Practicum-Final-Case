import React from 'react';

const Button = ({ children, onClick, color = 'blue' }) => {
    const colors = {
        primary: 'bg-primary-50 hover:bg-primary-200',
        secondary: 'bg-secondary-500 hover:bg-primary-50',
    };

    const colorClass = colors[color] || colors.blue;

    return (
        <button className={`py-2 px-4 ${colorClass} text-primary-950 font-sans rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-${color}-400 focus:ring-opacity-75 `}>
            {children}
        </button>
    );
};

export default Button;
