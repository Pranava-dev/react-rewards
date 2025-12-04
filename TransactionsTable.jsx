
import React from "react";
import SimpleTable from "./SimpleTable";

const TransactionsTable = ({ transactions }) => {
  const rows = transactions.map((t, i) => ({
    id: i,
    transactionId: t.transactionId,
    customerName: t.customerName,
    date: new Date(t.purchaseDate).toLocaleDateString(),
    price: t.totalPrice,
    points: t.rewardPoints,
  }));

  const columns = [
    { id: "transactionId", label: "ID" },
    { id: "customerName", label: "Customer" },
    { id: "date", label: "Date" },
    { id: "price", label: "Price" },
    { id: "points", label: "Points" },
  ];

  return (
    <div>
      <h1>Transactions</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  );
};

export default TransactionsTable;
