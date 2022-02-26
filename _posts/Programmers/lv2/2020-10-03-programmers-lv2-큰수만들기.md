---
layout: single
title: "[lv2] 큰수만들기"
comments: true
category: Programmers
---

## level2.  큰수만들기

---

### Code

```java
package lv2;

import java.util.*;

public class programmers_lv2_큰수만들기 {

	static int sel;
	static ArrayList<Integer> list;
	static int[] arr;
	static int len;
	static int max;
	public static String solution(String number, int k) {
		list = new ArrayList<>();
		len = number.length();
		arr = new int[len];

		for (int i = 0; i < len; i++)
			arr[i] = number.charAt(i) - '0';

		sel = len - k;
		max = Integer.MIN_VALUE;
		combination(0, 0);
		
		return max+"";
	}

	public static void combination(int sidx, int idx) {
		if (sidx == sel) {
			int sum = 0;
			for(int i=0; i<sel; i++) {
				sum += (int)Math.pow(10, sel-i-1)*list.get(i);
			}
			max = Math.max(max, sum);
			return;
		}

		for (int i = idx; i < arr.length; i++) {
			list.add(arr[i]);
			combination(sidx + 1, i + 1);
			list.remove(list.size() - 1);
		}
	}
	
	public static void main(String[] args) {
		System.out.println(solution("4177252841", 4));
	}
}

```

