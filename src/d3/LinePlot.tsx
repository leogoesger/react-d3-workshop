import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { loadData, IData, getDomains } from './helpers';
import { Line } from 'd3';

export const LinePlot = () => {
  const width = 800;
  const height = 500;

  const [line, setLine] = useState<Line<IData>>(null as any);
  const [data, setData] = useState(loadData());

  const xScaleL = d3.scaleTime().range([0, width]);
  const yScaleL = d3.scaleLinear().range([height, 0]);

  useEffect(() => {
    const { xExtend, yExtend } = getDomains(data);
    xScaleL.domain(xExtend);
    yScaleL.domain(yExtend);

    setLine(() =>
      d3
        .line<IData>()
        .x(d => xScaleL(d.date))
        .y(d => yScaleL(d.flow))
        .curve(d3.curveCardinal)
    );
  }, []);

  if (line && data) {
    return (
      <div>
        <button onClick={() => setData(loadData())}>Get Random Data</button>
        <svg style={{ height, width }}>
          <path
            d={line(data) as string}
            strokeLinecap="round"
            strokeWidth="3"
            stroke={'red'}
            fill="none"
          />
        </svg>
      </div>
    );
  } else {
    return null;
  }
};
