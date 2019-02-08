import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { loadData, IData } from './loader';

export const LinePlot = () => {
  const width = 800;
  const height = 500;

  const xScaleL = d3.scaleTime().range([0, width]);
  const yScaleL = d3.scaleLinear().range([height, 0]);
  const line = d3.line<IData>();

  const randomDS = loadData();

  const _getDomains = (data: IData[]) => {
    const yMax = d3.max(data, d => d.flow) as number;
    const xExt = d3.extent(data, d => d.date) as [number, number];

    return { xExtend: xExt, yExtend: [0, yMax] };
  };

  const { xExtend, yExtend } = _getDomains(randomDS);
  xScaleL.domain(xExtend);
  yScaleL.domain(yExtend);

  line
    .x(d => xScaleL(d.date as any))
    .y(d => yScaleL(d.flow as any))
    .curve(d3.curveCardinal);

  // useEffect(() => {}, []);

  if (line && randomDS) {
    return (
      <div style={{ height: '600px' }}>
        <svg style={{ height: '600px', width: '1000px' }}>
          <path
            d={line(randomDS) as string}
            strokeLinecap="round"
            strokeWidth="3"
            stroke={'red'}
            fill="none"
          />
        </svg>
        <button>Get Random Data</button>
      </div>
    );
  } else {
    return null;
  }
};
