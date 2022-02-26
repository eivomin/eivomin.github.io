---
layout: single
title: "[lv2] 쇠막대기"
comments: true
category: Programmers
---

## level2.  쇠막대기

---

### Code

```java
package lv2;

public class programmers_level2_쇠막대기 { 
	class Solution {
	    public int solution(String arrangement) {
	        int answer = 0; //결과 저장할 변수
	        int stick = 0; //누적 막대기의 갯수
	        
	        for(int i=0; i<arrangement.length(); i++){
	            if(arrangement.charAt(i)=='('){
	                stick++;
	            }
	            else if(arrangement.charAt(i)==')'){
	                stick--;
	                if(arrangement.charAt(i-1)=='('){
	                    answer += stick;
	                }
	                else
	                    answer++;
	            }
	        }
	        return answer;
	    }
	}
}


```

