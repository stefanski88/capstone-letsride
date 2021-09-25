import {useState} from "react";
import Main from "../../components/Main";
import {useAuth} from "../../auth/AuthProvider";
import {Link, Redirect} from "react-router-dom";
import PaperComponent from "../../components/PaperComponent";
import {deleteUser} from "../../services/API-Service";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Page from "../../components/Page";

export default function DeleteAccount() {

    const {logout, token, user} = useAuth()
    console.log(token)

    const [deletion, setDeletion] = useState()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleConfirmation = () => {
        setLoading(true)
        setOpen(false)
        deleteUser(token)
            .then(deletion => setDeletion(deletion))
            .catch(error => console.error(error))
            .then(logout)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    if (!user) {
        return <Redirect to="/login" />
    }

    return (
        <Page>
            <Header/>
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
                    <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
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
                        <Button as={Link} to="/login" onClick={handleConfirmation}>Confirm</Button>
                    </DialogActions>
                </Dialog>
            </Main>
            <NavBar/>
        </Page>
    );
}