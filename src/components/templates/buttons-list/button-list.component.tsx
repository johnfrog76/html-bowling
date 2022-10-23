import { FC } from 'react';
import { StyledButton, StyledButtonWrap } from './button-list.styles';

type Props = {
  handleClick: (id: number) => void;
}

const ButtonList: FC<Props> = ({ handleClick }) => {
  let pins: { id: number; isDisabled: boolean }[] = [];
  for (let i = 0; i < 11; i++) {
    pins.push({ id: i, isDisabled: false });
  }

  return (
    <StyledButtonWrap>
      {
        pins && pins.map(({ id, isDisabled }) => (

          <StyledButton
            type="button"
            disabled={isDisabled}
            onClick={() => handleClick(id)}
            key={id}
          >{id}</StyledButton>
        ))
      }
    </StyledButtonWrap>
  );
}

export default ButtonList;