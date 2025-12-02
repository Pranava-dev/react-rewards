import {render,screen} from '@testing-library/react';
import TotalRewardsTable from './components/TotalRewardsTable';
import '@testing-library/jest-dom'



test("renders total rewards for each customer",()=>{

    const mockTransactions=[
    {
        "id":1,
        "customerId":101,
        "name":"Alice",
        "rewardPoints":90

    },
    {
        "id":2,
        "customerId":101,
        "name":"Alice",
        "rewardPoints":25

    }]
    
    render(<TotalRewardsTable transactions={mockTransactions}/>);
    expect(screen.getByText(/Customer Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Reward Points/i)).toBeInTheDocument();

    expect(screen.getByText(/Alice/i)).toBeInTheDocument();
    expect(screen.getByText(/115/i)).toBeInTheDocument();

   
});