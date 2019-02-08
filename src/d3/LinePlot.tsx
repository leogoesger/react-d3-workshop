import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { loadData } from './loader';

export const LinePlot = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(loadData());
  }, []);

  const _getRandom = () => setData(loadData());

  return (
    <div style={{ height: '600px' }}>
      {JSON.stringify(data)}
      <button onClick={_getRandom}>Get Random Data</button>
    </div>
  );
};
