---
layout: single
title: "[lv1] 수박수박수박수박수박수"
comments: true
category: Programmers
---

## level1.  수박수박수박수박수박수

---

### Code

```java
package lv1;

public class programmers_level1_수박수박수박수박수박수 {
	class Solution {
	    public String solution(int n) {
	        String answer = "";
	        for(int i=0; i<n/2; i++){
	                answer+="수박";
	        }
	        if(n%2==0){
	            return answer;    
	        }else{
	            answer += "수";
	        }
	        return answer;
	    }
	}
}


```

