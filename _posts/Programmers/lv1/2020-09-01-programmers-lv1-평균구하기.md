---
layout: single
title: "[lv1] 평균구하기"
comments: true
category: Programmers
---

## level1.  평균구하기

---

### Code

```java
package lv1;

public class programmers_level1_평균구하기 {
	class Solution {
	    public double solution(int[] arr) {
	        double answer = 0;
	        int len = arr.length;
	        for(int tmp : arr){
	            answer += tmp;
	        }
	        return answer/len;
	    }
	}
}

```

