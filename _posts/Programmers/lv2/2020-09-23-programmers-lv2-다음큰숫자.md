---
layout: single
title: "[lv2] 다음큰숫자"
comments: true
category: Programmers
---

## level2.  다음큰숫자

---

### Code

```java
package lv2;

public class programmers_lv2_다음큰숫자 { 
	public static void main(String[] args) {		
		int num = 78;
		String a = Integer.toBinaryString(num);
		System.out.println(a);
		int cnt = 0;
		
		for(int i=0; i<a.length(); i++) {
			if(a.charAt(i)-'0' == 1)
				cnt++;
		}
		
		String tmp;
		
		while(true) {
			tmp = Integer.toBinaryString(++num);
			int ccnt = 0;
			for(int i=0; i<tmp.length(); i++) {
				if(tmp.charAt(i)-'0' == 1)
					ccnt++;
			}
			if(ccnt == cnt)
				break;
		}
		System.out.println(Integer.parseInt(tmp, 2));
		System.out.println(tmp);
	}
}

```

