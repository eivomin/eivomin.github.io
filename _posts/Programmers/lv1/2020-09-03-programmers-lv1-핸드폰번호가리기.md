---
layout: single
title: "[lv1] 핸드폰번호가리기"
comments: true
category: Programmers
---

## level1.  핸드폰번호가리기

---

### Code

```java
package lv1;

public class programmers_level1_핸드폰번호가리기 {
	class Solution {
	    public String solution(String phone_number) {
	        String answer = "";
	        int len = phone_number.length();
	        for(int i=0; i<len-4; i++){
	            answer += "*";
	        }
	        answer += phone_number.substring(len-4, len);
	        return answer;
	    }
	}
}

```

