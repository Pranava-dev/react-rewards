import { calculateRewardPoints } from "./utils/calculateRewards";
import { fetchTransactions } from "./services/api";

jest.mock("./services/api",()=>({
    fetchTransactions:jest.fn()
}));

describe("Rewards  test",()=>{

   //Test 1 Calculation logic
test("calculate reward points correctly",()=>{
   expect(calculateRewardPoints(120)).toBe(90);
   expect(calculateRewardPoints(75)).toBe(25);
   expect(calculateRewardPoints(50)).toBe(0);
});



//Test 2 Mock API and verify data

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



