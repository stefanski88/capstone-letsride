import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Loading()
{
    return (
        <Loader type="BallTriangle" color="#3f50b5" height={120} width={120}/>
    )

}