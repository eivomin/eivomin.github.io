---
layout: single
title: "[lv1] 완주하지못한선수"
comments: true
category: Programmers
---

## level1.  완주하지못한선수

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_level1_완주하지못한선수 {
	public static String solution(String[] participant, String[] completion) {
		HashSet<String> hashSet = new HashSet<>();
		for (String s : participant)
			hashSet.add(s);

		Iterator<String> it = hashSet.iterator();
		ArrayList<String> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}

		it = list.iterator();
		while (it.hasNext()) {
			String s = it.next();

			for (int i = 0; i < completion.length; i++) {
				if (s.equals(completion[i]))
					it.remove();
			}
		}

		return list.get(0);
	}

	public static void main(String[] args) {
		String[] participant = { "mislav", "stanko", "mislav", "ana"};
		String[] completion = { "stanko","ana", "mislav"};
		System.out.println(solution(participant, completion));
	}
}


```

