import styled from 'styled-components/macro'

export default function Header() {

    const title = "lets Ride"
    const image = "letsRideImage.PNG"
    const quote = "enjoy riding motorcycle - together!"

    return(
        <Wrapper>
            <img src={image} alt="lets ride - logo"/>
            <h1>{title}</h1>
            <blockquote>{quote}</blockquote>
        </Wrapper>
    );
}

const Wrapper = styled.header`
  width: 100%;
  text-align: center;
  // image and background color
`