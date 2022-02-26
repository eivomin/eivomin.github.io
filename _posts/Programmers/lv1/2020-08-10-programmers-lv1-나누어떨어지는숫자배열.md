---
layout: single
title: "[lv1] 나누어떨어지는숫자배열"
comments: true
category: Programmers
---

## level1.  나누어떨어지는숫자배열

---

### Code

```java
package lv1;
import java.util.*;
public class programmers_level1_나누어떨어지는숫자배열 {

	class Solution {
	    public int[] solution(int[] arr, int divisor) {
	        ArrayList<Integer> list = new ArrayList<>();
			for (int i = 0; i < arr.length; i++) {
				if (arr[i] % divisor == 0)
					list.add(arr[i]);
			}
			Collections.sort(list);
			int len = 1;
			int[] answer;
			if (list.size() == 0) {
				answer = new int[1];
				answer[0] = -1;
				return answer;
			} else {
				answer = new int[list.size()];
				for (int i = 0; i < list.size(); i++) {
					answer[i] = list.get(i);
				}
				return answer;

			}
	    }
	}
}


```

