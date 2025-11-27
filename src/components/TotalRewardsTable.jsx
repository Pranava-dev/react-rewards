import React from 'react';

const TotalRewardsTable =({transactions})=>{
    
    const totals = transactions.reduce((acc,transaction)=>{
        if(!acc[transaction.name]) acc[transaction.name]=0;
         acc[transaction.name]+=transaction.rewardPoints;
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
            {Object.entries(totals).map(([name,points],id)=>(
                <tr key={id}><td>{name}</td><td>{points}</td></tr>
            ))}
        </tbody>

        </table>

        </div>
    );

}

export default TotalRewardsTable;