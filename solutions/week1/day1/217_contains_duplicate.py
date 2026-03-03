# ─────────────────────────────────────────────────────────────
# LC #217 · Contains Duplicate · Easy
# Pattern : HashSet
# URL     : https://leetcode.com/problems/contains-duplicate/
# ─────────────────────────────────────────────────────────────
# Status  : [ ] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        myset = set()
        for n in nums:
            if n in myset:
                return True
            else:
                myset.add(n)
        return False


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.containsDuplicate([1, 2, 3, 1])              == True,   "Test 1 failed"
    assert s.containsDuplicate([1, 2, 3, 4])              == False,  "Test 2 failed"
    assert s.containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2]) == True,   "Test 3 failed"
    assert s.containsDuplicate([1])                       == False,  "Test 4 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
