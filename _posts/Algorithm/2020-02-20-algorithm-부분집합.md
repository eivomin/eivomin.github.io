---
layout: single
title: "[Algorithm] 부분집합 "
comments: true
category: Algorithm
---

### 부분집합

```java

public class 부분집합 {
	static int[] arr = {1,2,3,4};
	static int[] res = new int[4];
	
	public static void main(String[] args) {
		powerset(0);
	}

	private static void powerset(int idx) {
		
		if(idx==res.length) {
			for(int i=0; i<res.length; i++) {
				if(res[i]!=0) {
					System.out.print(res[i]+" ");
				}
			}
			System.out.println();
			return;
		}
		
		res[idx] = arr[idx];
		powerset(idx+1);
		res[idx] = 0;
		powerset(idx+1);
	}
}

```

### Tip
넣 갈 빼 

