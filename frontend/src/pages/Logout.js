import NavBar from "../components/NavBar";
import Header from "../components/Header";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Main from "../components/Main";
import PaperComponent from "../components/PaperComponent";
import {useState} from "react";
import {useAuth} from "../auth/AuthProvider";
import {Redirect} from "react-router-dom";
import Page from "../components/Page";

export default function Logout() {

    const {logout, user} = useAuth()
    const [open, setOpen] = useState(false)

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
                    Logout
                </Button>
                <Dialog
                    open={open}
                    onClose={null}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">
                        Confirm deletion
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <strong>Do you really want to logout?</strong> <br/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Cancel</Button>
                        <Button onClick={logout}>Logout</Button>
                    </DialogActions>
                </Dialog>
            </Main>
            <NavBar/>
        </Page>
    );
}