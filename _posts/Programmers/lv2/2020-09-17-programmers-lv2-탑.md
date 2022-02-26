---
layout: single
title: "[lv2] 탑"
comments: true
category: Programmers
---

## level2.  탑

---

### Code

```java
package lv2;

import java.util.Arrays;
import java.util.Stack;

public class programmers_level2_탑 {
	public static void main(String[] args) {
		int[] heights = {1,5,3,6,7,6,5};
		
		System.out.println(Arrays.toString(solution(heights)));
	}
	public static int[] solution(int[] heights) {
		 // 6,9,5,7,4 // 1,2,3,4,5
        Stack<Integer> stack = new Stack<>();
        int[] answer = new int[heights.length];
        for(int i:heights){
            stack.push(i);
        }
        
        while(!stack.isEmpty()){
            int temp = stack.pop();
            int len = stack.size();
            for(int i=len-1; i>=0; i--){
                if(temp<heights[i]){
                    answer[len] = i+1;
                    break;
                }
            }
            
        }
        
        return answer;
    }
}

```

