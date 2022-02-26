---
layout: single
title: "[lv2] JadenCase문자열만들기"
comments: true
category: Programmers
---

## level2.  JadenCase문자열만들기

---

### Code

```java
package lv2;

import java.util.*;

public class programmers_lv2_JadenCase문자열만들기 {
	public static String solution(String s) {
		StringBuilder sb = new StringBuilder();
		
		String first = s.charAt(0)+"";
		sb.append(first.toUpperCase());
		
		for(int i=1; i<s.length(); i++) {
			String tmp = s.charAt(i)+"";
			if(tmp.equals(" ")) {
				sb.append(" ");
			}else if(s.charAt(i-1) == ' ') {
				sb.append(tmp.toUpperCase());
			}else {
				sb.append(tmp.toLowerCase());
			}
		}
		return sb.toString();
		
	}
	public static void main(String[] args) {
		System.out.println(solution("3people     unFollowed    me"));
	}
}

```

