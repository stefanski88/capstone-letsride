import {useState} from "react";
import Main from "../components/Main";
import {useAuth} from "../auth/AuthProvider";
import {Link, Redirect} from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import PaperComponent from "../components/PaperComponent";
import {deleteUser} from "../services/API-Service";
import NavBar from "../components/NavBar";

export default function DeleteAccount() {

    const { user, logout, deleteUser } = useAuth()
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
        deleteUser(deletion => setDeletion(deletion))
            .then(logout)
            .catch(error => setError(error))
    }

    return(
        <Main>
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
                    <Button onClick={null}>Confirm</Button>
                </DialogActions>
            </Dialog>
            <NavBar />
        </Main>
    );
}