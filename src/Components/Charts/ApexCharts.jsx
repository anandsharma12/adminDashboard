import React, { useState } from "react";
import Chart from "react-apexcharts";
const ApexCharts = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
              height={"250rem"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApexCharts;
