import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const TransactionsTable = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate),
  );
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const paginatedData = sortedTransactions.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <div>
      <h1>Transaction Table</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Reward Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.transactionId}</TableCell>
                <TableCell>{transaction.customerName}</TableCell>
                <TableCell>
                  {new Date(transaction.purchaseDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{transaction.products}</TableCell>
                <TableCell>
                  ${parseFloat(transaction.totalPrice).toFixed(2)}
                </TableCell>
                <TableCell>{transaction.rewardPoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={sortedTransactions.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowSpan={[]}
        />
      </TableContainer>
    </div>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionsTable;
