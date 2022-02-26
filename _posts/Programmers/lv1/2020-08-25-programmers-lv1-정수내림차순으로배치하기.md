---
layout: single
title: "[lv1] 정수내림차순으로배치하기"
comments: true
category: Programmers
---

## level1.  정수내림차순으로배치하기

---

### Code

```java
package lv1;
import java.util.*;

public class programmers_level1_정수내림차순으로배치하기 {

	class Solution {
	    public long solution(long n) {
	        String ans = "";
	        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
	        String str = n+"";
	        int len = str.length();
	        
	        for(int i=0; i<len; i++)
	            pq.add(str.charAt(i)-'0');
	        
	        while(!pq.isEmpty())
	            ans += (pq.poll()+"");
	    
	        return Long.valueOf(ans);
	    }
	}
}

```

