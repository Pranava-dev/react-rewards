import React ,{useState} from 'react';
import {
    Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TablePagination
} from '@mui/material';


const TotalRewardsTable =({transactions})=>{

    const totals = transactions.reduce((acc,transaction)=>{
        if(!acc[transaction.customerId]){
            acc[transaction.customerId]={customerName:transaction.customerName,points:0};
        } 
         acc[transaction.customerId].points+=Number(transaction.rewardPoints) || 0;
         return acc;
    },{});
    const rows=Object.entries(totals);
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(10);

    const handleChangePage=(e,newPage)=>{
      setPage(newPage);
    }

    
    

    return (
        <div>
            <h1>Total Rewards</h1>
            <TableContainer >
            <Table>
        <TableHead>
            <TableRow><TableCell>Customer Name</TableCell><TableCell>Reward Points</TableCell></TableRow>
        </TableHead>
        <TableBody>
            {rows.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map(([id,data])=>(
                <TableRow key={id}><TableCell>{data.customerName}</TableCell><TableCell>{isNaN(data.points) ? 0 : data.points}</TableCell></TableRow>
            ))}
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

export default TotalRewardsTable;