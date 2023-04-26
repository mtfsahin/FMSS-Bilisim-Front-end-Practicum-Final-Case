function RatingComponent({ rating }) {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(<svg key={i} className="w-4 h-4 text-secondary-500 mr-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L6.51 6.19L0.98 7.07L4.72 11.42L3.71 17.01L10 14.3L16.29 17.01L15.28 11.42L19.02 7.07L13.49 6.19L10 0Z" />
            </svg>);
        } else {
            stars.push(<svg key={i} className="w-3.5 h-4 text-primary-300 mr-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L6.51 6.19L0.98 7.07L4.72 11.42L3.71 17.01L10 14.3L16.29 17.01L15.28 11.42L19.02 7.07L13.49 6.19L10 0Z" />
            </svg>);
        }
    }

    return (
        <div className="flex justify-center items-center mb-2  text-xs">
            <p className="text-primary-50 mr-1">Rank:</p>
            {stars}
            {/* Rating değeri */}
            <span className="text-primary-300 text-xs ml-1">({rating})</span>
        </div>
    );
}

export default RatingComponent;
