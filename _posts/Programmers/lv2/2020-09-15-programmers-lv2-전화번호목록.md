---
layout: single
title: "[lv2] 전화번호목록"
comments: true
category: Programmers
---

## level2.  전화번호목록

---

### Code

```java
package lv2;

public class programmers_level2_전화번호목록 {

	class Solution {
	    public boolean solution(String[] phone_book) {
	        boolean answer = true;
	        for(int i=0; i<phone_book.length-1; i++){
	            for(int j=i+1; j<phone_book.length; j++){
	                if(phone_book[i].startsWith(phone_book[j]))
	                    return false;
	                if(phone_book[j].startsWith(phone_book[i]))
	                    return false;
	            }
	        }
	        return true;
	    }
	}
	
}


```

