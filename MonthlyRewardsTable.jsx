
import React from "react";
import SimpleTable from "./SimpleTable";

const MonthlyRewardsTable = ({ transactions }) => {
  const rows = transactions.map((t, i) => {
    const d = new Date(t.purchaseDate);
    return {
      id: i,
      customerId: t.customerId,
      name: t.customerName,
      month: d.toLocaleString("default", { month: "long" }),
      year: d.getFullYear(),
      points: t.rewardPoints,
    };
  });

  const columns = [
    { id: "customerId", label: "Customer ID" },
    { id: "name", label: "Name" },
    { id: "month", label: "Month" },
    { id: "year", label: "Year" },
    { id: "points", label: "Reward Points" },
  ];

  return (
    <div>
      <h1>Monthly Rewards</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default MonthlyRewardsTable;
