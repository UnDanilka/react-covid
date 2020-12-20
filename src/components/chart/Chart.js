import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';



function Chart({total}) {

    const data = [
        total
      ];
  

    return (
      <ResponsiveContainer >
      
      <BarChart
        
        // width={900}
        // height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cases" fill="#8884d8" />
        <Bar dataKey="deaths" fill="red" />
        <Bar dataKey="recovered" fill="#82ca9d" />
      </BarChart>

      </ResponsiveContainer>
    );
  }

export default Chart;