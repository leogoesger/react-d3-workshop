export interface IData {
  date: number;
  flow: number;
}
export const loadData = () => {
  const data = [] as IData[];
  for (let i = 0; i <= 100; i++) {
    data.push({ date: i, flow: Math.random() * 100 });
  }

  return data;
};
