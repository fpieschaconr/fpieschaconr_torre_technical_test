import React, { useState } from "react";
import "antd/dist/antd.css";
import TheWorkersStats from "../components/TheWorkersStats";
import TheMarketStats from "../components/TheMarketStats";
import { useQuery } from "@apollo/client";
import { GET_STATS } from "../graphql/Queries";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function StatsDisplay() {
  const { loading, error, data } = useQuery(GET_STATS, {
    fetchPolicy: "cache-and-network",
  });

  const [view, setView] = useState("worker");

  if (loading)
    return (
      <Spin
        tip="Loading..."
        indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
      />
    );
  if (error) return `Error! ${error}`;
  return (
    <div className="StatsDisplay">
      {view === "worker" && <TheWorkersStats data={data} />}
      {view === "market" && <TheMarketStats data={data} />}
    </div>
  );
}

export default StatsDisplay;
