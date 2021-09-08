import styled from 'styled-components'

export default function Header() {

    const title = "lets Ride"
    const quote = "enjoy driving motorcycle - together!"

    return(
        <Wrapper>
            <img src="../images/letsRideImage.PNG" alt="lets ride - logo"/>
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