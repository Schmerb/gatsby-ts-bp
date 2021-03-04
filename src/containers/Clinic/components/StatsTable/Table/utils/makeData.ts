import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const currentWeight = Math.floor(Math.random() * 240);
  const startingWeight = Math.floor(Math.random() * 280);
  return {
    firstName: namor.generate({ words: 1, numbers: 2 }),
    lastName: namor.generate({ words: 1, numbers: 3 }),
    age: Math.floor(Math.random() * 30),
    currentWeight,
    startingWeight,
    weightLoss: startingWeight - currentWeight,
    tbwl: Math.floor(Math.random() * 100),
    daysSince: Math.floor(Math.random() * 100),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
