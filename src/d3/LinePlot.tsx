import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { loadData, IData, getDomains } from './helpers';
import { Axis } from './Axis';

export const LinePlot = () => {
  const width = 800;
  const height = 500;

  const [line, setLine] = useState<d3.Line<IData>>(null as any);
  const [data, setData] = useState(loadData());
  // const [xScale, setXScale] = useState<any>(() => d3.scaleLinear().range([0, width]));
  const xScale = d3
    .scaleLinear()
    .range([0, width])
    .domain([0, 100]);
  const yScale = d3.scaleLinear().range([height, 0]);

  useEffect(() => {
    const { xExtend, yExtend } = getDomains(data);
    yExtend[1] = yExtend[1] + 20;
    yScale.domain(yExtend);

    setLine(() =>
      d3
        .line<IData>()
        .x(d => xScale(d.date))
        .y(d => yScale(d.flow))
        .curve(d3.curveCardinal)
    );
  }, []);

  if (!line) return null;
  return (
    <div>
      <button onClick={() => setData(loadData())}>Get Random Data</button>
      <svg style={{ height: height + 40, width }}>
        <path
          d={line(data) as string}
          strokeLinecap="round"
          strokeWidth="3"
          stroke={'red'}
          fill="none"
        />
        <Axis scale={xScale} height={height} />
      </svg>
    </div>
  );
};
