import React, { useState } from "react";
import RemoteWorkChart from "./molecules/userStats/RemoteWorkChart";
import SkillChart from "./molecules/userStats/SkillChart";


function TheWorkersStats(props) {
  let remoter = props.data.getUserStats.find((o) => o.category === "remoter");
  let skill = props.data.getUserStats.find((o) => o.category === "skill");
  let compensation = props.data.getUserStats.find((o) => o.category === "compensationrange");

  return (
    <div className="TheWorkersStats">
      {remoter && (
        <RemoteWorkChart remoter={remoter} />
      )}
      {skill && (
        <SkillChart skill={skill} />
      )}
    </div>
  );
}

export default TheWorkersStats;
