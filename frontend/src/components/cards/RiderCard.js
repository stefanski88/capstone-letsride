import styled from "styled-components/macro";
import {StyledSection} from "../StyledSection";
import {useHistory} from "react-router-dom";

export default function RiderCard( { rider } ) {

    const history = useHistory()

    function selectRiderCard(user) {
        history.push(`foundRider/${user}`)
    }

    return(
        <StyledSection onClick={()=>selectRiderCard(rider.userName)}>
            <ul>
            <h4>{rider.userName}</h4>
            <StyledImg src="https://thiscatdoesnotexist.com/?ref=producthunt" alt="rider profile picture"/>
            <li>Firstname: {rider.firstName}</li>
            <li>Lastname: {rider.lastName}</li>
            <li>Age: {rider.age}</li>
            <li>Location: {rider.location}</li>
            <li>Driving Experience: {rider.drivingExp}</li>
            <li>Driving Style: {rider.drivingStyle}</li>
            <li>About: {rider.about}</li>
            </ul>
        </StyledSection>
    );
}

const StyledImg = styled.img`
  width  : 10rem;
`
