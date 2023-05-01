import LoadingGif from "../../assets/img/loading.gif"

// I have created a loading component using a gif
function LoadingComponent() {
    return (
        <>
            <div className="flex justify-center">
                {/* use loading gif */}
                <img
                    className="w-80 h-64 animate-pulse"
                    src={LoadingGif}
                    alt="loading"
                />
            </div>
        </>
    );
}

export default LoadingComponent;
