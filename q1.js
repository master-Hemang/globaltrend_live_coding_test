function longestCommonSubsequence(str1 , str2){
    const m=str1.length;
    const n=str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n+1).fill(0));
    for (let i=1;i<=m;i++){
        for (let j=1;j<=n;j++){
            if (str1[i-1]===str2[j-1]){
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    let i=m , j=n;
    const lcs =[];
    while (i>0 &&j>0){
        if (str1[i-1]===str2[j-1]){
            lcs.unshift(str1[i-1]);
            i--;
            j--;
        }
        else if (dp[i-1][j]>dp[i][j-1]){
            i--;
        }else{
            j--;
        }
    }
    return lcs.join('');
}

// Example Usage:
const str1="ABCDE";
const str2 = "ACE";
console.log(longestCommonSubsequence(str1,str2));