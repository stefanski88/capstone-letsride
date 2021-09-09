
export default function RiderCard( { riders } ) {

    return(
        <section>
            <h4>Username: {riders.userName}</h4>
            <img src="" alt="rider profile picture"/>
            <p>Firstname: {riders.firstName}</p>
            <p>Lastname: {riders.lastName}</p>
            <p>Age: {riders.age}</p>
            <p>Location: {riders.location}</p>
            <p>Driving Experience: {riders.drivingExp}</p>
            <p>Driving Style: {riders.drivingStyle}</p>
            <p>About: {riders.aboutMe}</p>
        </section>
    );
}