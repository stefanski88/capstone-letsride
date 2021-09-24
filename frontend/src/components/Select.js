import styled from 'styled-components/macro'
import Label from './Label'

export default function Select({
                                   name,
                                   selected,
                                   title,
                                   onChange,
                                   value,
                                   options,
                                   ...props
                               }) {
    return (
        <Label {...props}>
            {title}
            <SelectStyled
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value={''}>Please select ..</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </SelectStyled>
        </Label>
    )
}

const SelectStyled = styled.select`
  width: 10rem;


`