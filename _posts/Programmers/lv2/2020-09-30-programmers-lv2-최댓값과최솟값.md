---
layout: single
title: "[lv2] 최댓값과최솟값"
comments: true
category: Programmers
---

## level2.  최댓값과최솟값

---

### Code

```java
package lv2;
import java.util.*;

public class programmers_lv2_최댓값과최솟값 { 
	class Solution {
	    public String solution(String s) {
	        String answer = "";
	        String[] strArr = s.split(" ");
	        int[] arr = new int[strArr.length];
	        
	        for(int i=0; i<strArr.length; i++)
	            arr[i] = Integer.parseInt(strArr[i]);
	        
	        Arrays.sort(arr);
	        
	        return arr[0]+" "+arr[arr.length-1];
	    }
	}
}


```

