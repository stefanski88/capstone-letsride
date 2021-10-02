import NavBar from "../../components/NavBar";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthProvider";
import {createInvite, getUser} from "../../services/API-Service";
import {useParams} from "react-router-dom";
import RiderCard from "../../components/cards/RiderCard";
import Datetime from 'react-datetime';
import moment from 'moment';
import MainGallery from "../../components/MainGallery";
import {StyledSection} from "../../components/StyledSection";
import TextField from "@mui/material/TextField";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {InviteSection} from "../../components/InviteSection";
import {Wrapper} from "../../components/styled/Wrapper";


export default function FoundRider() {

    const {token} = useAuth()
    const {user} = useParams()

    const [rider, setRider] = useState({})
    const [loading, setLoading] = useState(false)
    const [dateTime, setDateTime] = useState(new Date())
    const [inputLocation, setInputLocation] = useState('')

    useEffect(() => {
        getUser(user)
            .then(data => setRider(data))
    }, [])

    const formattedDateTime = moment(dateTime).format('lll').toString()

    useEffect(() => {
        setDateTime(dateTime)
        console.log(dateTime)
    }, [])

    const handleCreateInvite = async () => {
        if (!dateTime) {
            alert('please select a date')
            return
        }
        setLoading(true)
        const createRequest = await createInvite({
                receiver: rider.userName,
                timeStamp: formattedDateTime,
                location: inputLocation,
            },
            token);
        setLoading(false)
        if (createRequest) {
            alert(`The invite to ${rider.userName} has been sent`)
        } else {
            console.error('An Error happened while creating')
        }
    }

    const handleInputChange = event => {
        setInputLocation(event.target.value)
    }

    return (
        <Page>
            <Header/>
            <MainGallery>
                <Wrapper>
                    <RiderCard rider={rider}/>
                    <Datetime locale="de"
                              value={dateTime}
                              onChange={setDateTime}/>
                    <TextSnippetOutlinedIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField
                        variant="standard"
                        name="aboutMe"
                        value={inputLocation}
                        onChange={handleInputChange}
                        placeholder="Suggest a meeting place"
                        multiline
                        rows={3}
                        maxRows={3}/>
                    <button onClick={handleCreateInvite}>invite rider!</button>
                </Wrapper>
            </MainGallery>

            <NavBar/>
        </Page>
    );
}