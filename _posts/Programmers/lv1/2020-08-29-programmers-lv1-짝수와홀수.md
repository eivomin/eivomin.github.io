---
layout: single
title: "[lv1] 짝수와홀수"
comments: true
category: Programmers
---

## level1.  짝수와홀수

---

### Code

```java
package lv1;

public class programmers_level1_짝수와홀수 {
	class Solution {
	    public String solution(int num) {
	        String answer = "";
	        answer += num%2 == 0 ? "Even" : "Odd";
	        return answer;
	    }
	}
}


```

