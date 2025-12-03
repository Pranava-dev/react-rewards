import {render,screen} from '@testing-library/react';
import TotalRewardsTable from './components/TotalRewardsTable';
import '@testing-library/jest-dom'


describe('TotalRewardsTable',()=>{
test("renders total rewards for each customer",()=>{

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
    
    render(<TotalRewardsTable transactions={mockTransactions}/>);
    expect(screen.getByText(/Customer Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Reward Points/i)).toBeInTheDocument();

    expect(screen.getByText(/Alice Johnson/i)).toBeInTheDocument();
    

   
});

})