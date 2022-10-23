import React, { FC } from "react";

import {
    StyledDeleteIcon,
    StyledButton,
} from './icon-button.styles';

interface Props {
    icon: ButtonIconTypeEnum;
    clickHandler: (evt: React.SyntheticEvent) => void;
    disabled?: boolean;
    title?: string;
    inverse?: boolean;
}

export enum ButtonIconTypeEnum {
    delete = 0,
}

const UserActionButtonIcon: FC<Props> = ({ icon, clickHandler, disabled = false, title, inverse = false }) => {
    return (
        <StyledButton inverse={inverse ? 'yes' : 'no'} title={title} disabled={disabled} onClick={(evt) => clickHandler(evt)}>
            {
                icon === ButtonIconTypeEnum.delete && (
                    <StyledDeleteIcon />
                )
            }
        </StyledButton>
    )
}

export default UserActionButtonIcon;