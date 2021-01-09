# Binary-Strings-of-a-Given-Legth-and-my-Solution
The algo and my code



algo:
Given a non-negative integer N return the number of binary strings of length N

Example:

Input: N = 3
Output: 8
Explanation: [
    "000",
    "001",
    "010",
    "011",
    "100",
    "101",
    "110",
    "111"
]
Notes: N <= 30




Steps which were taken to solve: 
 
 Step # 1 / 5
Declared an array of integers named dp of length n + 1, by using let function.
 
 Step # 2 / 5
Initialized dp[1] with 2
 
 Step # 3 / 5
Using an index i, I iterated over the indices of dp starting at index 2

Step # 4 / 5
Compute dp[i] by multiplying dp[i - 1] with 2
 
 Step # 5 / 5
Finally, return dp[n]
