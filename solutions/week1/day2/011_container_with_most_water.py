# ─────────────────────────────────────────────────────────────
# LC #11 · Container With Most Water · Medium
# Pattern : Two Pointers (shrink from outside in)
# URL     : https://leetcode.com/problems/container-with-most-water/
# ─────────────────────────────────────────────────────────────
# Status  : [ ] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        pass


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49, "Test 1 failed"
    assert s.maxArea([1, 1])                        == 1,  "Test 2 failed"
    assert s.maxArea([4, 3, 2, 1, 4])              == 16, "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
