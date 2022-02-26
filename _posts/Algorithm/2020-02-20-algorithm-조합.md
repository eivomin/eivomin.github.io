---
layout: single
title: "[Algorithm] 조합 "
comments: true
category: Algorithm
---

### 조합

```java
import java.util.Arrays;

public class 조합 {
	static int[] arr = {1,2,3,4};
	static int[] sel = new int[2];
	public static void main(String[] args) {
		//4C2 구하기
		combination(0,0);
	}
	private static void combination(int idx, int s_idx) {
		if(s_idx==sel.length) {
			System.out.println(Arrays.toString(sel));
			return;
		}
		
		for(int i=idx; i<arr.length; i++) {
			sel[s_idx] = arr[i];
			combination(i+1, s_idx+1);
		}
	}
}
```

### Tip
중복조합은 combination(i, s_idx+1);
