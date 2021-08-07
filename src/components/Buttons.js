import styled from 'styled-components';
import { marginControl } from './Text';
import { theme } from '../styles/theme';

const StyledButton = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
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
  const { type, content, onClick, className, mt, mb } = props;
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

const ProductionStatusIndicator = styled.div`
  width: 5.2rem;
  height: 2.1rem;
  border-radius: 10rem;
  color: white;
  background-color: ${theme.colors.pink};
  font-weight: 500;
  font-size: 11px;
  text-align: center;
  line-height: 2.1rem;
`;

export default Button;

export { ProductionStatusIndicator };
