import styled from 'styled-components';

export const StyledH4 = styled.h4`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.pageLinkColor1};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  .game-over {
    background-color: ${props => props.theme.colors.pageToastSuccess};
    color: #fff;
    font-size: 1rem;
    display: inline-block;
    padding: .25rem;
    margin-left: 1rem;
  }
`;

export const StyledToolbar = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCard = styled.div`
  padding: 1.5rem 0;
  color: ${(props) => props.theme.colors.pageForeground1};
`;

export const CardInner = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

  
export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.pageForeground1};
  .total-heading {
    border-bottom: 1px solid  ${(props) => props.theme.colors.pageForeground1};
    padding: 0.75rem 1.5rem;
  }
  .total-value {
    padding: 0.75rem 1.5rem;
  }
`;