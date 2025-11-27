export const fetchTransactions =async()=>{

    return new Promise ((resolved)=>{
        setTimeout(()=>{
              resolved([
                {
                    "id":1,
                    "customerId":101,
                    "name":"Alice",
                    "date":"2023-12-03",
                    "product":"Laptop",
                    "price":178.45

                },
                {
                    "id":2,
                    "customerId":103,
                    "name":"Max",
                    "date":"2023-12-07",
                    "product":"Phone",
                    "price":120.78
                },
                
              ])
        },1000)
    })

}