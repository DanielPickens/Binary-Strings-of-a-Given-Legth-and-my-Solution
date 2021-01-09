class Solution {
    
    countBinaryStrings(n) {
        let dp = new Array(n + 1);
        dp[1] = 2;
        for (let i = 2; i <= n; i++) {    
        dp[i] = dp[i - 1] * 2
        }
        return dp[n];    
    }
}
