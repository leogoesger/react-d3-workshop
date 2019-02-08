import { max, extent } from 'd3';

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

export const getDomains = (_data: IData[]) => {
  const yMax = max(_data, d => d.flow) as number;
  const xExt = extent(_data, d => d.date) as [number, number];

  return { xExtend: xExt, yExtend: [0, yMax] };
};
