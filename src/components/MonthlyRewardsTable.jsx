import React, { useState } from 'react';
import {
    Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
    TablePagination,
} from '@mui/material';

const MonthlyRewardsTable =({transactions})=>{

    const monthlyData=transactions.reduce((acc,transaction)=>{
         const date= new Date(transaction.purchaseDate);
         const month = date.toLocaleString('default',{month:'long'});
         const year =date.getFullYear();
         const key = `${transaction.customerId}-${month}-${year}`;
         if(!acc[key]){
            acc[key] = {customerId:transaction.customerId,customerName:transaction.customerName,month,year,points:0};
         }
         acc[key].points+=Number(transaction.rewardPoints) || 0;
         return acc;
    },{});


const rows=Object.values(monthlyData);
const [page,setPage]=useState(0);
const [rowsPerPage,setRowsPerPage]=useState(10);

    const handleChangePage=(e,newPage)=>{
      setPage(newPage);
    }


return(
    <div>
        <h1 >User Monthly Rewards</h1>
        <TableContainer>
        <Table>
        <TableHead>
            <TableRow><TableCell>Customer ID</TableCell><TableCell>Name</TableCell><TableCell>Month</TableCell><TableCell>Year</TableCell><TableCell>Reward Points</TableCell></TableRow>
        </TableHead>
        <TableBody>
            {
                rows.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row,id)=>(
                    <TableRow key={id}>
                        <TableCell>{row.customerId}</TableCell><TableCell>{row.customerName || 'Unknown'}</TableCell><TableCell>{row.month}</TableCell><TableCell>{row.year}</TableCell><TableCell>{isNaN(row.points)? 0 : row.points}</TableCell>
                    </TableRow>
                ))
            }

        </TableBody>

        </Table>
        <TablePagination
       component="div"
       count={rows.length}
       page={page}
       onPageChange={handleChangePage}
       rowsPerPage={rowsPerPage}
       rowSpan={[]}
     
     />
       
        </TableContainer>
    </div>
);

}

export default MonthlyRewardsTable;


