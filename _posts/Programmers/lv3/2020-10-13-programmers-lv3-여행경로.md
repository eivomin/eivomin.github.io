---
layout: single
title: "[lv3] 여행경로"
comments: true
category: Programmers
---

## level3.  여행경로

---

### Code

```java
package lv3;

import java.util.*;

public class programmers_lv3_여행경로 {

	boolean[] visited; // 방문한지 안한지를 체크하는 visited배열
	ArrayList<String> answers;

	public String[] solution(String[][] tickets) {
		visited = new boolean[tickets.length];
		answers = new ArrayList<String>();
		int count = 0; // 몇개의 공항을 들렸는지 알려주는 카운트
		dfs(count, "ICN", "ICN", tickets);
		Collections.sort(answers); // 답들 중 가장 알파벳순이 빠른 배열들로 정렬
		String[] answer = answers.get(0).split(" "); // 가장 빠른 배열을 뽑아서 String형 배열로 만듦
		return answer;
	}

	public void dfs(int count, String present, String answer, String[][] ticktes) {
		if (count == ticktes.length) { // 모든 공항을 들렸다면
			answers.add(answer); // answers에 추가
			return;
		}
		for (int i = 0; i < ticktes.length; i++) {
			if (!visited[i] && ticktes[i][0].equals(present)) { // present와 같고 들리지 않은 공항을 찾고
				visited[i] = true; // 해당 공항을 들린걸로 만듦
				dfs(count + 1, ticktes[i][1], answer + " " + ticktes[i][1], ticktes); // 카운트 +1 도착 공항을 present로 넣어주고
																						// answer에 도착공항을 추가해준다.
				visited[i] = false;
			}
		}
		return;

	}
}


```

