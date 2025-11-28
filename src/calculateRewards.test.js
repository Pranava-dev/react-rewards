import { calculateRewardPoints } from "./utils/calculateRewards";

test("calculate reward points correctly",()=>{
   expect(calculateRewardPoints(120)).toBe(90);
   expect(calculateRewardPoints(75)).toBe(25);
   expect(calculateRewardPoints(50)).toBe(0);
});