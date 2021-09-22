import {Box, Input} from "@material-ui/core";
import TextField from "./TextField";


export default function TextField2({
                                      type = 'text',
                                      title,
                                      name,
                                      value,
                                      onChange,
                                      placeholder,
                                      ...props
                                  }) {
    return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined">
            <Input type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
            />
            </TextField>
        </Box>
    );
}