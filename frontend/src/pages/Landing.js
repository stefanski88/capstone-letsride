import {useState} from "react";
import RiderCard from "../components/cards/RiderCard";
import {getUsers} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import MainGallery from "../components/MainGallery";
import Page from "../components/Page";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import PaperComponent from "../components/PaperComponent";
import {Link} from "react-router-dom";

export default function Landing() {

    const [riders, setRiders] = useState([])
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        getUsers().then(setRiders).then(handleClose)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Page>
            <Header/>
            <div>
            <MainGallery>
                {riders.map(rider => (
                    <RiderCard key={rider.userName} rider={rider}/>
                ))}
            </MainGallery>
                <Button variant="outlined" onClick={handleClickOpen}>
                    WELCOME FRESHMAN
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClick}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                        Welcome..
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Nice to see you here, stranger! <br/>
                            <strong>Sign up for free, meet new people and ride safe!</strong> <br/>
                            Check out who is already part of our community..
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClick}>Let's Ride!</Button>
                    </DialogActions>
                </Dialog>

            </div>

            <NavBar/>
        </Page>
    );
}