import styled from 'styled-components';
import { Delete } from '@mui/icons-material';
import { ContentCopy } from '@mui/icons-material';
import {Theme as ThemeEnum } from '../../../providers/theme/theme.provider';

interface iThemeStyleProp {
    ThemeStyle?: ThemeEnum;
    inverse: string;
}


export const StyledDeleteIcon = styled(Delete)`
    font-size: 2rem !important;
`;

export const StyledButton = styled.button<iThemeStyleProp>`
    opacity: 0.9;
    border: 0;
    padding: 0;
    display: flex;
    align-items: center;
    transition: opacity ease-in-out 300ms;
    cursor: pointer;
    background-color: transparent;
    color: ${props => props.theme.colors.pageLinkColor1};
    ${props => props.inverse === 'yes' && `
        color: #fff;
        opacity: 0.9;
    `};
    margin: 0 1rem 0 0;
    &:last-child {
        margin: 0;
    }
    &:hover {
        transition: opacity ease-in-out 300ms;
        opacity: 1;
    }
`;