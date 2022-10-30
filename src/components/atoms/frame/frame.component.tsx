import { FC, useState, useEffect } from 'react';
import { iFrame } from '../../../models/models';
import { getCovertedValues, TypeConverted } from './frame.utils';
import { StyledInner, StyledFrameWrap, StyledFrameTitle, StyledRolls, StyledFrameScore } from './frame.styles';

type Props = {
  frame: iFrame | null;
  id: number;
}

const FrameComponent: FC<Props> = ({ frame, id }) => {
  const [rolls, setRolls] = useState<number[]>([]);
  const [rollValues, setRollValues] = useState<TypeConverted[]>([]);
  const [current, setCurrent] = useState<iFrame | null>(null);

  useEffect(() => {
    if (frame !== null) {
      setCurrent(frame);
      if (frame?.rolls)
        setRolls(frame.rolls);
    }
  }, [frame]);

  useEffect(() => {
    if (rolls.length >= 1 && id === 10) {
      setRollValues(getCovertedValues(rolls));
    }
  }, [rolls])

  const EmptyFrame = () => (
    <StyledInner>
      <StyledFrameWrap>
        <StyledFrameTitle>{id}</StyledFrameTitle>
        <StyledRolls>
          <div className="roll1">&nbsp;</div>
          <div className="roll2">&nbsp;</div>
          {
            id === 10 && (
              <div className="roll3">&nbsp;</div>
            )
          }
        </StyledRolls>
        <StyledFrameScore></StyledFrameScore>
      </StyledFrameWrap>
    </StyledInner>
  );

  return (
    <>
      {
        current === null ? (<EmptyFrame />) : (
          <StyledInner id={`frame${id}`} tabIndex={0}>
            <StyledFrameWrap >
              <StyledFrameTitle>{id}</StyledFrameTitle>
              <StyledRolls>
                {
                  id === 10 && rollValues.length > 0 && rollValues.map((rv, idx) => (
                    <div key={idx} className={`roll${idx + 1}`}>{rv === '' ? ' ' : rv}</div>
                  ))
                }
                {
                  frame?.isSpare === false && id < 10 && frame?.isStrike === false && (
                    <>
                      <div className="roll1">{frame?.rolls[0]}</div>
                      <div className="roll2">{frame?.rolls[1]}</div>
                    </>
                  )
                }
                {
                  id < 10 && frame?.isStrike === true && frame.isSpare === false && (
                    <>
                      <div className="roll1"></div>
                      <div className="roll2">X</div>
                    </>
                  )}
                {
                  id < 10 && frame?.isSpare === true && frame?.isStrike === false && (
                    <>
                      <div className="roll1">{frame?.rolls[0]}</div>
                      <div className="roll2">/</div>
                    </>
                  )}
              </StyledRolls>
              <StyledFrameScore>{frame?.showScore && frame?.frameScore}</StyledFrameScore>
            </StyledFrameWrap>
          </StyledInner>
        )
      }
    </>
  );
}

export default FrameComponent;