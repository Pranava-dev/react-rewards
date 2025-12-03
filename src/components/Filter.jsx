import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";

const Filter = ({ transactions, setFilteredTransactions }) => {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");

  const handleFilter = () => {
    if (!startMonth && !endMonth) {
      setFilteredTransactions(transactions);
      return;
    }
    const start = new Date(startMonth + "-01");
    const end = new Date(endMonth + "-31");
    const filtered = transactions.filter((transaction) => {
      const transacDate = new Date(transaction.purchaseDate);
      return transacDate >= start && transacDate <= end;
    });
    setFilteredTransactions(filtered);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <TextField
          label="Start Month"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          type="month"
          value={startMonth}
          sx={{ minWidth: 180 }}
          onChange={(e) => setStartMonth(e.target.value)}
        />
        <TextField
          label="End Month"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          type="month"
          value={endMonth}
          sx={{ minWidth: 180 }}
          onChange={(e) => setEndMonth(e.target.value)}
        />
        <Button onClick={handleFilter} variant="contained">
          Apply Filter
        </Button>
      </Stack>
    </Paper>
  );
};

export default Filter;
