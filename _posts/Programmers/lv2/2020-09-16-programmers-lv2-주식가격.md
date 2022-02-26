---
layout: single
title: "[lv2] 주식가격"
comments: true
category: Programmers
---

## level2.  주식가격

---

### Code

```java
package lv2;
import java.util.*;

public class programmers_level2_주식가격 {

class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        int len = prices.length;
        
        for(int i=0; i<len-1; i++){
            int num = prices[i];
            int time = 0;
            for(int j=i+1; j<len; j++){
                if(num <= prices[j]){
                    time++;
                }else{
                    time++;
                    break;
                }
            }
            answer[i] = time;
        }
        return answer;
    }
}
}

```

