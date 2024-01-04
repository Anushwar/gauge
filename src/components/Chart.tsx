import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart as ChartComponent, type ChartProps } from 'react-chartjs-2';

ChartJS.register(...registerables);

interface Props extends ChartProps {
  type:
    | 'bar'
    | 'line'
    | 'scatter'
    | 'bubble'
    | 'pie'
    | 'doughnut'
    | 'polarArea';
}

const Chart: React.FC<Props> = ({ type, data, options }) => {
  return <ChartComponent type={type} data={data} options={options} />;
};

export default Chart;
