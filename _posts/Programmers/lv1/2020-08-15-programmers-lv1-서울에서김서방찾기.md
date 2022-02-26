---
layout: single
title: "[lv1] 서울에서김서방찾기"
comments: true
category: Programmers
---

## level1.  서울에서김서방찾기

---

### Code

```java
package lv1;

public class programmers_level1_서울에서김서방찾기 {
	class Solution {
	    public String solution(String[] seoul) {
	        StringBuilder sb = new StringBuilder();
	        sb.append("김서방은 ");
	        for(int i=0; i<seoul.length; i++){
	            if(seoul[i].equals("Kim")){
	                sb.append(i);
	                break;
	            }
	        }
	        sb.append("에 있다");
	        return sb.toString();
	    }
	}
}


```

