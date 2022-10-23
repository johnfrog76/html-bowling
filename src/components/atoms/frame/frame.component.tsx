import { FC, useState, useEffect } from 'react';
import { iFrame } from '../../../models/models';
import { StyledInner, StyledFrameWrap, StyledFrameTitle, StyledRolls, StyledFrameScore } from './frame.styles';

type Props = {
  frame: iFrame | null;
  id: number;
}

const FrameComponent: FC<Props> = ({ frame, id }) => {

  const [current, setCurrent] = useState<iFrame | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (frame !== null) {
      setCurrent(frame);
    }
  }, [frame]);


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


  return (<>
    {
      current === null ? (<EmptyFrame />) : (
        <StyledInner>
          <StyledFrameWrap>
            <StyledFrameTitle>{id}</StyledFrameTitle>
            <StyledRolls>
              {
                frame?.isSpare === false && frame?.isStrike === false && (
                  <>
                    <div className="roll1">{frame?.rolls[0]}</div>
                    <div className="roll2">{frame?.rolls[1]}</div>
                    {
                      id === 10 && (
                        <div className="roll3">{frame?.rolls[2]}</div>
                      )
                    }
                  </>
                )
              }
              {
                frame?.isStrike === true && frame.isSpare === false && (
                  <>
                    <div className="roll1"></div>
                    <div className="roll2">X</div>
                  </>
                )}
              {
                frame?.isSpare === true && frame?.isStrike === false && (
                  <>
                    <div className="roll1">{frame?.rolls[0]}</div>
                    <div className="roll2">/</div>
                  </>
                )}
            </StyledRolls>
            <StyledFrameScore>{frame?.frameScore}</StyledFrameScore>
          </StyledFrameWrap>
        </StyledInner>
      )
    }
  </>
  );
}

export default FrameComponent;