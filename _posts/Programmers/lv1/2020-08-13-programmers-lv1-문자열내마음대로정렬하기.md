---
layout: single
title: "[lv1] 문자열내마음대로정렬하기"
comments: true
category: Programmers
---

## level1.  문자열내마음대로정렬하기

---

### Code

```java
package lv1;
import java.util.*;

class Pair implements Comparable<Pair>{
	int idx;
	int value;
	Pair(int idx, int value){
		this.idx = idx;
		this.value = value;
	}
	
	@Override
	public int compareTo(Pair o) {
		return value-o.value;
	}
}

public class programmers_level1_문자열내마음대로정렬하기 {
	
	public static String[] solution(String[] strings, int n) {
		int len = strings.length;
		Arrays.sort(strings);
		String[] answer = new String[len];
		ArrayList<Pair> list = new ArrayList<>();
		
		for (int i = 0; i < len; i++) {
			list.add(new Pair(i, strings[i].charAt(n)));
		}
		
		Collections.sort(list);
		for(int i=0; i<list.size(); i++) {
			answer[i] = strings[list.get(i).idx];
		}
		return answer;
	}

	public static void main(String[] args) {
		String[] strings = {"abce", "abcd", "cdx"};
		System.out.println(Arrays.toString(solution(strings,2)));
	}
}



```

