import { useState, useEffect } from 'react';
import { iFrame } from '../../../models/models';
import { usePlayerHook } from './player.hook';
import FrameComponent from "../../../components/atoms/frame/frame.component";
import ButtonList from '../../templates/buttons-list/button-list.component';
import UserActionButtonIcon, { ButtonIconTypeEnum } from '../../atoms/icon-button/icon-button.component';
import SignUpComponent from '../../templates/sign-up/sign-up.component';
import { StyledH4, StyledCard, CardInner, StyledTotal, StyledToolbar } from "./scorecard.styles";

const ScoreCardComponent = () => {
  const { name, frameList, frameIndex, gameOver, initPlayer,
    runningScore, makeRoll, resetGame } = usePlayerHook();

  const pinClick = (id: number): void => {
    if (name !== '' && !gameOver) {
      makeRoll(id);
    }
  }

  const addPlayer = (str: string): void => {
    initPlayer(str);
  }

  return name ? (
    <StyledCard>
      <StyledToolbar>
        <StyledH4>{name} {gameOver && (
          <span className="game-over">game over</span>)}
        </StyledH4>
        {/* <button onClick={() => resetGame()}>clear</button> */}
        <UserActionButtonIcon icon={ButtonIconTypeEnum.delete} title="Reset game" clickHandler={() => resetGame()} />
      </StyledToolbar>
      <CardInner>
        {
          frameList.map((item: iFrame | null, idx) => (
            <FrameComponent key={idx} frame={item} id={idx + 1} />
          ))
        }
        {
          name && (
            <>
              <StyledTotal>
                <div className="total-heading">Total</div>
                <div className="total-value">{runningScore}</div>
              </StyledTotal>
            </>
          )
        }
      </CardInner>
      {
        name && (
          <ButtonList currentFrame={frameList[frameIndex]} handleClick={(id: number) => pinClick(id)}></ButtonList>
        )
      }
    </StyledCard>
  ) : (
    <SignUpComponent handleSignup={(str) => addPlayer(str)} />
  )
}

export default ScoreCardComponent;