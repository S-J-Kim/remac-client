import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 3px;
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
`;

const Button = (props) => {
  const { type, content, onClick } = props;
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={type === 'deactivate'}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
