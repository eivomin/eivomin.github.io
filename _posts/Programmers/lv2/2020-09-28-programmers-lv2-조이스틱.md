---
layout: single
title: "[lv2] 조이스틱"
comments: true
category: Programmers
---

## level2.  조이스틱

---

### Code

```java
package lv2;

import java.util.Arrays;

public class programmers_lv2_조이스틱 {
	    static int solution(String name) {
	        int answer = 0;
	        // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
	        char[] arr = name.toCharArray();
	        int len = name.length();
	        char[] initArr = new char[len];
	        Arrays.fill(initArr, 'A');
	        
	        int sum = 0;
	        
	        for(int i=0; i<len; i++){
	        	int min = Integer.MAX_VALUE;
	            if(arr[i] == 'A') {
	            	min = 0; 
	            	System.out.println(i+"번째에 A");
	            }else if(arr[i] == 'Z')
	        		min = 2;
	            else
	            	min = Math.min(arr[i]-'A','Z'-arr[i]+2);
	            int right = arr[i]-'A';
	            int left = 'Z'-arr[i]+2;
	
	            if(min == left)
	            	sum++;
	            System.out.println("오른쪽 움직인 값 : "+right+" 왼쪽 움직인 값 : "+left);
	            sum += min;
	            System.out.println("min 값 : "+min+" sum 값 : "+sum);
	        }
	        return sum;
	    }
	public static void main(String[] args) {
		System.out.println(solution("JAZ"));
		
	}
}

```

