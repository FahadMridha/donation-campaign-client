"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'Total Donation' },
  { id: 1, value: 15, label: 'Your Donation' },
];

export default function DonationStatistics() {
  return (
    <div className='my-10 lg-my-20'>
        <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={500}
    />
    </div>
  );
}