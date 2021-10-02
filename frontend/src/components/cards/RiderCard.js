import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";

export default function RiderCard( { rider } ) {

    const history = useHistory()

    function selectRiderCard(user) {
        history.push(`foundRider/${user}`)
    }

    return(
        <StyledRiderCard onClick={()=>selectRiderCard(rider.userName)}>
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
        </StyledRiderCard>
    );
}

const StyledRiderCard = styled.section`
  padding: 5px;  
  width: 300px;
  text-align: left;
  border: 1px  #3f50b5;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #3f50b5;
  margin: 12px 20px 12px 12px;
`

const StyledImg = styled.img`
  width  : 10rem;
`
