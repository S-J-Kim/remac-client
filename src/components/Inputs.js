import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 3px;
  border: 1px solid #d2d6da;
  padding: 15px 0px 15px 9px;
  font-weight: 600;
  color: #292929;
  font-family: Pretendard;
  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
  ::placeholder {
    font-family: Pretendard;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    color: #94999e;
  }
`;

export default Input;
