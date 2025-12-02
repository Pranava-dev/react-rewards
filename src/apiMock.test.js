
import { fetchTransactions } from "./services/api";

jest.mock("./services/api",()=>({
    fetchTransactions:jest.fn()
}));

describe("Mocking API",()=>{




//Test Mock API and verify data

test("fetchTransacrtions should return mocked data",async()=>{
   const  mockData=[ {
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
  }];

  fetchTransactions.mockResolvedValue(mockData);

  const result =await fetchTransactions();

  expect(result).toEqual(mockData);
  expect(fetchTransactions).toHaveBeenCalledTimes(1);



});



});



