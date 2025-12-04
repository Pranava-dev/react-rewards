
import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Paper,
  TableSortLabel,
} from "@mui/material";

/**
 * Simple reusable table with sorting & pagination.
 * @param {Object} props
 * @param {Array} props.columns - [{ id: 'field', label: 'Header' }]
 * @param {Array} props.rows - [{ id: 1, field: value }]
 */
const Table = ({ columns, rows }) => {
  const [orderBy, setOrderBy] = useState(columns[0].id);
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (colId) => {
    const isAsc = orderBy === colId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(colId);
  };

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, order, orderBy]);

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id}>
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={orderBy === col.id ? order : "asc"}
                    onClick={() => handleSort(col.id)}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((col) => (
                  <TableCell key={col.id}>{row[col.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
};

export default Table;
