---
layout: single
title: "[lv1] 자릿수더하기"
comments: true
category: Programmers
---

## level1.  자릿수더하기

---

### Code

```java
package lv1;

public class programmers_level1_자릿수더하기 {

	public class Solution {
	    public int solution(int n) {
	        int answer = 0;
	        String str = n+"";
	        
	        for(int i=0; i<str.length(); i++){
	            answer += str.charAt(i)-'0';
	        }
	        return answer;
	    }
	}
}


```

