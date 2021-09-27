import Draggable from "react-draggable";
import {Paper, PropTypes} from "@material-ui/core";

export default function PaperComponent( {
    handle,
    cancel,
    ...props
} ) {
    return (
        <Draggable
            handle={"#draggable-dialog-title"}
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}