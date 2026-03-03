# ─────────────────────────────────────────────────────────────
# LC #11 · Container With Most Water · Medium
# Pattern : Two Pointers (shrink from outside in)
# URL     : https://leetcode.com/problems/container-with-most-water/
# ─────────────────────────────────────────────────────────────
# Status  : [x] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        L = 0
        R = len(height) - 1
        max_area = 0
        while L < R:
            area = min(height[L], height[R]) * (R - L)
            max_area = max(max_area, area)
            if height[L] >= height[R]:
                R -= 1
            else:
                L += 1
        return max_area


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49, "Test 1 failed"
    assert s.maxArea([1, 1]) == 1, "Test 2 failed"
    assert s.maxArea([4, 3, 2, 1, 4]) == 16, "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
