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


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        pass


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert sorted(s.threeSum([-1, 0, 1, 2, -1, -4])) == sorted([[-1, -1, 2], [-1, 0, 1]]), "Test 1 failed"
    assert s.threeSum([0, 1, 1])                      == [],                                "Test 2 failed"
    assert s.threeSum([0, 0, 0])                      == [[0, 0, 0]],                       "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
