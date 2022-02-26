---
layout: single
title: "[lv1] 자연수뒤집어배열로만들기"
comments: true
category: Programmers
---

## level1.  자연수뒤집어배열로만들기

---

### Code

```java
package lv1;

import java.util.Arrays;

public class programmers_level1_자연수뒤집어배열로만들기 {

	class Solution {
	    public int[] solution(long n) {
	        String str = n+"";
	        int len = str.length();
	        int[] answer = new int[len];
	        
	        for(int i=0; i<len; i++){
	            answer[i] = str.charAt(len-i-1)-'0';
	        }
	        return answer;
	    }
	}
}


```

