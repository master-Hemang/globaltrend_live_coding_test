function knapsack (values,weights,capacity){
    const n=values.length;
    const dp=Array(n+1).fill(null).map(()=>
    Array(capacity+1).fill(0));
    for (let i=1;i<=n;i++){
        for (let w=1;w<=capacity;w++){
            if(weights[i-1]<=w){
                dp[i][w]=Math.max(dp[i-1][w],dp[i-1][w-weights[i-1]]);
            }else{
                dp[i][w]=dp[i-1][w];
            }
        }
    }
    let result =dp[n][capacity];
    let w=capacity;
    const itemsIncluded=[];
    for (let i=n;i>0 && result>0;i--){
        if (result!==dp[i-1][w]){
            itemsIncluded.push(i-1);
            result -=values[i-1];
            w-=weights[i-1];
        }
    }
    return {
        maxValue:dp[n][capacity],
        itemsIncluded:itemsIncluded.reverse()
    };
}
const weights = [1, 2, 3];
const values = [10, 15, 40];
const capacity = 6 ;
const result =knapsack(values,weights,capacity);

console.log('Max Value:',result.maxValue);
console.log('Items Included :',result.itemsIncluded);