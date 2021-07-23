import styled from 'styled-components';
import { theme } from '../styles/theme';

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
      case 'lg' || 'md':
        return 'bold';
      case 'sm':
        return 600;
      case 'sm-medium':
        return 500;
    }
  }};
`;

export const Paragraph = styled.div`
  color: ${(props) =>
    props.size === 'lg' ? theme.colors.black : theme.colors.gray};
  font-weight: ${(props) => {
    return props.size === ('lg' || 'md' || 'xs') ? 'normal' : 600;
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
`;
