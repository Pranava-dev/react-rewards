import React from 'react';

const MonthlyRewardsTable =({transactions})=>{

    const monthlyData=transactions.reduce((acc,transaction)=>{
         const date= new Date(transaction.date);
         const month = date.toLocaleString('default',{month:'long'});
         const year =date.getFullYear();
         const key = `${transaction.customerId}-${month}-${year}`;
         if(!acc[key]){
            acc[key] = {customerId:transaction.customerId,name:transaction.name,month,year,points:0};
         }
         acc[key].points+=transaction.rewardPoints;
         return acc;
    },{});


const rows=Object.values(monthlyData);

return(
    <div>
        <h1 >User Monthly Rewards</h1>
        <table border='1'>
        <thead>
            <tr><th>Customer ID</th><th>Name</th><th>Month</th><th>Year</th><th>Reward Points</th></tr>
        </thead>
        <tbody>
            {
                rows.map((row,id)=>(
                    <tr key={id}>
                        <td>{row.customerId}</td><td>{row.name}</td><td>{row.month}</td><td>{row.year}</td><td>{row.points}</td>
                    </tr>
                ))
            }

        </tbody>

        </table>
    </div>
);

}

export default MonthlyRewardsTable;


