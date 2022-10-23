import styled from 'styled-components';

export const StyledButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  color: #fff;
  display: flex;
  padding: .5rem;
  flex: 0 0 2.2rem;
  min-width: 2.2rem;
  height: 2.2rem;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.navBarBackground};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

