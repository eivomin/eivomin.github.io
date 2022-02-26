---
layout: single
title: "[lv3] 멀리뛰기"
comments: true
category: Programmers
---

## level3.  멀리뛰기

---

### Code

```java
package lv3;

public class programmers_lv3_멀리뛰기 {
	class Solution {
	    public long solution(int n) {
	        long answer = 0;
	        long[] dp = new long[2001]; // 메모리 때문에 n+1로 하면 안된다..
	        dp[1] = 1;
	        dp[2] = 2;
	        
	        for(int i=3; i<=n; i++){
	            dp[i] = (dp[i-1]+dp[i-2])%1234567;
	        }
	        return dp[n];
	    }
	}
}


```

