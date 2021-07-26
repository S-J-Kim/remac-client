import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

export const marginControl = css`
  margin-top: ${(props) => `${props.mt}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
`;

export const Title = styled.div`
  color: ${theme.colors.black};
  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return theme.fontSize.xxl;
      case 'md':
        return theme.fontSize.xl;
      case 'sm' || 'sm-medium':
      default:
        return theme.fontSize.md;
    }
  }};
  font-weight: ${(props) => {
    switch (props.size) {
      case 'lg':
      case 'md':
        return 700;
      case 'sm':
        return 600;
      case 'sm-medium':
        return 500;
    }
  }};
  ${marginControl}
`;

export const Paragraph = styled.div`
  color: ${(props) =>
    props.size === 'lg' ? theme.colors.black : theme.colors.gray};
  font-weight: ${(props) => {
    switch (props.size) {
      case 'lg':
      case 'md':
      case 'xs':
        return 400;
      case 'sm':
      default:
        return 600;
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return theme.fontSize.lg;
      case 'md':
        return theme.fontSize.md;
      case 'sm':
        return theme.fontSize.sm;
      case 'xs':
        return theme.fontSize.xs;
    }
  }};
  ${marginControl}
`;
