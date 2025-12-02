import { calculateRewardPoints } from "./utils/calculateRewards";

describe("Rewards  test",()=>{

    //Test 1 Calculation logic
 test("calculate reward points correctly",()=>{
    expect(calculateRewardPoints(120)).toBe(90);
    expect(calculateRewardPoints(75)).toBe(25);
    expect(calculateRewardPoints(50)).toBe(0);
 });

 test("return 0 fro invalie or missing prices",()=>{
    expect(calculateRewardPoints(null)).toBe(0);
    expect(calculateRewardPoints(undefined)).toBe(0);
   
 });
})