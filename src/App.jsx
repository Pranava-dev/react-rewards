import React, { useState ,useEffect, useActionState} from "react";
import { fetchTransactions } from "./services/api";
import { calculateRewardPoints } from "./utils/calculateRewards";
import TransactionsTable from "./components/TransactionsTable";
import MonthlyRewardsTable from "./components/MonthlyRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import './App.css'


function App() {
  const [transactions,setTransactions] = useState([]);
  const [filteredTransactions,setFilteredTransactions] = useState([]);
   const [loading,setLoading] =useState(true);
   const [error,setError]=useState(null);
   const [startMonth,setStartMonth]=useState('');
   const [endMonth,setEndMonth]=useState('');

   useEffect(()=>{
    const getData =async() =>{
        try{
           const data = await fetchTransactions();
           const transactionWithRewards =data.map(transaction=>({...transaction,rewardPoints:calculateRewardPoints(transaction.price)}));
           setTransactions(transactionWithRewards);
           setFilteredTransactions(transactionWithRewards);
        }
        catch(err){
           setError('Failed to fetch transactions');
        }finally{
           setLoading(false);
        }
    };
    getData();
  },[]);

  const handleFilter =()=>{
      if(!startMonth && !endMonth){
         setFilteredTransactions(transactions);
         return;
      }
    const start= new Date(startMonth + '-01');
    const end = new Date(endMonth+'-31');
    const filtered=transactions.filter(transaction=>{
      const transacDate=new Date(transaction.date);
      return transacDate>=start&&transacDate<=end;
    })
    setFilteredTransactions(filtered);


  }
   
  if (loading) return <div className="loading">Loading Please Wait..</div>;
  if(error) return <div>{error}</div>;

  return(
    <div className="app-container">
       <h1 className="main-header">Customer Rewards Data</h1>
      
      <div className="filter-container" style={{marginBlock:'20px'}}>
         <label>Start Month:</label>
         <input type="month" value={startMonth} onChange={(e)=>setStartMonth(e.target.value)}/>

<label style={{marginLeft:'10px'}}>End Month:</label>
<input type="month" value={endMonth} onChange={(e)=>setEndMonth(e.target.value)}/>
<button className="filter-button" onClick={handleFilter} style={{marginLeft:'10px'}}>Apply Filter</button>
      </div>
      
      <TransactionsTable transactions={filteredTransactions}/>
      <MonthlyRewardsTable transactions={filteredTransactions}/>
      <TotalRewardsTable transactions={filteredTransactions}/>
   </div>

)



}



export default App
