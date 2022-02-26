---
layout: single
title: "[lv2] 숫자의표현"
comments: true
category: Programmers
---

## level2.  숫자의표현

---

### Code

```java
package lv2;

public class programmers_lv2_숫자의표현 {
	class Solution {
	    public int solution(int n) {
	        int answer = 1;
	        
	        for(int i=n/2+1; i>=1; i--){
	            int start = i;
	            int tmp = 0;
	            while(tmp < n){
	                tmp += start;
	                start--;
	            }
	            if(tmp == n)
	                answer++;
	        }
	        return answer;
	    }
	}
}


```

