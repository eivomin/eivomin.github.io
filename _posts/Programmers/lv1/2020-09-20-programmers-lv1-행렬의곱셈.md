---
layout: single
title: "[lv1] 행렬의곱셈"
comments: true
category: Programmers
---

## level1.  행렬의곱셈

---

### Code

```java
package lv1;

import java.util.Arrays;

public class programmers_lv1_행렬의곱셈 {
	public static int[][] solution(int[][] arr1, int[][] arr2) {
		int a1h = arr1.length;
		int a1w = arr1[0].length;
		int a2h = arr2.length;
		int a2w = arr2[0].length;
		int[][] answer = new int[a1h][a2w];

		int temp = 0;
		for (int i = 0; i < a1h; i++) {
			for (int j = 0; j < a2w; j++) {
				for (int k = 0; k < a1w; k++) {
					temp += arr1[i][k] * arr2[k][j];
				}
				answer[i][j] = temp;
				temp = 0;
			}
		}

		for (int i = 0; i < a1h; i++) {
			for (int j = 0; j < a2w; j++) {
				System.out.print(answer[i][j] + " ");
			}
			System.out.println();
		}
		return answer;
	}

	public static void main(String[] args) {
		int[][] arr1 = { { 1, 4 }, { 3, 2 }, { 4, 1 } };
		int[][] arr2 = { { 3, 3 }, { 3, 3 } };

		System.out.println(Arrays.toString(solution(arr1, arr2)));
	}
}

```

