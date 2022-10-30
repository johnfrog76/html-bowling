import styled from 'styled-components';

export const StyledButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: ${(props) => props.theme.fontSizes.smallPlus};
  border-color: ${(props) => props.theme.colors.pageHighLight2};
  border-color-bottom: ${(props) => props.theme.colors.pageB};
  border-color-right: ${(props) => props.theme.colors.pageB};
  flex: 0 0 2.2rem;
  min-width: 2.2rem;
  height: 2.2rem;
  background-color: ${(props) => props.theme.colors.navBarBackground};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:active {
    border-color: ${(props) => props.theme.colors.pageHighLight2};
    border-color-top: ${(props) => props.theme.colors.pageB};
    border-color-left: ${(props) => props.theme.colors.pageB};
  }
`;

