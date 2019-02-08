export const loadData = () => {
  const dates = [
    '10/1/1991',
    '10/2/1991',
    '10/3/1991',
    '10/4/1991',
    '10/5/1991',
    '10/6/1991',
    '10/7/1991',
    '10/8/1991',
    '10/9/1991',
    '10/10/1991',
  ];

  const flows: number[] = [];
  for (let i = 0; i <= 10; i++) {
    flows.push(Math.random() * 100);
  }

  return { dates, flows };
};
