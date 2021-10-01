import {StyledHeader} from "./styled/StyledHeaderImg";
import {StyledHeaderImage} from "./styled/StyledHeaderImage";
import {StyledHeaderBlockquote} from "./styled/StyledHeaderBlockquote";


export default function Header() {

    const title = "let's Ride!"
    const image = `${process.env.PUBLIC_URL}/letsRideImage.PNG`
    const quote = "enjoy riding motorcycle - together!"

    return (
        <StyledHeader>
            <StyledHeaderImage src={image} alt="lets ride - logo"/>
            <h1>{title}</h1>
            <div>
                <StyledHeaderBlockquote>{quote}</StyledHeaderBlockquote>
            </div>
        </StyledHeader>
    );
}
