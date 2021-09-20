import styled from "styled-components/macro";
import Label from './Label'

export default function TextField({
    type = 'text',
    title,
    name,
    value,
    onChange,
    placeholder,
    ...props
}) {
    return(
        <Label {...props}>
            {title}
            <Input type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
            />
        </Label>
    );
}

const Input = styled.input`
    width: 100%;
    font-size: 1em;
    margin-top: var(--size-s);
    border-radius: var(--size-s);
`