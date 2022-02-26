---
layout: single
title: "[lv1] 가운데글자가져오기"
comments: true
category: Programmers
---

## level1.  가운데글자가져오기

---

### Code

```java
package level1;

public class programmers_level1_가운데글자가져오기 {
	class Solution {
	    public String solution(String s) {
	        String answer = "";
	        int len = s.length();
	        
	        if(len%2==1){
	            return Character.toString(s.charAt(len/2));
	        }else{
	            return s.substring(len/2-1, len/2+1);
	        }
	      
	    }
	}
}

```

