---
layout: single
title: "[lv1] 두 정수 사이의 합"
comments: true
category: Programmers
---

## level1.  두 정수 사이의 합

---

### Code

```java
package lv1;

public class programmers_level1_두정수사이의합 {
	class Solution {
	    public long solution(int a, int b) {
	        long answer = 0;
	        
	        if(a==b)
	            return a;
	        else if(a>b){
	            for(int i=b; i<=a; i++){
	                answer += i;
	            }
	        }
	        else{
	            for(int i=a; i<=b; i++){
	                answer += i;
	            }
	        }
	        return answer;
	    }
	}
}

```

