export interface iFrame {
    "rolls": number[];
    "isSpare": boolean;
    "isStrike": boolean;
    "showScore": boolean;
    "frameScore": number;
}

export interface iPlayer {
  "name": string;
  "frameIndex": number;
  "frameList": (iFrame | null)[];
  "frameNumber": number;
  "rollCount": number;
  "runningScore": number;
  "frameScore": number;
  "prevFrame": (iFrame | null);
  "isLastFrame": boolean;
  "gameOver": boolean;
}
