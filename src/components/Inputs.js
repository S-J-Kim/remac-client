import styled from 'styled-components';
import { marginControl } from './Text';

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  border-radius: 3px;
  border: 1px solid #d2d6da;
  padding: 1.5rem 0 1.5rem 0.9rem;
  font-weight: 600;
  color: #292929;
  font-family: Pretendard;
  ${marginControl}
  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
  ::placeholder {
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.8rem;
    /* identical to box height */

    color: #94999e;
  }
`;

export default Input;
