import styled from 'styled-components';


export const StyledWrapper = styled.div`
  display: flex;
  
  gap: 0.25rem;
  width: 100%;
  margin: 1.5rem 0;  
`;

export const StyledInput = styled.input`
    border: 2px solid ${props => props.theme.colors.pageBorderColor1};
    color: ${props => props.theme.colors.pageForeground1};
    background-color: ${props => props.theme.colors.pageBackground1};
    width: 100%;
    font-size: 1rem;
    height: 2.5rem;
    padding: .25rem .5rem;
    &:focus {
        border: 2px solid ${props => props.theme.colors.navBarBackground};
        outline: 0;
    }
`;