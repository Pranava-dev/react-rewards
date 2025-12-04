
/**
 * @component TransactionsTable.jsx
 * @description Example component that displays transactions using Table.
 * It maps the incoming `transactions` to rows and defines columns.
 */

import React from "react";
import Table from "./Table";

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
  const rows = (transactions ?? []).map((transaction, i) => ({
    id: i, // safe fallback id for demo; use stable ids in production
    transactionId: transaction.transactionId ?? "—",
    customerName: transaction.customerName && transaction.customerName.trim() !== "" ? transaction.customerName : "Unknown",
    date: new Date(transaction.purchaseDate).toLocaleDateString(),
    product: transaction.products && transaction.products.trim() !== "" ? transaction.products : "N/A",
    price: Number(transaction.totalPrice ?? 0),
    points: Number(transaction.rewardPoints ?? 0),
  }));

  const columns = [
    { id: "transactionId", label: "TransactionID" },
    { id: "customerName", label: "Customer" },
    { id: "date", label: "Date" },
    { id: "product", label: "Product" },
    { id: "price", label: "Price", numeric: true },
    { id: "points", label: "Reward Points", numeric: true },
  ];

  return (
    <div>
      <h1>Transactions</h1>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default TransactionsTable;
