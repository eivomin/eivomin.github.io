---
layout: single
title: "[Algorithm] 중복순열 "
comments: true
category: Algorithm
---

### 중복순열

```java
import java.util.Arrays;

public class 순열 {
	static int[] arr = {1,2,3};
	static int[] res = new int[3];
	
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
				res[idx] = arr[i];
				perm(idx+1);
			}
		}
	}

```
