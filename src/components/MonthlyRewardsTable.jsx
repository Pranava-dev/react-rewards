
/**
 * @component MonthlyRewardsTable.jsx
 * @description Groups incoming transactions by customer and month/year and
 * displays total points per (customer, month) using Table.
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
  const rows = (transactions ?? []).map((transaction, i) => {
    const date = new Date(transaction.purchaseDate);
    return {
      id: i,
      customerId: transaction.customerId ?? "—",
      name: transaction.customerName && transaction.customerName.trim() !== "" ? transaction.customerName : "Unknown",
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
      points: Number(transaction.rewardPoints) || 0,
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
