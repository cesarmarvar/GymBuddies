import styled from '@emotion/styled';
import { FlexColumn } from '../utils';

const SingleInput = styled.input`
  border-radius: 8px;
  height: 1.5rem;
  background-color: white;
  padding: 8px;
`
const Label = styled.label`
  font-weight: 500;
  font-size: 10px;
  color: white;
`

function Input({id, name, label, placeholder, type, value, onChange, required, ...props}){

  return(
    <FlexColumn style={{gap: "8px"}}>
      <Label htmlFor={id || name}>{label}</Label>
      <SingleInput {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </FlexColumn>
  )
}

export default Input;