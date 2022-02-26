---
layout: single
title: "[lv1] 콜라츠추측"
comments: true
category: Programmers
---

## level1.  콜라츠추측

---

### Code

```java
package lv1;

import java.util.Arrays;

public class programmers_level1_콜라츠추측 {
	class Solution {
	    public int solution(int num) {
	        int answer = 0;
	        long n = num;
	        while(n!=1){
	            if(n%2==0)
	                n /= 2;
	            else
	                n = (n*3+1);
	            answer++;
	        }
	        if(answer > 500)
	            return -1;
	        else if(n==1)
	            return answer;
	        else
	            return -1;
	    }
	}
}


```

