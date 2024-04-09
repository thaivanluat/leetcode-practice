Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

============================
```
So the solution is using stack, we loop through the string, if the character is open bracket then we add that
character to the stack then check the next character. if the next character is the close bracket of the last
character push to stack then we pop the last one out of the stack. if the close bracket is not then the string 
is invalid. we should create a stack (array in javascript) and a map to mapping open and close bracket 

Time complexity: O(n)
Space complexity: O(n)

```