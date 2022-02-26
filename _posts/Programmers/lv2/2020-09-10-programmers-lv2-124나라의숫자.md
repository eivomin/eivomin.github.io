---
layout: single
title: "[lv2] 124나라의숫자"
comments: true
category: Programmers
---

## level2.  124나라의숫자

---

### Code

```java
package lv2;

public class programmers_level2_124나라의숫자 {
		public String solution(int n) {
		      String answer = "";
		      int quotient = n;
		      int remainder = -1;

		        while(quotient!=0){
		            remainder = quotient % 3;
		            quotient = quotient/3;
		            
		            if(remainder == 0 ){ //나누어 떨어지면 몫을 1빼주고 4를 더함
		                answer = "4"+answer;
		                quotient--;
		            }
		            else if(remainder == 1){
		                answer = "1"+answer;
		            }
		            else if(remainder == 2){
		                answer = "2"+answer;
		            }
		        }
		        return answer;
		       
		    }
}


```

