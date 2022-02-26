---
layout: single
title: "[lv1] 모의고사"
comments: true
category: Programmers
---

## level1.  모의고사

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_level1_모의고사 {
	public static int[] solution(int[] answers) {
		int[] answer = new int[3];

		int len = answers.length;

		int[] fst_arr = { 1, 2, 3, 4, 5 };
		int[] snd_arr = { 2, 1, 2, 3, 2, 4, 2, 5 };
		int[] trd_arr = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

		int fst_cnt = 0;
		int snd_cnt = 0;
		int trd_cnt = 0;

		for (int i = 0; i < len; i++) {

			if (answers[i] == fst_arr[i % 5])
				fst_cnt++;
		}

		for (int i = 0; i < len; i++) {
			if (answers[i] == snd_arr[i % 8])
				snd_cnt++;
		}

		for (int i = 0; i < len; i++) {
			if (answers[i] == trd_arr[i % 10])
				trd_cnt++;
		}

		answer[0] = fst_cnt;
		answer[1] = snd_cnt;
		answer[2] = trd_cnt;
		
		int max = Math.max(fst_cnt, Math.max(snd_cnt, trd_cnt));
		int cnt = 0;
		List<Integer> idxList = new LinkedList<>();
		
		for(int i=0; i<3; i++) {
			if(max==answer[i]) {
				cnt++;
				idxList.add(i+1);
			}
		}
		int[] result = new int[cnt];
		
		if(cnt == 1) {
			result[0] = idxList.get(0);
		}else {
			Collections.sort(idxList);
			for(int i=0; i<cnt; i++) {
				result[i] = idxList.get(i);
			}
		}
		return result;
	}

	public static void main(String[] args) {
		int[] answers = {1,3,2,4,2};
		System.out.println(Arrays.toString(solution(answers)));
	}
}


```

