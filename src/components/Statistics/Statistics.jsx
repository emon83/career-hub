import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const [marks, setMarks] = useState(data);
  console.log(marks);
  return (
    <div className="my-16 max-w-4xl mx-auto">
      <h2 className="mb-16 -mt-4 text-2xl text-center font-bold">
        My assignment marks rechart
      </h2>
      <div className="mx-auto">
      <AreaChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis className="ml-12" />
          <Tooltip />
          <Area type="monotone" dataKey="assignmentMarks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
