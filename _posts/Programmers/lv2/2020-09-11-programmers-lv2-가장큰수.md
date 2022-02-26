---
layout: single
title: "[lv2] 가장큰수"
comments: true
category: Programmers
---

## level2.  가장큰수

---

### Code

```java
package lv2;

import java.util.*;

public class programmers_level2_가장큰수 {

	public static String solution(int[] numbers) {
		String answer = "";
		String[] str = new String[numbers.length];
		for (int i = 0; i < numbers.length; i++) {
			str[i] = String.valueOf(numbers[i]);
		}

		Arrays.sort(str, new Comparator<String>() {
			@Override
			public int compare(String a, String b) {
				return (b + a).compareTo(a + b);
			}
		});
		
		System.out.println(Arrays.toString(str));
		
		if (str[0].equals("0"))
			return "0";
		for (String s : str)
			answer += s;

		return answer;
	}
	public static void main(String[] args) {
		int[] numbers = {6,10,2};
		System.out.println(solution(numbers));
	}
}


```

