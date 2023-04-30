import { useEffect, useState } from "react";
import LoadingGif from "../../assets/img/loading.gif"

function LoadingComponent() {
    const [showLoader, setShowLoader] = useState(true);



    return (
        <>
            {showLoader && (
                <div className="flex justify-center">
                    <img
                        className="w-80 h-64 animate-pulse"
                        src={LoadingGif}
                    />
                </div>
            )}
        </>
    );
}

export default LoadingComponent;
