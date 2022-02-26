---
layout: single
title: "[lv1] 제일작은수제거하기"
comments: true
category: Programmers
---

## level1.  제일작은수제거하기

---

### Code

```java
package lv1;
import java.util.*;
public class programmers_level1_제일작은수제거하기 {

	class Solution {
	    public int[] solution(int[] arr) {
	        int len = arr.length;
	        if(len == 1){
	            arr[0] = -1;
	            return arr;
	        }else{
	        int[] answer = new int[len-1];
	        int min = Integer.MAX_VALUE;
	        
	        
	        for(int i=0; i<len; i++){
	            min = Math.min(min, arr[i]);    
	        }
	        
	        int idx = 0;
	        
	        for(int i=0; i<len; i++){
	            if(min == arr[i]){
	                idx = i;
	                break;
	            }
	        }
	        
	        List<Integer> list = new LinkedList<>();
	        for(int i=0; i<len; i++){
	            if(i != idx){
	                list.add(arr[i]);
	            }
	        }
	        
	        for(int i=0; i<len-1; i++)
	            answer[i] = list.get(i);
	          
	        return answer;
	        }
	    }
	}
}

```

