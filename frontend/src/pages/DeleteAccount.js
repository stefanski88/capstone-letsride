import {useState} from "react";
import Main from "../components/Main";
import {useAuth} from "../auth/AuthProvider";
import { Redirect } from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import PaperComponent from "../components/PaperComponent";
import {deleteUser} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function DeleteAccount() {

    const { user, logout, token } = useAuth()
    const [deletion, setDeletion] = useState()
    const [error, setError] = useState()
    const [open, setOpen] = useState(false)

    if(!user) {
        <Redirect to ="/login" />
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleConfirmation = () => {
        setOpen(false)
        deleteUser(token)
            .then(data => setDeletion(data))
            .then(logout)
            .catch(error => setError(error))
    }

    return(
        <Main>
            <Header />
            <Button variant="outlined" onClick={handleClickOpen}>
                Delete Account
            </Button>
            <Dialog
                open={open}
                onClose={handleConfirmation}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirm deletion
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete your account? <br/>
                        <strong>Attention: Once deleted, your account cannot be restored!</strong> <br/>
                        <br/>
                        Please confirm the deletion of your account.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleConfirmation}>Cancel</Button>
                    <Button onClick={handleConfirmation}>Confirm</Button>
                </DialogActions>
            </Dialog>
            <NavBar />
        </Main>
    );
}