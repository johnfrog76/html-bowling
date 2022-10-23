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
  prevFrame = null;
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
      // const error = new Error('game over');
      // throw error;
    }


    // set ref to prevFrame
    this.prevFrame = this.frameList[this.frameIndex - 1] ?
      this.frameList[this.frameIndex - 1] : null;

    if (!this.frameList[this.frameIndex]) {
      this.frameScore = 0;
      let frameObj = { 
        rolls: [],
        isSpare: false,
        isStrike: false,
        showScore: true,
        frameScore: this.runningScore
      };
      
      // set flag for strike
      if (numPins === 10) {
        this.rollCount++;
        frameObj.isStrike = true;
        frameObj.showScore = false;
      }

      if (this.prevFrame && this.prevFrame.isSpare) {
        // correct score for spare in prevFrame
        this.runningScore = this.runningScore + numPins;
        debugger;
        this.frameList[this.frameIndex - 1].frameScore += numPins;
        frameObj.frameScore = this.runningScore;
      }


      this.frameList[this.frameIndex] = {
        ...frameObj,
        rolls: [numPins]
      };
    } else {
      let temp = this.frameList[this.frameIndex];
      let tempArr = temp.rolls.slice(0);
      let frameTotal = tempArr[tempArr.length - 1] + numPins;

      if (this.prevFrame && this.prevFrame.isStrike) {
        // need to keep checking until
        let myIdx = this.frameIndex - 1;
        let myPrevFrame = this.frameList[myIdx];
        let myStrikeBonus = frameTotal;
        let count = 0;
        while (myPrevFrame && myPrevFrame.isStrike) {
          debugger;
          this.runningScore += myStrikeBonus;
          
          this.frameList[myIdx].frameScore += myStrikeBonus;
          this.frameList[this.frameIndex].frameScore += myStrikeBonus;
          myStrikeBonus = count == 0 ? 
              tempArr[0] + 10 : 20; 
            
          myIdx--;
          myPrevFrame = this.frameList[myIdx] || null
          count++;
        }
      }

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

    // console.log('line 135', this.frameList);
    // 10th frame can run before return?
    // The tenth frame up to three rolls.
    // if strike then the player will roll two more times.
    // if the second roll is a strike or spare 
    // then the player will roll a third time. 
    if (this.isLastFrame) {

      const tenthFrame = this.frameList[this.frameIndex];
      
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

}

