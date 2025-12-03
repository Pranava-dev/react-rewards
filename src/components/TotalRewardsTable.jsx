import React from 'react';
import {
    Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,
} from '@mui/material';


const TotalRewardsTable =({transactions})=>{
    
    const totals = transactions.reduce((acc,transaction)=>{
        if(!acc[transaction.customerId]){
            acc[transaction.customerId]={customerName:transaction.customerName,points:0};
        } 
         acc[transaction.customerId].points+=transaction.rewardPoints;
         return acc;
    },{});
   
    
    

    return (
        <div>
            <h1>Total Rewards</h1>
            <TableContainer >
            <Table>
        <TableHead>
            <TableRow><TableCell>Customer Name</TableCell><TableCell>Reward Points</TableCell></TableRow>
        </TableHead>
        <TableBody>
            {Object.entries(totals).map(([id,data])=>(
                <TableRow key={id}><TableCell>{data.customerName}</TableCell><TableCell>{data.points}</TableCell></TableRow>
            ))}
        </TableBody>

        </Table>
        </TableContainer>
        </div>
    );

}

export default TotalRewardsTable;