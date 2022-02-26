---
layout: single
title: "[lv1] 정수내림차순으로배치하기"
comments: true
category: Programmers
---

## level1.  정수내림차순으로배치하기

---

### Code

```java
package lv1;
import java.util.*;

public class programmers_level1_정수제곱근판별 {
	class Solution {
	    public long solution(long n) {
	        long answer = 0;
	        answer = ((long)Math.sqrt(n)*(long)Math.sqrt(n) == n) ? ((long)Math.sqrt(n)+1)*((long)Math.sqrt(n)+1) : -1;
	        return answer;
	    }
	}
}


```

