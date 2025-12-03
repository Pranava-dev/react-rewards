import React from "react";
import TransactionsLoader from "./components/TransactionsLoader";
import {render,waitFor} from '@testing-library/react';


//Test Mock API and verify data

global.fetch = jest.fn(()=>
   Promise.resolve({
    ok:true,
    json:()=>
   Promise.resolve([{
    "transactionId": "TXN0001",
    "customerId": 1001,
    "customerName": "Alice Johnson",
    "purchaseDate": "2025-01-04",
    "products": null,
    "totalPrice": "849.81"
  },
  {
    "transactionId": "TXN0002",
    "customerId": 1001,
    "customerName": null,
    "purchaseDate": "2025-03-29",
    "products": "Mouse, Monitor, Laptop",
    "totalPrice": "475.86"
  },]),
})
);

  test('loads and sets transactions',async()=>{
    const setTransactions =jest.fn();
    const setFilteredTransactions=jest.fn();
    const setLoading=jest.fn();
    const setError=jest.fn();

    render(

      <TransactionsLoader setTransactions={setTransactions}  setFilteredTransactions={setFilteredTransactions} setLoading={setLoading} setError={setError} />
    );

    await waitFor(()=>{
      expect(fetch).toHaveBeenCalledWith('transactions.json');
      expect(setTransactions).toHaveBeenCalled();
      expect(setFilteredTransactions).toHaveBeenCalled();
    })
    }

  );



