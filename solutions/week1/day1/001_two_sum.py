# ─────────────────────────────────────────────────────────────
# LC #1 · Two Sum · Easy
# Pattern : HashMap
# URL     : https://leetcode.com/problems/two-sum/
# ─────────────────────────────────────────────────────────────
# Status  : [x] Solved  [ ] Needs Revisit
# Date    : 
# Time    :
# Notes   : 
# ─────────────────────────────────────────────────────────────

from typing import List

# brute force O(n^2)
class Solutionx:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i,num in enumerate(nums):
            for j,n in enumerate(nums):
                if i!=j and target == num+n:
                    return [i,j]

        return [-1,-1] 
        
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_map = {}
        for i,n in enumerate(nums):
            if (target - n) not in num_map:
                num_map[n]=i
            else:
                return [num_map[(target - n)],i]
        return [-1,-1]
            

        

# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.twoSum([2, 7, 11, 15], 9) == [0, 1],  "Test 1 failed"
    assert s.twoSum([3, 2, 4], 6)      == [1, 2],  "Test 2 failed"
    assert s.twoSum([3, 3], 6)         == [0, 1],  "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    s = Solution()
    print(s.twoSum([3, 2, 4], 6))
    test()
