import React, { useState ,useEffect} from "react";

import './App.css'

function App() {
  const [data,setData] = useState([]);
    const [points,setPoints] = useState({});

    useEffect (()=>{
      setTimeout(()=>{
        const transac = [
              {cust :"Alice" , amt:120 ,date:"2024-06-15"},
              {cust :"Alice" , amt:75 ,date:"2024-07-10"},
              {cust :"Alice" , amt:40 ,date:"2024-08-20"},
        ];
        setData(transac);
      },2000);
    },[]);

    useEffect(()=>{
        if(data.length >0){
          let result ={};
          for(let i=0;i<data.length;i++){
            let c = data[i].cust;
            let a=  data[i].amt;
            let month=data[i].date.substring(5,7);
            let pts =0;

            if(a>100){
              pts = (a-100) *2 +50;
            }
            else if(a>50){
              pts=a-50;
            }
            if(!result[c]){
              result[c]={total:0,months:{}};
            }
            if(!result[c].months[month]){
              result[c].months[month]=0;
            }
            result[c].months[month]+=pts;
            result[c].total+=pts;
          }
          setPoints(result);
        }
       
    });

    return(
     <div>
      
      <h1>Rewards</h1>
      <div>
      {
      Object.keys(points).map((c,idx)=>(
        <div>
        <h2>{c}</h2>
        <p>points : {points[c].total } </p>
        <ul>
        {
      Object.keys(points[c].months).map((m,i)=>(
        <li> Month {m} {points[c].months[m] } points </li>
      ))}

          </ul>

        </div>
      ))}
      </div>
    
    </div>
    )
}
  


export default App
