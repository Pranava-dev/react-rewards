import {render,screen} from '@testing-library/react';
import TransactionsTable from './components/TransactionsTable';
import '@testing-library/jest-dom'
import { TestWatcher } from 'jest';



describe("Transactiontable Component",()=>{

    const mockTransactions=[
        {
            "id":1,
            "customerId":101,
            "name":"Alice",
            "date":'2025-12-03',
            "product":"Laptop",
            "price":178.45,
            "rewardPoints":50
    
        },
        {
            "id":2,
            "customerId":103,
            "name":"Charlie",
            "date":"2025-12-07",
            "product":"Mouse",
            "price":65.32,
            "rewardPoints":10
        
        }]

    test('renders table header properly',()=>{
        render(<TransactionsTable transactions={mockTransactions}/>);
    expect(screen.getByText(/Transaction Table/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Reward Points/i)).toBeInTheDocument();

    })
    
    
   
});