import React, { Children } from "react";

import {
    Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
} from '@mui/material';

const MuiTableWrapper = ({columns,rows})=>(
    <TableContainer >
      <Table >
        <TableHead>
            <TableRow>
                    {columns.map((col,index)=>{
                        <TableCell key={index}  >{col}</TableCell>
                    })}
            </TableRow>
        </TableHead>
        <TableBody>{rows.map((row,rowIndex)=>{
             <TableRow key={rowIndex}>
                      {columns.map((col,colIndex)=>{
                        <TableCell key={colIndex}>{row[col]}</TableCell>
                      })}
             </TableRow>
        })}</TableBody>
      </Table>
    </TableContainer>
)


export default MuiTableWrapper;