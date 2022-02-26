---
layout: single
title: "[lv1] 문자열내p와y의개수"
comments: true
category: Programmers
---

## level1.  문자열내p와y의개수

---

### Code

```java
package lv1;

public class programmers_level1_문자열내p와y의개수 {
	class Solution {
	    boolean solution(String s) {
	        s = s.toUpperCase();
	        int pcnt = 0;
	        int ycnt = 0;
	        
	        for(int i=0; i<s.length(); i++){
	            if(s.charAt(i)=='P')
	                pcnt++;
	            else if(s.charAt(i)=='Y')
	                ycnt++;
	        }
	        if(pcnt == ycnt)
	            return true;
	        else
	            return false;
	    }
	}
}


```

