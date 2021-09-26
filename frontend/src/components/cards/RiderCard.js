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
            <StyledH>{rider.userName}</StyledH>
            <StyledImg src="https://thiscatdoesnotexist.com/?ref=producthunt" alt="rider profile picture"/>
            <StyledP>Firstname: {rider.firstName}</StyledP>
            <StyledP>Lastname: {rider.lastName}</StyledP>
            <StyledP>Age: {rider.age}</StyledP>
            <StyledP>Location: {rider.location}</StyledP>
            <StyledP>Driving Experience: {rider.drivingExp}</StyledP>
            <StyledP>Driving Style: {rider.drivingStyle}</StyledP>
            <StyledP>About: {rider.about}</StyledP>
        </StyledSection>
    );
}

const StyledImg = styled.img`
  width  : 10rem;
`
const StyledP = styled.p`
  margin: 0.5rem 0;
`
const StyledH = styled.h4`
  text-align: center;
`