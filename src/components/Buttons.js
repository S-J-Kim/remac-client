import styled from 'styled-components';
import { marginControl } from './Text';

const StyledButton = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.3rem;
  background-color: ${(props) => {
    switch (props.type) {
      case 'activate':
        return '#ED6565';
      case 'deactivate':
        return '#D2D6DA';
      default:
        return '#FFFFFF';
    }
  }};
  color: ${(props) => (props.type ? '#FFFFFF' : '#94999E')};
  border: ${(props) => (props.type ? 'none' : '1px solid #94999E')};
  ${marginControl}
`;

const Button = (props) => {
  const { type, content, onClick, classNam, mt, mb } = props;
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={type === 'deactivate'}
      className={className}
      mt={mt}
      mb={mb}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
