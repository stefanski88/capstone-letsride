import styled from "styled-components/macro";
import {StyledSection} from "./StyledSection";

export default function RiderCard( { rider } ) {

    return(
        <StyledSection>
            <h4>Username: {rider.userName}</h4>
            <StyledImg src="https://thispersondoesnotexist.com/image" alt="rider profile picture"/>
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