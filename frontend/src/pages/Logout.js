import NavBar from "../components/NavBar";
import Header from "../components/Header";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import Main from "../components/Main";
import PaperComponent from "../components/PaperComponent";
import {useState} from "react";
import {useAuth} from "../auth/AuthProvider";


export default function Logout () {

    const {token} = useAuth()
    const [open, setOpen] = useState(false)


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
                Logout
            </Button>
            <Dialog
                open={open}
                onClose={null}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirm deletion
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <strong>Do you really want to logout?</strong> <br/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={null}>Logout</Button>
                </DialogActions>
            </Dialog>
            <NavBar />
        </Main>
    );
}