---
layout: single
title: "[lv1] 문자열내림차순으로배치하기"
comments: true
category: Programmers
---

## level1.  문자열내림차순으로배치하기

---

### Code

```java
package lv1;
import java.util.*;

public class programmers_level1_문자열내림차순으로배치하기 {
	class Solution {
	    public String solution(String s) {
	        String answer = "";
	        List<Character> list = new LinkedList<>();
	        int len = s.length();
	        
	        String[] arr = new String[len];
	        for(int i=0; i<len; i++)
	            arr[i] = Character.toString(s.charAt(i));
	        Arrays.sort(arr, Collections.reverseOrder());
	        
	        for(String tmp : arr)
	            answer += tmp;
	        
	        return answer;
	    }
	}
}


```

