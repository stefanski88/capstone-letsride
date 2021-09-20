import * as PropTypes from "prop-types";
import Draggable from 'react-draggable';
import {Paper} from "@mui/material";

Draggable.propTypes = {
    cancel: PropTypes.string,
    handle: PropTypes.string,
    children: PropTypes.node
};

export default function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}