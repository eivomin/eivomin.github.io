---
layout: single
title: "[Algorithm] 순열 "
comments: true
category: Algorithm
---

### 순열

```java
import java.util.Arrays;

public class 순열 {
	static int[] arr = {1,2,3};
	static int[] res = new int[3];
	static boolean[] visited = new boolean[3];
	
	public static void main(String[] args) {
		perm(0);
	}

	private static void perm(int idx) {
		if(idx==arr.length) {
			//출력
			System.out.println(Arrays.toString(res));
			return;
		}
		
		for(int i=0; i<arr.length; i++) {
			if(!visited[i]) {
				visited[i] = true;
				res[idx] = arr[i];
				perm(idx+1);
				visited[i] = false;
			}
		}
	}
	
}
```

### 순열 코드에서 visited 체크 안하면 중복순열
활용해서 조합, 중복조합도 짜보자!
