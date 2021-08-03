import React, { useState } from "react";
import Chart from "react-apexcharts";

function RemoteWorkChart(props) {
  const remoteWorkSeries = props.remoter.subcategories.map((data) => data.total);
  const [state, setState] = useState({
    series: remoteWorkSeries,
    labels: ["Yes", "No"],
    options: {
      chart: {
        type: "donut",
      },
      title: {
        text: `Working at home is the new black!`,
        align: "center",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="RemoteWorkChart">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="pie"
            width="380"
          />
        </div>
      </div>
    </div>
  );
}

export default RemoteWorkChart;
