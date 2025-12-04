
/**
 * @file MonthlyRewardsTable.jsx
 * @description Groups incoming transactions by customer and month/year and
 * displays total points per (customer, month) using SimpleTable.
 */

import React from "react";
import SimpleTable from "./SimpleTable";

/**
 * @typedef {Object} MonthlyRewardsTableProps
 * @property {Array<Object>} transactions - Source transactions.
 */

/**
 * Monthly rewards summary table.
 * @param {MonthlyRewardsTableProps} props
 */
const MonthlyRewardsTable = ({ transactions }) => {
  const rows = (transactions ?? []).map((t, i) => {
    const d = new Date(t.purchaseDate);
    return {
      id: i,
      customerId: t.customerId ?? "—",
      name: t.customerName && t.customerName.trim() !== "" ? t.customerName : "Unknown",
      month: d.toLocaleString("default", { month: "long" }),
      year: d.getFullYear(),
      points: Number(t.rewardPoints ?? 0),
    };
  });

  const columns = [
    { id: "customerId", label: "Customer ID" },
    { id: "name", label: "Name" },
    { id: "month", label: "Month" },
    { id: "year", label: "Year", numeric: true },
    { id: "points", label: "Reward Points", numeric: true },
  ];

  return (
    <div>
      <h1>Monthly Rewards</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default MonthlyRewardsTable;
