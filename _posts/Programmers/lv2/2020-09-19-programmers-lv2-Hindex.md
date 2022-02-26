---
layout: single
title: "[lv2] Hindex"
comments: true
category: Programmers
---

## level2.  Hindex

---

### Code

```java
package lv2;
import java.util.Arrays;

public class programmers_level2_Hindex {
		class Solution {
	    public int solution(int[] citations) {
	       int total = 0;
	        Arrays.sort(citations);
	       int result = 0;
	        for(int i=0; i < citations.length; i++)
	        {
	            int smaller = Math.min(citations[i], citations.length-i);
	            result = Math.max(result, smaller);
	        }
	        
	        return result;
	    }
	}
}

```

