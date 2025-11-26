import React, { useState ,useEffect} from "react";

import './App.css'

function App() {
  const [data,setData] = useState([]);
    const [points,setPoints] = useState({});
    const [loading,setLoading] = useState(true);

    const calculatePoints =(amt)=>{
       if(amt<=50) return 0;
       if(amt>100){
        return (amt-100)*2+50;
       }
       return amt-50;
    }
    

    useEffect (()=>{
      setTimeout(()=>{
        const transac = [
              {cust :"Krishna" , amt:120 ,date:"2024-06-15"},
              {cust :"Krishna" , amt:75 ,date:"2024-07-10"},
              {cust :"Bob" , amt:200 ,date:"2024-06-20"},
              {cust :"Bob" , amt:50 ,date:"2024-08-05"},
              {cust :"Bob" , amt:50 ,date:"2024-08-05"},
              {cust :"Sunny" , amt:90 ,date:"2024-07-25"},
              {cust :"Sunny" , amt:130 ,date:"2024-08-15"},
              {cust :"Krishna" , amt:40 ,date:"2024-08-20"},
        ];
        setData(transac);
        setLoading(false);
      },2000);
    },[]);

    useEffect(()=>{
        if(data.length >0){
           const result = data.reduce((acc,cur)=>{
           const {cust ,amt,date}=cur;
             const month =      date.substring(5,7);
             const pts=calculatePoints(amt);

             if(!acc[cust]){
              acc[cust] = {total:0,months:{}};
             }
             if(!acc[cust].months[month]){
              acc[cust].months[month]=0;
             }
             acc[cust].months[month]+=pts;
             acc[cust].total+=pts;

             return acc;

           },{});
          
          setPoints(result);
        }
       
    },[data]);

    return(
     <div>
      
      <h1>Rewards</h1>
      {loading? (<p>loading...</p>):(
      <div>
      {
      Object.keys(points).map((c,idx)=>(
        <div key={idx} style={{marginBottom:'20px',marginLeft:'50px'}}>
        <h2>{c}</h2>
        <p><strong>Total points :</strong> {points[c].total } </p>
        <table style={{width:"100%",borderCollapse:'collapse',marginTop:'10px'}}>
          <thead>
            <tr style={{backgroundColor:'grey'}}>
              <th style={{border:'1px solid black',padding:'8px'}}>
                 Months
              </th>
              <th style={{border:'1px solid black',padding:'8px'}}>
                 Points
              </th>
            </tr>
          </thead>
          <tbody>
        {
      Object.keys(points[c].months).map((m,i)=>(
        <tr>
        <td style={{border:'1px solid black'}}>Month {m}</td> 
        <td style={{border:'1px solid black'}}>{points[c].months[m] } points </td> 
        </tr>
      ))}

</tbody>
</table>

        </div>
      ))}
      </div>
      )}
    </div>
    )
}
  


export default App
