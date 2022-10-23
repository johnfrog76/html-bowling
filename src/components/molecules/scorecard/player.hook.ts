import { useState, useEffect } from "react";
import { Player } from './scorecard.utils';
import { iPlayer } from '../../models/models';

let myPlayer = {};
let defaultPlayer = {
    name: '',
    frameIndex: 0,
    frameList: [],
    frameNumber: 0,
    rollCount: 0,
    runningScore:0,
    frameScore: 0,
    prevFrame: null,
    isLastFrame: false,
    gameOver: false
}

export const usePlayerHook = () => {
  const [player, setPlayer] = useState<iPlayer>(defaultPlayer);

  const initPlayer = (playerName: string) => {
    myPlayer = new Player(playerName);
    setPlayer(myPlayer)
  }

  const resetGame = () => {
    setPlayer(defaultPlayer);
    myPlayer = {};
  }

  const makeRoll = (num: number) => {
    myPlayer.roll(num);
    setPlayer({
      ...myPlayer
    })
  }

  return { 
    initPlayer,
    makeRoll,
    resetGame,
    ...player
  };
};

