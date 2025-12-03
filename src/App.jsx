import React, { useState} from "react";
import TransactionsTable from "./components/TransactionsTable";
import MonthlyRewardsTable from "./components/MonthlyRewardsTable";
import TotalRewardsTable from "./components/TotalRewardsTable";
import './App.css'
import Filter from "./components/Filter";
import TransactionsLoader from "./components/TransactionsLoader";


function App() {
  const [transactions,setTransactions] = useState([]);
  const [filteredTransactions,setFilteredTransactions] = useState([]);
  const [loading,setLoading] =useState(true);
  const [error,setError]=useState(null);

  

  return(
    <div className="app-container">
       <h1 className="main-header">Customer Rewards Data</h1>
       {loading && <div className="loading">Loading Please Wait..</div>}
       {error &&  <div>{error}</div>}
      <TransactionsLoader setTransactions={setTransactions} setFilteredTransactions={setFilteredTransactions} setLoading={setLoading} setError={setError}/>
      <Filter transactions={transactions} setFilteredTransactions={setFilteredTransactions}></Filter>
      <TransactionsTable transactions={filteredTransactions}/>
      <MonthlyRewardsTable transactions={filteredTransactions}/>
      <TotalRewardsTable transactions={filteredTransactions}/>
     
   </div>

)



}



export default App
