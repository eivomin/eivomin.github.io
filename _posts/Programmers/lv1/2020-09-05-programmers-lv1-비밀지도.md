---
layout: single
title: "[lv1] 비밀지도"
comments: true
category: Programmers
---

## level1.  비밀지도

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_lv1_비밀지도 {
	public static String[] solution(int n, int[] arr1, int[] arr2) {
		String[] answer = new String[n];
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < n; i++) {
			String tmp1 = Integer.toBinaryString(arr1[i]);
			String tmp2 = Integer.toBinaryString(arr2[i]);
			String tmp3 = "";
			
			if(tmp1.length() < n) {
				for(int k=0; k<n-tmp1.length(); k++) 
					tmp3 += "0";
				tmp3 += tmp1;
				tmp1 = tmp3;
			}
			tmp3 = "";
			if(tmp2.length() < n) {
				for(int k=0; k<n-tmp2.length(); k++) 
					tmp3 += "0";
				tmp3 += tmp2;
				tmp2 = tmp3;
			}
			
			for (int j = 0; j < n; j++) {
				if (tmp1.charAt(j) - '0' + tmp2.charAt(j) - '0' >= 1) {
					sb.append("#");
				} else
					sb.append(" ");
			}
			answer[i] = sb.toString();
			sb.delete(0, sb.length());
		}
		return answer;
	}

	public static void main(String[] args) {
		int n = 6;
		int[] arr1 = { 46, 33, 33, 22, 31, 50 };
		int[] arr2 = { 27, 56, 19, 14, 14, 10 };

		System.out.println(Arrays.toString(solution(n, arr1, arr2)));

	}
}

```

