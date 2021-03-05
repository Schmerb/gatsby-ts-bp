/**
 *
 * Data set and styles for each line
 *
 * */

const dashedLine = {
  backgroundColor: 'transparent',
  borderDash: [12, 12],
  pointBackgroundColor: 'transparent',
  pointBorderColor: 'lightgrey',
  hoverBackgroundColor: 'grey',
};

export const dataSets = [
  {
    label: '95th Percentile TBWL',
    data: [
      { x: 4, y: 5 },
      { x: 5, y: 6 },
      { x: 6, y: 8 },
      { x: 7, y: 14 },
      { x: 8, y: 16 },
      { x: 9, y: 22 },
      { x: 10, y: 25 },
    ],
    // data: [4, 6, 12, 18, 21, 23],
    borderColor: 'green',
    fill: true,
    ...dashedLine,
  },
  {
    label: '75th Percentile TBWL',
    data: [3, 5, 8, 12, 17, 20],
    borderColor: 'blue',
    ...dashedLine,
  },
  {
    label: 'Median TBWL',
    data: [1, 2, 3, 20, 5, 8, 9, 10, 11, 14, 18, 19, 22, 23],
    // data: [2, 4, 6, 8, 12, 17],
    backgroundColor: 'transparent',
    pointBackgroundColor: 'transparent',
    pointBorderColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 3,
  },
  {
    label: '25th Percentile TBWL',
    data: [1, 3, 4, 5, 7, 11, 14],
    borderColor: 'green',
    ...dashedLine,
  },
  {
    label: '5th Percentile TBWL',
    data: [1, 2, 3, 4, 6, 8, 8],
    borderColor: 'grey',
    ...dashedLine,
  },
];
