import {useHistory} from 'react-router-dom'
export default function MotoCard( { moto } ) {

    const history = useHistory();

    function selectMoto(id) {
        history.push(`myMotorcycle/${id}`)
    }
    return(
        <section onClick={()=>{selectMoto(moto.motoID)}}>
            <h4>Username: {moto.motoNickName}</h4>
            <p>Manufacturer: {moto.manufacturer}</p>
            <p>Lastname: {moto.model}</p>
            <p>Age: {moto.constructionYear}</p>
        </section>
    );
}