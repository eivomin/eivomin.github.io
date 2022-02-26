---
layout: single
title: "[lv1] 행렬의덧셈"
comments: true
category: Programmers
---

## level1.  행렬의덧셈

---

### Code

```java
package lv1;

public class programmers_lv1_행렬의덧셈 {
	class Solution {
	    public int[][] solution(int[][] arr1, int[][] arr2) {
	        int[][] answer = new int[arr1.length][arr1[0].length];
	        for(int i=0; i<arr1.length; i++){
	            for(int j=0; j<arr1[0].length; j++){
	                answer[i][j] = arr1[i][j]+arr2[i][j];
	            }
	        }
	        return answer;
	    }
	}
}

```

