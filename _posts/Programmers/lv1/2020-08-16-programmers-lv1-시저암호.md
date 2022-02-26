---
layout: single
title: "[lv1] 시저암호"
comments: true
category: Programmers
---

## level1.  시저암호

---

### Code

```java
package lv1;

public class programmers_level1_시저암호 {
	class Solution {
	    public String solution(String s, int n) {
	       String answer = "";
			int tmp;
			for (int i = 0; i < s.length(); i++) {
				tmp = 0;
				if (s.charAt(i) >= 65 && s.charAt(i) <= 90) {
					tmp =  s.charAt(i) + n;
					if(tmp>90) {
						tmp = (tmp-90)+64;
					}
					answer += (char)tmp;
				} else if (s.charAt(i) >= 97 && s.charAt(i) <= 122) {
					tmp =  s.charAt(i) + n;
					if(tmp>122) {
						tmp = (tmp-122)+96;
					}
					answer += (char)tmp;
				} else
					answer += " ";
			}
			return answer;
	    }
	}
}


```

