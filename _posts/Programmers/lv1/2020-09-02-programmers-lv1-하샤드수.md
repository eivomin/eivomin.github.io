---
layout: single
title: "[lv1] 하샤드수"
comments: true
category: Programmers
---

## level1.  하샤드수

---

### Code

```java
package lv1;

public class programmers_level1_하샤드수 {
	class Solution {
	    public boolean solution(int x) {
	        int sum = 0;
	        int num = x;
	        while(num != 0){
	            sum += num%10;
	            num /= 10;
	        }
	        if(x % sum == 0)
	            return true;
	        else
	            return false;
	    }
	}
}


```

