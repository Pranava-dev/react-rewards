export const fetchTransactions =async()=>{

    return new Promise ((resolved)=>{
        setTimeout(()=>{
              resolved([
                {
                    "id":1,
                    "customerId":101,
                    "name":"Alice",
                    "date":"2025-12-03",
                    "product":"Laptop",
                    "price":178.45

                },
                {
                    "id":2,
                    "customerId":103,
                    "name":"Charlie",
                    "date":"2025-12-07",
                    "product":"Mouse",
                    "price":65.32
                },
                {
                    "id":3,
                    "customerId":102,
                    "name":"Bob",
                    "date":"2025-12-10",
                    "product":"Phone",
                    "price":120.78
                },
                {
                    "id":4,
                    "customerId":104,
                    "name":"Diana",
                    "date":"2024-12-15",
                    "product":"Monitor",
                    "price":65.32
                },
                {
                    "id":5,
                    "customerId":105,
                    "name":"Ethen",
                    "date":"2024-12-20",
                    "product":"Tablet",
                    "price":150.25
                },
                {
                    "id":6,
                    "customerId":101,
                    "name":"Alice",
                    "date":"2024-01-05",
                    "product":"Keyboard",
                    "price":55.00
                },
                
              ])
        },1000)
    })

}