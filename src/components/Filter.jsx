import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";

/**
 * @component Filter.jsx
 * @description It will filter the transactions based on the choosen date range.
 
 */

const Filter = ({ transactions, setFilteredTransactions }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


 
  const handleFilter = () => {
    if (!startDate && !endDate) {
      setFilteredTransactions(transactions);
      return;
    }
    const start=startDate ? new Date(startDate) :null ;
    const end=endDate? new Date(endDate) :null ;

  
    const filtered = transactions.filter((transaction) => {
      const transacDate = new Date(transaction.purchaseDate);
      return transacDate >= start && transacDate <= end;
    });
    setFilteredTransactions(filtered);
  };

  const handleReset = () => {
    
    setFilteredTransactions(transactions);
    setStartDate("");
    setEndDate("");
    }

  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <TextField
          label="Start Date"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          type="date"
          value={startDate}
          sx={{ minWidth: 180 }}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          label="End Date"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          type="date"
          value={endDate}
          sx={{ minWidth: 180 }}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button onClick={handleFilter} variant="contained">
          Apply Filter
        </Button>
        <Button onClick={handleReset} variant="outlined" >
          Reset
        </Button>
      </Stack>
    </Paper>
  );
};

export default Filter;
