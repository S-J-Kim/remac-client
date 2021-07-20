import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 3px;
  border: 1px solid #d2d6da;

  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
`;

export default Input;
