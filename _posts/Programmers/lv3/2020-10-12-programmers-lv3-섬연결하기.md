---
layout: single
title: "[lv3] 섬연결하기"
comments: true
category: Programmers
---

## level3.  섬연결하기

---

### Code

```java
package lv3;

import java.util.*;

public class programmers_lv3_섬연결하기 {

	class Solution {
		int[] findParent;		// 부모와 자식의 정보가 담긴 배열

		public int find(int child) {		// 부모 찾기
			if (findParent[child] == child)
				return child;
			else
				return findParent[child] = find(findParent[child]);
		}

		public int solution(int n, int[][] costs) {
			Arrays.sort(costs, (a, b) -> a[2] - b[2]);		// 가중치 기준으로 오름차순 정렬

			findParent = new int[n];		// 초기배열에서 부모는 자기 자신
			for (int i = 0; i < n; i++)
				findParent[i] = i;

			int answer = 0;
			for (int i = 0; i < costs.length; i++) {
				int firstIsland = find(costs[i][0]);
				int secondIsland = find(costs[i][1]);
				if (firstIsland != secondIsland) {		// 부모가 같지 않다면 연결이 안된 최솟값이므로
					findParent[secondIsland] = firstIsland;		//연결
					answer += costs[i][2];
				}
			}
			return answer;
		}
	}
}

```

