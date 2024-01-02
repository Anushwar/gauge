import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Colors,
  Legend,
} from 'chart.js';
import { Chart as ChartComponent, type ChartProps } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Colors,
  Title,
  Tooltip,
  Legend,
);

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
