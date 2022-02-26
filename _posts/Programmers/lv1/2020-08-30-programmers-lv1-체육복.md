---
layout: single
title: "[lv1] 체육복"
comments: true
category: Programmers
---

## level1.  체육복

---

### Code

```java
package lv1;

import java.util.*;

public class programmers_level1_체육복 {
	class Solution {
	    public int solution(int n, int[] lost, int[] reserve) {
	        int answer = 0;
	        int[] cnt = new int[n+1];
	        for(int i=1; i<=n; i++)
	            cnt[i] = 1;

	        for(int l: lost)
	            cnt[l]--;
	        for(int r: reserve)
	            cnt[r]++;
	        
	        for(int i=1; i<=n; i++){
	            if(cnt[i]==0){
	                if(i+1<=n && cnt[i+1]==2){
	                    cnt[i+1]--;
	                    cnt[i]++;
	                }else if(i-1>=1 && cnt[i-1]==2){
	                    cnt[i-1]--;
	                    cnt[i]++;
	                }
	            }
	        }        
	        
	        for(int i=1; i<=n; i++)
	            if(cnt[i]>=1)
	                answer++;
	        return answer;
	    }
	}
}

```

