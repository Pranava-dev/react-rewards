import {render,screen} from '@testing-library/react';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import '@testing-library/jest-dom'



test("renders monthly rewards for each customer",()=>{

    const mockTransactions=[
    {
        "id":1,
        "customerId":101,
        "name":"Alice",
        "date":'2025-12-03',
        "rewardPoints":90

    },
    {
        "id":2,
        "customerId":101,
        "name":"Alice",
        "date":'2025-12-15',
        "rewardPoints":25

    }]
    
    render(<MonthlyRewardsTable transactions={mockTransactions}/>);
    expect(screen.getByText(/Customer ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Reward Points/i)).toBeInTheDocument();
    

   
});