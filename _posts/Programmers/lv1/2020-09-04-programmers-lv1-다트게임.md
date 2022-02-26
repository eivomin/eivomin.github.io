---
layout: single
title: "[lv1] 다트게임"
comments: true
category: Programmers
---

## level1.  다트게임

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_lv1_다트게임 {
// 10을 처리하는게 어려웠던 문제
	class Solution {
	    public int solution(String dartResult) {
	  			StringBuilder sb = new StringBuilder();
			int[] arr = new int[3];
			Arrays.fill(arr, 1);

			ArrayList<String> list = new ArrayList<>();

			sb.append(dartResult.charAt(0) + "");

			for (int i = 1; i < dartResult.length(); i++) {
				char c = dartResult.charAt(i);
				if (!Character.isDigit(c)) {
					sb.append(c + "");
				} else if(dartResult.charAt(0) == '1' && dartResult.charAt(1) == '0' && i == 1){
					sb.append(c+"");
					continue;
				}
				else{
					list.add(sb.toString());
					sb.delete(0, sb.length());
					sb.append(c);
					if (c == '1' && dartResult.charAt(i + 1) == '0') {
						sb.append('0' + "");
						i++;
					}
				}

				if (i == dartResult.length() - 1)
					list.add(sb.toString());
			}

			for (int k = 0; k < list.size(); k++) {
				String tmp = list.get(k);
//				System.out.println(tmp);
				int first = (tmp.charAt(0) - '0');
				int pow = 1;

				for (int j = 1; j < tmp.length(); j++) {
					char ch = tmp.charAt(j);
					if (first == 1 && ch == '0' && j == 1) {
						first = 10;
					}
					switch (ch) {
					case 'S':
						pow = (int) Math.pow(first, 1);
						arr[k] *= pow;
						break;
					case 'D':
						pow = (int) Math.pow(first, 2);
						arr[k] *= pow;
						break;
					case 'T':
						pow = (int) Math.pow(first, 3);
						arr[k] *= pow;
						break;
					case '*':
						arr[k] *= 2;
						if (k != 0)
							arr[k - 1] *= 2;
						break;
					case '#':
						arr[k] *= (-1);
						break;
					}
				}
			}

			return arr[0] + arr[1] + arr[2];

	    }
	}
}

```

