import { render, screen } from "@testing-library/react";
import TransactionsTable from "../components/TransactionsTable";
import "@testing-library/jest-dom";
import { TestWatcher } from "jest";

describe("Transactiontable Component", () => {
  const mockTransactions = [
    {
      transactionId: "TXN0001",
      customerId: 1001,
      customerName: "Alice Johnson",
      purchaseDate: "2025-01-04",
      products: null,
      totalPrice: "849.81",
    },
    {
      transactionId: "TXN0002",
      customerId: 1001,
      customerName: null,
      purchaseDate: "2025-03-29",
      products: "Mouse, Monitor, Laptop",
      totalPrice: "475.86",
    },
  ];

  test("renders table header properly", () => {
    render(<TransactionsTable transactions={mockTransactions} />);
    expect(screen.getByText(/Transactions/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Points/i)).toBeInTheDocument();
  });
});
