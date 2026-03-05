# ─────────────────────────────────────────────────────────────
# LC #15 · 3Sum · Medium
# Pattern : Two Pointers (sort + fix one element)
# URL     : https://leetcode.com/problems/3sum/
# ─────────────────────────────────────────────────────────────
# Status  : [ ] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

from typing import List


# nums.sort()
# for i in ...:          # fix first element
#     for j in ...:      # fix second (only for 4Sum)
#         L, R = ..., len(nums)-1
#         while L < R:
#             total = nums[i] + ... + nums[L] + nums[R]
#             if total < target:  L += 1
#             if total > target:  R -= 1
#             if total == target: # record + skip duplicates



class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        i=0,j=1,k=2
        out = List[List[int]]
        while k<len(nums):
            res = twoSum(nums[i],nums[j],nums[k]*-1)
            if len(res)>0:
                out.add([nums[i],nums[j],nums[k]])
            i+=1
            j+=1
            k+=1

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mymap = {}
        for i,num in enumerate(nums) :
            if target - num not in mymap:
                mymap[num]=i
            else:
                return [mymap[target-num],i]



# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert sorted(s.threeSum([-1, 0, 1, 2, -1, -4])) == sorted([[-1, -1, 2], [-1, 0, 1]]), "Test 1 failed"
    assert s.threeSum([0, 1, 1])                      == [],                                "Test 2 failed"
    assert s.threeSum([0, 0, 0])                      == [[0, 0, 0]],                       "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
