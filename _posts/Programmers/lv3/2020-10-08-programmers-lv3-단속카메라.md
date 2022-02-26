---
layout: single
title: "[lv3] 단속카메라"
comments: true
category: Programmers
---

## level3.  단속카메라

---

### Code

```java
package lv3;
import java.util.*;

public class programmers_lv3_단속카메라 {

	class Solution {
	    public int solution(int[][] routes) {
	        int answer = 0;
	        //끝나는 시간으로 정렬
			Arrays.sort(routes, (a,b) -> a[1]-b[1]);
			
			int min = Integer.MIN_VALUE;
			
			for(int[] route : routes) {
				if(min < route[0]) {
					min = route[1];
					++answer;
				}
			}
	        return answer;
	    }
	}
}
/*	
Arrays.sort(routes, new Comparator<int []>() {

    @Override
    public int compare(int[] o1, int[] o2) {
        return Integer.compare(o1[1], o2[1]);
    }
});
	*/

```

