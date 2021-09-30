import {useHistory} from 'react-router-dom'
import {StyledSection} from "../StyledSection";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";

export default function MotoCard({moto}) {

    const history = useHistory();

    function selectMotorcycle(id) {
        history.push(`myMotorcycle/${id}`)
    }

    return (
        <TableContainer component={Paper} oonClick={() => {
            selectMotorcycle(moto.motoID)
        }}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Nickname:</TableCell>
                        <TableCell align="left">{moto.motoNickName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Manufacturer:</TableCell>
                        <TableCell align="left">{moto.manufacturer}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Model:</TableCell>
                        <TableCell align="left">{moto.model}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Construction Year:</TableCell>
                        <TableCell align="left">{moto.constructionYear}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}