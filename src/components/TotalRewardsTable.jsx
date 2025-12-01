import React from 'react';

const TotalRewardsTable =({transactions})=>{
    
    const totals = transactions.reduce((acc,transaction)=>{
        if(!acc[transaction.customerId]){
            acc[transaction.customerId]={name:transaction.name,points:0};
        } 
         acc[transaction.customerId].points+=transaction.rewardPoints;
         return acc;
    },{});

    return (
        <div>
            <h1>Total Rewards</h1>
            <table border='1'>
        <thead>
            <tr><th>Customer Name</th><th>Reward Points</th></tr>
        </thead>
        <tbody>
            {Object.entries(totals).map(([id,data])=>(
                <tr key={id}><td>{data.name}</td><td>{data.points}</td></tr>
            ))}
        </tbody>

        </table>

        </div>
    );

}

export default TotalRewardsTable;