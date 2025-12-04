
/**
 * @file TransactionsTable.jsx
 * @description Example component that displays transactions using SimpleTable.
 * It maps the incoming `transactions` to rows and defines columns.
 */

import React from "react";
import SimpleTable from "./SimpleTable";

/**
 * @typedef {Object} Transaction
 * @property {string|number} transactionId
 * @property {string} customerName
 * @property {string|Date} purchaseDate - ISO string or Date.
 * @property {string} [products]
 * @property {number|string} totalPrice
 * @property {number|string} rewardPoints
 */

/**
 * @typedef {Object} TransactionsTableProps
 * @property {Transaction[]} transactions
 */

/**
 * Render a simple transactions table with sorting and pagination.
 *
 * @param {TransactionsTableProps} props
 */
const TransactionsTable = ({ transactions }) => {
  // Map props to normalized rows for the table
  const rows = (transactions ?? []).map((t, i) => ({
    id: i, // safe fallback id for demo; use stable ids in production
    transactionId: t.transactionId ?? "—",
    customerName: t.customerName && t.customerName.trim() !== "" ? t.customerName : "Unknown",
    date: new Date(t.purchaseDate).toLocaleDateString(),
    price: Number(t.totalPrice ?? 0),
    points: Number(t.rewardPoints ?? 0),
  }));

  const columns = [
    { id: "transactionId", label: "ID" },
    { id: "customerName", label: "Customer" },
    { id: "date", label: "Date" },
    { id: "price", label: "Price", numeric: true },
    { id: "points", label: "Points", numeric: true },
  ];

  return (
    <div>
      <h1>Transactions</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default TransactionsTable;
