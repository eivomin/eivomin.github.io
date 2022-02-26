---
layout: single
title: "[lv2] 구명보트"
comments: true
category: Programmers
---

## level2.  구명보트

---

### Code

```java
package lv2;
import java.util.*;

public class programmers_lv2_구명보트 {
	class Solution {
	    public int solution(int[] people, int limit) {
	        int answer = 0;
	        int len = people.length;
	        Arrays.sort(people);
	        
	        int i=0;
	        for(int j=len-1; j>=i; j--){
	            if(people[j]+people[i] > limit){
	                answer++;
	            }else{
	                answer++;
	                i++;
	            }
	        }
	        return answer;
	    }
	}
}

```

