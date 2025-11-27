import React from 'react';
import PropTypes from 'prop-types'

const TransactionsTable =({transactions})=>(
    <div>
        <h1 >
            Transaction Table
        </h1>
     <table border='1'>
        <thead>
            <tr><th>ID</th><th>Customer</th><th>Date</th><th>Product</th><th>Price</th><th>Reward Points</th></tr>
        </thead>
        <tbody>
            {transactions.map(transaction=>(
                <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.name}</td>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.product}</td>
                    <td>${transaction.price.toFixed(2)}</td>
                    <td>{transaction.rewardPoints}</td>

                </tr>
            ))}
        </tbody>

     </table>

    </div>
)

TransactionsTable.propTypes={
    transactions:PropTypes.array.isRequired
}

export default TransactionsTable;