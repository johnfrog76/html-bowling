export type TypeConverted = (number | 'X' | '/' | '');

export const getCovertedValues = (rolls: number[]): TypeConverted[] => {
  let temp: TypeConverted[] = [];
  let roll1 = rolls[0];
  let roll2 = rolls[1];
  let roll3 = rolls[2];
  if (roll1 !== undefined) {
    if (roll1 === 10) {
      temp.push('X');
    } else {
      temp.push(roll1)
    }
  }

  if (roll1 !== undefined && roll2 !== undefined) {
    if (roll1 + roll2 === 10 && roll1 !== 10) {
      temp.push('/');
    } else if (roll1 + roll2 < 10) {
      temp.push(roll2);
    } else if (roll1 === 10 && roll2 === 10) {
      temp.push('X');
    }
  }

  if (roll1 !== undefined && roll2 !== undefined && roll3 !== undefined) {
    if (roll3 === 10) {
      temp.push('X');
    } else {
      temp.push(roll3);
    }
  }

  for (let i = 0; i < 4 - temp.length; i++) {
    temp.push('');
  }

  return temp;
}