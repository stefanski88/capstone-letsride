
export default function RiderCard( { rider } ) {

    return(
        <section>
            <h4>Username: {rider.userName}</h4>
            <img src="" alt="rider profile picture"/>
            <p>Firstname: {rider.firstName}</p>
            <p>Lastname: {rider.lastName}</p>
            <p>Age: {rider.age}</p>
            <p>Location: {rider.location}</p>
            <p>Driving Experience: {rider.drivingExp}</p>
            <p>Driving Style: {rider.drivingStyle}</p>
            <p>About: {rider.about}</p>
        </section>
    );
}