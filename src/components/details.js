import { useParams } from "react-router-dom"

export default function Details() {
    let params = useParams()
    console.log(params)
    return (
        <div className="flex flex-col text-center bg-yellow-700 text-white mt-3 p-2">  
            <div>Detail Ship</div>
            <h1>StarShip ID : {params.starsipId}</h1>
        </div>
    )
}