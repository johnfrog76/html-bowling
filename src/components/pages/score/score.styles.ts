import styled from 'styled-components';

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.pageLinkColor1};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0 0 0.75em 0;
`;

export const StyledMain = styled.main`
  padding: 1rem 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.pageForeground1};
`;

export const StyledThemeWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    min-width: auto;
    padding: 0;
  }
`;
