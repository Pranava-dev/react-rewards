
/**
 * @file SimpleTable.jsx
 * @description A minimal, reusable Material-UI Table component that provides
 * client-side sorting and pagination. Pass `columns` and `rows` and it
 * handles the rest.
 */

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
 * @typedef {Object} SimpleColumn
 * @property {string} id - Key in the row object used for display and sort.
 * @property {string} label - Header text.
 * @property {boolean} [numeric] - Right-align numeric values.
 * @property {(row:any)=>React.ReactNode} [render] - Optional cell renderer.
 */

/**
 * @typedef {Object} SimpleTableProps
 * @property {SimpleColumn[]} columns - Column definitions.
 * @property {Array<Object>} rows - Data rows; each should include a unique `id`.
 */

/**
 * Simple reusable table with sorting & pagination.
 * - Sorting: click column header to toggle asc/desc.
 * - Pagination: controls at the bottom, client-side slicing.
 *
 * @param {SimpleTableProps} props
 */
const SimpleTable = ({ columns, rows }) => {
  const [orderBy, setOrderBy] = React.useState(columns[0]?.id ?? "");
  const [order, setOrder] = React.useState("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  /**
   * Toggle sorting for a given column id.
   * @param {string} colId
   */
  const handleSort = (colId) => {
    const isAsc = orderBy === colId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(colId);
  };

  /**
   * Return a sorted copy of rows based on current `orderBy` and `order`.
   * NOTE: basic comparator for strings/numbers; add a custom `render` for formatting.
   */
  const sortedRows = React.useMemo(() => {
    return [...(rows ?? [])].sort((a, b) => {
      const va = a?.[orderBy];
      const vb = b?.[orderBy];
      if (va === vb) return 0;
      if (va < vb) return order === "asc" ? -1 : 1;
      return order === "asc" ? 1 : -1;
    });
  }, [rows, order, orderBy]);

  /** Slice the current page. */
  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper data-testid="simple-table" sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id} align={col.numeric ? "right" : "left"}>
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
              <TableRow hover key={row.id}>
                {columns.map((col) => (
                  <TableCell key={col.id} align={col.numeric ? "right" : "left"}>
                    {col.render ? col.render(row) : String(row[col.id] ?? '')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows?.length ?? 0}
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

export default SimpleTable;
