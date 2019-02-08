import React, { Component } from 'react';
import * as d3 from 'd3';

interface IProps {
  scale: any;
  height: number;
}

export class Axis extends Component<IProps> {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node = this.refs.axis as any;
    const axis = d3.axisBottom(this.props.scale);
    d3.select(node).call(axis);
  }

  render() {
    return (
      <g
        className="axis"
        ref="axis"
        transform={`translate(0, ${this.props.height + 10})`}
      />
    );
  }
}
