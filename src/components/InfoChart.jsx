import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  Legend as BarLegend,
} from "recharts";
import { generateBarData, generatePieData } from "../utils/chartData";
import { isEmpty } from "../utils/isEmpty";

const InfoChart = ({ stats }) => {
  const pieData = generatePieData(stats);
  const barData = generateBarData(stats);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div>
      {!isEmpty(stats) ? (
        <div>
          <h2>Project Stats</h2>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* PieChart */}
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            {/* BarChart */}
            <BarChart width={400} height={400} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <BarTooltip />
              <BarLegend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p>No Data to Display</p>
          <p>Fill in the form above to see your data</p>
        </div>
      )}
    </div>
  );
};

export default InfoChart;
