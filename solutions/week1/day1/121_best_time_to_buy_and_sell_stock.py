# ─────────────────────────────────────────────────────────────
# LC #121 · Best Time to Buy and Sell Stock · Easy
# Pattern : Array / Greedy (track min so far)
# URL     : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
# ─────────────────────────────────────────────────────────────
# Status  : [ ] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

from typing import List


# complex logic
class Solutionx:
    def maxProfit(self, prices: List[int]) -> int:
        high,low = -1,-1
        maxp = 0
        for p in prices:
            if p < low:
                low = p
                high=-1
            else:
                if p > high:
                    high = p
                if low == -1:
                    low = p
                if maxp < (high-low):
                    maxp=(high-low)
                    print(low,high,maxp)
        print(maxp)
        return maxp

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        low = float('inf')
        maxprofit = 0
        for p in prices:
            low = min(low,p)
            maxprofit = max(maxprofit,(p-low))
        return maxprofit


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.maxProfit([7, 1, 5, 3, 6, 4]) == 5,  "Test 1 failed"  # buy@1 sell@6
    assert s.maxProfit([7, 6, 4, 3, 1])    == 0,  "Test 2 failed"  # no profit
    assert s.maxProfit([1, 2])             == 1,  "Test 3 failed"  # simple case
    assert s.maxProfit([2, 4, 1])          == 2,  "Test 4 failed"  # buy@2 sell@4

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
