import React from 'react';
import PropTypes from 'prop-types'

const TransactionsTable =({transactions})=>{

    const sortedTransactions=[...transactions].sort((a,b)=>new Date(b.purchaseDate)-new Date(a.purchaseDate));

    return(
    <div>
        <h1 >
            Transaction Table
        </h1>
     <table border='1'>
        <thead>
            <tr><th>ID</th><th>Customer</th><th>Date</th><th>Product</th><th>Price</th><th>Reward Points</th></tr>
        </thead>
        <tbody>
            {sortedTransactions.map((transaction,index)=>(
                <tr key={transaction.transactionId}>
                   
                    <td>{transaction.transactionId}</td>
                    <td>{transaction.customerName}</td>
                    <td>{new Date(transaction.purchaseDate).toLocaleDateString()}</td>
                    <td>{transaction.products}</td>
                    <td>${parseFloat(transaction.totalPrice).toFixed(2)}</td>
                    <td>{transaction.rewardPoints}</td>

                </tr>
            ))}
        </tbody>

     </table>

    </div>
    )
}

TransactionsTable.propTypes={
    transactions:PropTypes.array.isRequired
}

export default TransactionsTable;