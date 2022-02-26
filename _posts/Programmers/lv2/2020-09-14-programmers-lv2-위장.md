---
layout: single
title: "[lv2] 위장"
comments: true
category: Programmers
---

## level2.  위장

---

### Code

```java
package lv2;
import java.util.*;

public class programmers_level2_위장 {
	class Solution {
	    public int solution(String[][] clothes) {
	        int answer = 1;
	        HashMap<String, Integer> map = new HashMap<>();
	        for(int i=0; i<clothes.length; i++){
	            String key = clothes[i][1];
	            if(!map.containsKey(key)) {
	                map.put(key, 1);
	            } else {
	                map.put(key, map.get(key) + 1);
	            }
	        }
	        Iterator<Integer> it = map.values().iterator();
	        while(it.hasNext()) {
	            answer *= it.next().intValue()+1;
	        }
	        return answer-1;
	    }
	}
}


```

