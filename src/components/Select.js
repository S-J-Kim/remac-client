import styled from 'styled-components';

export const Select = ({
  handleSelectChange,
  currentValue,
  selectOptions,
  id,
}) => {
  return (
    <Div>
      <Img src={process.env.PUBLIC_URL + '/Vector.svg'} />
      <StyledSelect
        id={id}
        name="category"
        onChange={handleSelectChange}
        placeholder="카테고리를 선택해주세요"
        val={currentValue}
      >
        <option value="">카테고리를 선택해주세요</option>
        {selectOptions.map((option) => (
          <option value={option} key={selectOptions.indexOf(option)}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </Div>
  );
};
const StyledSelect = styled.select`
  width: 100%;
  height: 4.8rem;
  border-radius: 3px;
  border: 1px solid #d2d6da;
  padding: 1.5rem 0.9rem 1.5rem 0.9rem;
  font-size: 1.5rem;
  font-weight: ${(props) => {
    switch (props.val) {
      case '':
        return 400;
      default:
        return 600;
    }
  }};
  background: none;
  color: ${(props) => {
    switch (props.val) {
      case '':
        return '#94999E';
      default:
        return '#292929';
    }
  }};
  font-family: Pretendard;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  &:focus {
    outline: none;
    border: 1px solid #ed6565;
  }
  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;
export const Div = styled.div`
  margin-bottom: 1.4rem;
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  right: 1.2rem;
  top: 2rem;
`;
