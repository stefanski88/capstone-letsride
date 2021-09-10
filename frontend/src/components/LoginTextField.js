import styled from "styled-components/macro";
import Label from './Label'

export default function LoginTextField({
    type = 'text',
    title,
    name,
    value,
    onChange,
    ...props
}) {

    return(
        <Label {...props}>
            <Input type={type}
                   title={title}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
        </Label>
    );
}

const Input = styled.input`
    width: 100%;
`