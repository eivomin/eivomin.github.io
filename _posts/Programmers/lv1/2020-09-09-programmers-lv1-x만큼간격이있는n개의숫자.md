---
layout: single
title: "[lv1] x만큼간격이있는n개의숫자"
comments: true
category: Programmers
---

## level1.  x만큼간격이있는n개의숫자

---

### Code

```java
package lv1;

public class programmers_lv1_x만큼간격이있는n개의숫자 {
	class Solution {
	    public long[] solution(int x, int n) {
	      long[] answer = new long[n];
	      for(int i=0;i<n;i++){
	          answer[i] = (Long.valueOf(x) * (i+1)); 
	      }
	      return answer;
	    }
	}
}

```

