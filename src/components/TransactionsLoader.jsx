import React, { useEffect } from "react";
import { calculateRewardPoints } from "../utils/calculateRewards";

/**
 * @component TransactionsLoader.jsx
 * @description It will  Fetches transaction data from JSON file.
 
 */


const TransactionsLoader = ({
  setTransactions,
  setFilteredTransactions,
  setLoading,
  setError,
}) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("transactions.json");
        if (!response.ok) {
          throw new Error("Failed to fetch transactions...");
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid Json...");
        }
        const transactionWithRewards = data.map((transaction) => ({
          ...transaction,
          rewardPoints: calculateRewardPoints(transaction.totalPrice),
        }));
        setTransactions(transactionWithRewards);
        setFilteredTransactions(transactionWithRewards);
      } catch (err) {
        setError("Failed to fetch transactions",err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [setTransactions, setFilteredTransactions, setLoading, setError]);
  return null;
};

export default TransactionsLoader;
