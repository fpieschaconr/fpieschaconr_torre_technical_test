import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function SkillChart(props) {
  const skillSeries = props.skill.subcategories.map(
    (sub) =>
      new Object({
        x: sub.value,
        y: sub.total,
      })
  );
  const [state, setState] = useState({
    series: [
      {
        data: skillSeries,
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: 450,
        type: "treemap",
      },
      title: {
        text: `Out of ${props.skill.total} skills, how unique are yours?`,
        align: "center",
      },
      colors: [
        "#3B93A5",
        "#F7B844",
        "#ADD8C7",
        "#EC3C65",
        "#CDD7B6",
        "#C1F666",
        "#D43F97",
        "#1E5D8C",
        "#421243",
        "#7F94B0",
        "#EF6537",
        "#C0ADDB",
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false,
        },
      },
    },
  });

  return (
    <div className="SkillChart">
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="treemap"
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillChart;
