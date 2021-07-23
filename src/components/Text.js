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
    switch (props.type) {
      case 'lg' || 'md':
        return 'bold';
      case 'sm':
        return 'semibold';
      case 'sm-medium':
        return 'medium';
    }
  }};
`;

export const Paragraph = styled.div`
  color: ${(props) =>
    props.size === 'lg' ? theme.colors.black : theme.colors.gray};
  font-weight: ${(props) => {
    return props.size === ('lg' || 'md' || 'xs') ? 'regular' : 'semibold';
  }};
  font-size: ${(props) => {
    switch (props.type) {
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
