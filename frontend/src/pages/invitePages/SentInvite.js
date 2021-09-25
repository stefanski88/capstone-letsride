import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useAuth} from "../../auth/AuthProvider";


export default function SentInvite() {

    const {token} = useAuth()

    return (
        <Page>
            <Header />
            <Main>
                <p>okok</p>
            </Main>
            <NavBar />
        </Page>
    );
}