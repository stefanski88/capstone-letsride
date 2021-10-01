import styled from "styled-components/macro";

export default function Header() {

    const title = "let's Ride!"
    const image = `${process.env.PUBLIC_URL}/letsRideImage.PNG`
    const quote = "enjoy riding motorcycle - together!"

    return (
        <StyledHeader>
            <StyledHeaderTop>
            <StyledHeaderImage src={image} alt="lets ride - logo"/>
            <h1>{title}</h1>
            </StyledHeaderTop>
            <div>
                <StyledHeaderBlockquote>{quote}</StyledHeaderBlockquote>
            </div>
        </StyledHeader>
    );
}

const StyledHeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 15px;
  padding: 0 200px;
`

const StyledHeader = styled.header`
  width: 100%;
  padding: var(--size-m);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr min-content;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  
  /*
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: 1rem 0;
position: fixed;
top: 0;
left: 0;
 */
`
const StyledHeaderBlockquote = styled.blockquote`
  font-size: 1rem;
  
`
const StyledHeaderImage = styled.img`
  width : 100%;
  align-self: center;
`

