# ─────────────────────────────────────────────────────────────
# LC #125 · Valid Palindrome · Easy
# Pattern : Two Pointers
# URL     : https://leetcode.com/problems/valid-palindrome/
# ─────────────────────────────────────────────────────────────
# Status  : [ ] Solved  [ ] Needs Revisit
# Date    :
# Time    :
# Notes   :
# ─────────────────────────────────────────────────────────────

class Solution:
    def isPalindrome(self, s: str) -> bool:
        pass


# ─── Tests ────────────────────────────────────────────────────
def test():
    s = Solution()

    assert s.isPalindrome("A man, a plan, a canal: Panama") == True,  "Test 1 failed"
    assert s.isPalindrome("race a car")                     == False, "Test 2 failed"
    assert s.isPalindrome(" ")                              == True,  "Test 3 failed"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test()
