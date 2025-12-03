import {render,screen} from '@testing-library/react';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import '@testing-library/jest-dom'


describe('MonthlyRewardsTable',()=>{
  test("aggregate monthly date and renders rows",()=>{
  //Arraging mininal mock transactions
    const mockTransactions=[
    {
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
  }]
    
    render(<MonthlyRewardsTable transactions={mockTransactions}/>);

    //Assert Table headers
    expect(screen.getByText(/Customer ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Reward Points/i)).toBeInTheDocument();
    
})


   
});