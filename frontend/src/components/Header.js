import styled from 'styled-components/macro'

export default function Header() {

    const title = "let's Ride!"
    const image = "letsRideImage.PNG"
    const quote = "enjoy riding motorcycle - together!"

    return(
        <StyledHeader>
            <StyledHeaderImg src={image} alt="lets ride - logo"/>
            <h1>{title}</h1>
            <div>
            <StyledBlockquote>{quote}</StyledBlockquote>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const StyledHeaderImg = styled.img`
  width : 50%;
  margin: 0 1rem;

`
const StyledBlockquote = styled.blockquote`
  font-size: 1.2rem;



`