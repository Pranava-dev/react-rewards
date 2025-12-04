
import React from "react";
import SimpleTable from "./SimpleTable";

const TotalRewardsTable = ({ transactions }) => {
  const totals = transactions.reduce((acc, t) => {
    const id = t.customerId;
    if (!acc[id]) acc[id] = { id, name: t.customerName, points: 0 };
    acc[id].points += t.rewardPoints;
    return acc;
  }, {});

  const rows = Object.values(totals);

  const columns = [
    { id: "name", label: "Customer Name" },
    { id: "points", label: "Reward Points" },
  ];

  return (
    <div>
      <h1>Total Rewards</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default TotalRewardsTable;
