import styled from 'styled-components';

export const StyledInner = styled.div`
  border: 1px solid ${(props) => props.theme.colors.pageForeground1};
  border-right: none;
  display: flex;
  min-height: 126px;
  flex: 1;
  flex-direction: column;
`;
export const StyledFrameWrap = styled.div``;

export const StyledFrameTitle = styled.div`
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.pageForeground1};
`;

export const StyledRolls = styled.div`
  display: flex;
  justify-content: flex-end;
  .roll1 {
    display: flex;
    justify-content: center;
    flex: 0 0 33%;
    min-height: 35px;
    padding: 0.25rem 0.75rem;
    border: 1px solid transparent;
  }
  .roll2, .roll3 {
    display: flex;
    justify-content: center;
    flex: 0 0 33%;
    min-height: 35px;
    padding: 0.25rem 0.75rem;
    border-left: 1px solid ${(props) => props.theme.colors.pageForeground1};
    border-bottom: 1px solid ${(props) => props.theme.colors.pageForeground1};
  }
`;

export const StyledFrameScore = styled.div`
  padding: 0.75rem;
  text-align:center;
`;