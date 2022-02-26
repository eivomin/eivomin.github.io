---
layout: single
title: "[lv1] K번째수"
comments: true
category: Programmers
---

## level1.  K번째수

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_lv1_K번째수 {

	class Solution {
	    public int[] solution(int[] array, int[][] commands) {
	        int[] answer = new int[commands.length];

			for (int i = 0; i < commands.length; i++) {
				int m = commands[i][0];
				int n = commands[i][1];
				int k = commands[i][2];
				
				List<Integer> list = new LinkedList<>();
				for (int t = m; t <= n; t++) {
					list.add(array[t - 1]);
				}

				Collections.sort(list);
				answer[i] = list.get(k - 1);
			}
	        return answer;
	    }
	}
}


```

