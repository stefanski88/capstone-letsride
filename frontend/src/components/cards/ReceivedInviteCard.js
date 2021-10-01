import {useHistory} from "react-router-dom";
import {StyledSection} from "../StyledSection";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";

export default function ReceivedInviteCard({recInv}) {

    const history = useHistory()

    function selectReceivedInvite(id) {
        history.push(`ReceivedInvite/${id}`)
    }

    return (
        <TableContainer component={Paper} onClick={() => {
            selectReceivedInvite(recInv.inviteID)
        }}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Invite from:</TableCell>
                        <TableCell align="left">{recInv.sender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Invite Status:</TableCell>
                        <TableCell align="left">{recInv.status}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">When?</TableCell>
                        <TableCell align="left">{recInv.timeStamp}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Where?</TableCell>
                        <TableCell align="left">{recInv.location}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}