import React, { useState ,useEffect} from "react";
import { fetchTransactions } from "./services/api";
import { calculateRewardPoints } from "./utils/calculateRewards";
import TransactionsTable from "./components/TransactionsTable";
import MonthlyRewardsTable from "./components/MonthlyRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import './App.css'


function App() {
  const [transactions,setTransactions] = useState([]);
   const [loading,setLoading] =useState(true);
   const [error,setError]=useState(null);

   useEffect(()=>{
    const getData =async() =>{
        try{
           const data = await fetchTransactions();
           const transactionWithRewards =data.map(transaction=>({...transaction,rewardPoints:calculateRewardPoints(transaction.price)}));
           setTransactions(transactionWithRewards);
        }
        catch(err){
           setError('Failed to fetch transactions');
        }finally{
           setLoading(false);
        }
    };
    getData();
  },[]);
   
  if (loading) return <div>loading...</div>;
  if(error) return <div>{error}</div>;

  return(
    <div style={{padding:'20px'}}>
       <h1 style={{fontFamily:'cursive',color:'green',fontSize:'20px'}}>Customer Rewards Program</h1>
      <TransactionsTable transactions={transactions}/>
      <MonthlyRewardsTable transactions={transactions}/>
      <TotalRewardsTable transactions={transactions}/>
   </div>

)



}



export default App
