import {useHistory} from "react-router-dom";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";


export default function SentInviteCard({sentInv}) {

    const history = useHistory()

    function selectSentInvite(id) {
        history.push(`sentInvite/${id}`)
    }

    return (
            <TableContainer component={Paper} onClick={() => {
                selectSentInvite(sentInv.inviteID)
            }}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Sent to:</TableCell>
                            <TableCell align="left">{sentInv.receiver}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Invite Status:</TableCell>
                            <TableCell align="left">{sentInv.status}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Sent on:</TableCell>
                            <TableCell align="left">{sentInv.timeStamp}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
}