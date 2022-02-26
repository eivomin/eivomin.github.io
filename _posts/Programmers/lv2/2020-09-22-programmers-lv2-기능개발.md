---
layout: single
title: "[lv2] 기능개발"
comments: true
category: Programmers
---

## level2.  기능개발

---

### Code

```java
package lv2;

import java.util.*;

public class programmers_lv2_기능개발 { 

	public static int[] solution(int[] progresses, int[] speeds) {
		int len = speeds.length;
		int[] work = new int[len];

		for (int i = 0; i < len; i++) {
			for (int j = 1; j < 100; j++) {
				if (progresses[i] + speeds[i] * j >= 100) {
					work[i] = j;
					break;
				}
			}
		}

		Queue<Integer> queue = new LinkedList<>();

		int cnt = 1;    
		for (int i = 0; i < len - 1; i++) {
			if (work[i] < work[i + 1]) {
				queue.add(cnt);
				cnt = 1;
			} else if (work[i] == work[i + 1]) {
				cnt++;
			} else if (work[i] > work[i + 1]) {
				cnt++;
				work[i + 1] = work[i];
			}
			if(i == len-2)
				queue.add(cnt);
		}
		
		int qsize = queue.size();
		int[] answer = new int[qsize];

		for (int i = 0; i < qsize; i++)
			answer[i] = queue.poll();

		return answer;
	}

	public static void main(String[] args) {
		int[] progresses = {93, 30, 55};
		int[] speeds = {1, 30, 5};
		System.out.println(Arrays.toString(solution(progresses, speeds)));
	}
}

```

