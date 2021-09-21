import {useState} from "react";
import Main from "../components/Main";
import {useAuth} from "../auth/AuthProvider";
import { Redirect } from "react-router-dom";
import PaperComponent from "../components/PaperComponent";
import {deleteUser} from "../services/API-Service";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

export default function DeleteAccount() {

    const { user, logout, token } = useAuth()
    const [setDeletion] = useState()
    const [error, setError] = useState()
    const [open, setOpen] = useState(false)

    if(!user) {
        <Redirect to ="/login" />
    }

    const handleConfirmation = () => {
        setOpen(false)
        deleteUser(token)
            .then(data => setDeletion(data))
            .then(logout)
            .catch(error => setError(error))
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
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
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirmation}>Confirm</Button>
                </DialogActions>
            </Dialog>
            <NavBar />
        </Main>
    );
}