---
layout: single
title: "[lv1] 이상한문자만들기"
comments: true
category: Programmers
---

## level1.  이상한문자만들기

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_level1_이상한문자만들기 {
	class Solution {
	    public String solution(String s) {
	        s += " ";
			StringBuilder sb = new StringBuilder();
			Queue<String> queue = new LinkedList<>();

			for (int i = 0; i < s.length(); i++) {
				if (s.charAt(i) == ' ') {
					queue.add(sb.toString());
					sb.delete(0, sb.length());
				} else {
					sb.append(s.charAt(i));
				}
			}

			while (!queue.isEmpty()) {
				String temp = queue.poll();
				for (int i = 0; i < temp.length(); i++) {
					if (i % 2 == 0) {
						sb.append(Character.toString(temp.charAt(i)).toUpperCase());
					} else {
						sb.append(Character.toString(temp.charAt(i)).toLowerCase());
					}
				}
				sb.append(" ");
			}
	        
	        return sb.toString().substring(0, sb.length()-1);
		}
	}
}


```

