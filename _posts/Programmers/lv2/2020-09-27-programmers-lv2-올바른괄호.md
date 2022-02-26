---
layout: single
title: "[lv2] 올바른괄호"
comments: true
category: Programmers
---

## level2.  올바른괄호

---

### Code

```java
package lv2;

import java.util.*;

public class programmers_lv2_올바른괄호 {

	class Solution {
	    boolean solution(String s) {
	        Stack<Character> stack = new Stack<>();
	        for(int i=0; i<s.length(); i++){
	            if(s.charAt(i) == '('){
	                stack.push(s.charAt(i));
	            }else{
	                if(stack.isEmpty())
	                    return false;
	                stack.pop();
	            }
	        }
	        if(stack.isEmpty())
	            return true;
	        return false;
	    }
	}
}


```

