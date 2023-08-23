import styled from '@emotion/styled';

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  height: 3rem;
  width: 10rem;
  background-color: rgba(95, 227, 0, 0.65);
  color: white;
  border: none;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 8px 8px rgba(39, 212, 53, 0.137);
  font-size: 1.2rem;
  &:active {
    transform: scale(0.94);
  }
`
export function Button({children, ...props}) {

  return(
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}
