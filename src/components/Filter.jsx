import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";

const Filter = ({ transactions, setFilteredTransactions }) => {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");


  //Get first and last day of month

  const getMonthBonds=(yyyyMm)=>{
     const [year,month]=yyyyMm.split("-");
     const y=Number(year);
     const m=Number(month-1); //js months are 0 based
     const start=new Date(y,m,1);
     const end=new Date(y,m+1,0);//Day 0 of next month = last day of current
     return {start,end};

  }
  const handleFilter = () => {
    if (!startMonth && !endMonth) {
      setFilteredTransactions(transactions);
      return;
    }
    const startKey=startMonth||endMonth;
    const endKey=endMonth||startMonth;

    const {start} = getMonthBonds(startKey);
    const {end} = getMonthBonds(endKey);
    const filtered = transactions.filter((transaction) => {
      const transacDate = new Date(transaction.purchaseDate);
      return transacDate >= start && transacDate <= end;
    });
    setFilteredTransactions(filtered);
  };

  const handleReset = () => {
    
    setFilteredTransactions(transactions);
    setStartMonth("");
    setEndMonth("");
    }

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
        <Button onClick={handleReset} >
          Reset
        </Button>
      </Stack>
    </Paper>
  );
};

export default Filter;
