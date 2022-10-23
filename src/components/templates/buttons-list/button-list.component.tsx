import { FC, useEffect, useState } from 'react';
import { iFrame } from '../../../models/models';
import { StyledButton, StyledButtonWrap } from './button-list.styles';

type Props = {
  handleClick: (id: number) => void;
  currentFrame?: iFrame | null | undefined;
}

const getPins = (first: number) => {
  let pins: { id: number; isDisabled: boolean }[] = [];
  const allowed = 10 - first;
  for (let i = 0; i < 11; i++) {
    if (i > allowed && allowed < 10) {
      pins.push({ id: i, isDisabled: true });
    } else {
      pins.push({ id: i, isDisabled: false });
    }
  }
  return pins;
}

const ButtonList: FC<Props> = ({ currentFrame, handleClick }) => {
  const [pins, setPins] = useState(getPins(0));

  useEffect(() => {
    if (currentFrame?.rolls && currentFrame.rolls.length === 1) {
      let roll = currentFrame.rolls[0];
      if (roll && roll < 10) {
        setPins(getPins(roll));
      } else {
        setPins(getPins(0));
      }
    } else {
      setPins(getPins(0));
    }
  }, [currentFrame]);


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