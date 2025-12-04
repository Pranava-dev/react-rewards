
/**
 * @file TotalRewardsTable.jsx
 * @description Sums reward points per customer and renders a compact table
 * using the SimpleTable component.
 */

import React from "react";
import SimpleTable from "./SimpleTable";

/**
 * @typedef {Object} TotalRewardsTableProps
 * @property {Array<Object>} transactions - Source transactions.
 */

/**
 * Total rewards per customer.
 * @param {TotalRewardsTableProps} props
 */
const TotalRewardsTable = ({ transactions }) => {
  const totals = (transactions ?? []).reduce((acc, t) => {
    const id = t.customerId ?? "—";
    const name = t.customerName && t.customerName.trim() !== "" ? t.customerName : "Unknown";
    const pts = Number(t.rewardPoints ?? 0);
    if (!acc[id]) acc[id] = { id, name, points: 0 };
    acc[id].points += pts;
    return acc;
  }, {});

  const rows = Object.values(totals).map((r, i) => ({
    id: i,
    name: r.name,
    points: Number(r.points ?? 0),
  }));

  const columns = [
    { id: "name", label: "Customer Name" },
    { id: "points", label: "Reward Points", numeric: true },
  ];

  return (
    <div>
      <h1>Total Rewards</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default TotalRewardsTable;
