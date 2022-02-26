---
layout: single
title: "[lv2] 카펫"
comments: true
category: Programmers
---

## level2.  카펫

---

### Code

```java
package lv2;

public class programmers_lv2_카펫 { 
	class Solution {
	    public int[] solution(int brown, int yellow) {
	        int[] answer = new int[2];
	        int area = brown+yellow;
	        
	        for(int i=3; i<area; i++){ //세로
	            if(area % i == 0){
	                int tmp = area/i; //가로
	                if((tmp-2)*(i-2) == yellow){
	                    answer[0] = tmp;
	                    answer[1] = i;
	                    return answer;
	                }
	            }
	        }
	        return answer;
	    }
	}
}

```

