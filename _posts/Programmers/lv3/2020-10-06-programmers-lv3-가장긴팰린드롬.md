---
layout: single
title: "[lv3] 가장긴팰린드롬"
comments: true
category: Programmers
---

## level3.  가장긴팰린드롬

---

### Code

```java
package lv3;

public class programmers_lv3_가장긴팰린드롬 {
	public int solution(String s) {
        int oddCount = 0;
        int evenCount = 0;
        if(s.length() == 1) {            //길이가 1이면 1반환
            return 1;
        }
        for(int i = 0; i < s.length()-1; i++) {
            if(i>0 && s.charAt(i-1) == s.charAt(i+1)) {  //홀 수
                int left = i-1;
                int right = i+1;
                int tempcount = 0;
                while(0<= left &&  right <= s.length()-1) {    //현재 값보다 왼쪽, 오른쪽 값이 같으면
                    if(s.charAt(left) == s.charAt(right)) {
                        tempcount++;
                        left -= 1;
                        right += 1;
                    }else {
                        break;
                    }
                }
                if(oddCount< tempcount) oddCount = tempcount;
            }
            if(s.charAt(i) == s.charAt(i+1)) {            //짝 수
                int left = i;
                int right = i+1;
                int tempcount = 0;
                while(0<= left &&  right <= s.length()-1) { //현재값과 다음값이 같다면.
                    if(s.charAt(left) == s.charAt(right)) {
                        tempcount++;
                        left -= 1;
                        right += 1;
                    }else {
                        break;
                    }
                }
                if(evenCount < tempcount) evenCount = tempcount;
            }
        }
        return oddCount < evenCount ? evenCount*2 : oddCount*2 +1; 
    }

}

```

