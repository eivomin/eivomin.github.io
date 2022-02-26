---
layout: single
title: "[lv1] 문자열다루기기본"
comments: true
category: Programmers
---

## level1.  문자열다루기기본

---

### Code

```java
package lv1;

public class programmers_level1_문자열다루기기본 {
	class Solution {
	    public boolean solution(String s) {
	        int len = s.length();
	        System.out.printf("%d", 1);
	        if(len == 4 || len == 6){
	            for(char c : s.toCharArray()){
	                if(!Character.isDigit(c))
	                    return false;
	            }
	            return true;
	        }else
	            return false;
	        
	    }
	}
}


```

