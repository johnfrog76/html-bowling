import { iFrame } from "../../../models/models";

type frameType = (iFrame | null);

export class Player {
  name: string;
  frameIndex = 0;
  frameList: frameType[] = new Array(10).fill(null);
  frameNumber = 0;
  rollCount = 0;
  runningScore = 0;
  frameScore = 0;
  prevFrame: frameType = null;
  isLastFrame = false;
  gameOver = false;

  constructor(name = 'player1') {
    this.name = name;
  }

  getOutput () {

    return {
      player: {
        name: this.name,
        frameList: this.frameList,
        score: this.runningScore,
        rollCount: this.rollCount,
        frameNumber: this.frameNumber,
        frameIndex: this.frameIndex,
        frameItem: {
          ...this.frameList[this.frameIndex]
        }
      }
    }
  }

  computeFrameTotal(rolls: number[], limit = 2) {
    let sum = 0;
    let copy = rolls.slice(0);
    if (limit === 2 && rolls.length === 3) {
      copy.pop();
    }
    for (let i = 0; i < copy.length; i++) {
      sum += copy[i];
    }
    return sum;
  }

  computeScore() {
    let runningScore = 0;
    this.frameList = this.frameList.map((f, idx, list) => {
      if (f === null) {
        return null;
      }

      if (idx !== 9) {
        if (f.isSpare) {
          let count = 0
          let nextOneTotal = 0;
          let nextIdx = idx + 1;
          let nextFrame = list[nextIdx];
  
          if (nextFrame) {
            nextOneTotal = nextFrame.rolls[0];
            runningScore += (this.computeFrameTotal(f.rolls) + nextOneTotal);
            return {
              ...f,
              showScore: f.rolls.length % 2 === 0,
              frameScore: runningScore
            }
          }
        }
      }
      
      let count = 0;
      let nextTwoTotal = 0;
      let allowedRoles = f.rolls.length === 3 ? 3 : 2;
      let nextIdx = idx + 1;
      let nextFrame = list[nextIdx];
      let subTotal = 0;
      
      if (!f.isStrike && !f.isSpare && allowedRoles === 2) {
        runningScore += this.computeFrameTotal(f.rolls);
        return {
          ...f,
          showScore: f.rolls.length % 2 === 0,
          frameScore: runningScore
        }
      }

      while (count < allowedRoles && allowedRoles === 3) {
        const len = f.rolls.length;
        count += len;
        nextTwoTotal += this.computeFrameTotal(f.rolls, 3);
      }

      while (count < allowedRoles && nextFrame) {
        const len = nextFrame.rolls.length;
        if (count === 0) {
          count += len;
          nextTwoTotal += this.computeFrameTotal(nextFrame.rolls);
        } else {
          count ++;
          nextTwoTotal += nextFrame.rolls[0];
        }

        nextIdx++;
        nextFrame = list[nextIdx];
      }


      if (count < 2) {
        return f;
      }
      
      if (nextTwoTotal === 30 || f.rolls.length === 3) {
        subTotal = nextTwoTotal;
      } else {
        subTotal = (10 + nextTwoTotal);
      }
      runningScore += subTotal;
      return {
        ...f,
        showScore: true,
        frameScore: runningScore
      };
    })

    this.runningScore = runningScore;
  }

  roll(numPins: number) {

    if (numPins > 10 || numPins < 0) {
      const error = new Error('pins out of range');
      throw error;
    }

    this.runningScore += numPins;
    this.rollCount++;

    if (this.frameIndex > 8) {
      // 10th frame
      this.frameNumber = 10;
      this.isLastFrame = true;
    } else {
      this.frameNumber += this.rollCount % 2;
    }
    
    this.frameIndex = this.frameNumber - 1;
    
    if (this.frameIndex === 10 || this.gameOver) {
      console.log(
        'game over',
        this.gameOver,
        this.frameIndex
      );
      return;
    }

    this.prevFrame = this.frameList[this.frameIndex - 1] ?
      this.frameList[this.frameIndex - 1] : null;

    if (!this.frameList[this.frameIndex]) {
      this.frameScore = 0;
      let frameObj = { 
        rolls: [],
        isSpare: false,
        isStrike: false,
        showScore: false,
        frameScore: this.runningScore
      };
      
      // set flag for strike
      if (numPins === 10) {
        this.rollCount++;
        frameObj.isStrike = true;
        frameObj.showScore = false;
      }

      this.frameList[this.frameIndex] = {
        ...frameObj,
        rolls: [numPins]
      };
    } else {
      let temp: (frameType | null) = this.frameList[this.frameIndex];
      let tempArr = temp ? temp.rolls.slice(0) : [];
      let frameTotal = tempArr[tempArr.length - 1] + numPins;

      if (temp) {
        if (frameTotal === 10) {
          // set flag for spare
          temp.isSpare = true;
          temp.showScore = false;
        } else {
          temp.isSpare = false;
        }
        
        tempArr.push(numPins);
        this.frameList[this.frameIndex] = {
          ...temp,
          frameScore: temp.frameScore + numPins,
          rolls: tempArr
        }
      }
    }

    if (this.isLastFrame) {
      const tenthFrame = this.frameList[this.frameIndex];
      if (tenthFrame) {
        let tenthFrameCount = 0;
  
        tenthFrame.rolls.forEach(item => {
          tenthFrameCount += item;
        });
        
        if (tenthFrame.rolls.length === 3) {
          this.gameOver = true;
        } else if (tenthFrame.rolls.length === 2 && 
              !tenthFrame.isSpare && !tenthFrame.isStrike) {
          this.gameOver = true; 
        }
      }
    }

    this.computeScore();
  }

}

