
import { fetchTransactions } from "./services/api";

jest.mock("./services/api",()=>({
    fetchTransactions:jest.fn()
}));

describe("Mocking API",()=>{




//Test Mock API and verify data

test("fetchTransacrtions should return mocked data",async()=>{
   const  mockData=[{
    "transactionId": "TXN0001",
    "customerId": 1001,
    "customerName": "Alice Johnson",
    "purchaseDate": "2025-01-04",
    "products": null,
    "totalPrice": "849.81"
  },
  {
    "transactionId": "TXN0002",
    "customerId": 1001,
    "customerName": null,
    "purchaseDate": "2025-03-29",
    "products": "Mouse, Monitor, Laptop",
    "totalPrice": "475.86"
  },];
  fetchTransactions.mockResolvedValue(mockData);

  const result =await fetchTransactions();

  expect(result).toEqual(mockData);
  expect(fetchTransactions).toHaveBeenCalledTimes(1);



});



});



