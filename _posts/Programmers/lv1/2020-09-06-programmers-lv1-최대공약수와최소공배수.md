---
layout: single
title: "[lv1] 최대공약수와최소공배수"
comments: true
category: Programmers
---

## level1.  최대공약수와최소공배수

---

### Code

```java
package lv1;

import java.util.*;

class programmers_lv1_최대공약수와최소공배수 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        
        int[] answer = new int[2];
        
        int temp;
        if(m < n){
            temp = n;
            n = m;
            m = temp;
        }
        
        if(m % n == 0){
            answer[0] = n;
            answer[1] = m;
        }else{
            for(int i=1; i<n; i++){
                if(n%i == 0 && m%i == 0){
                    answer[0] = i;
                    answer[1] = (n*m)/i;
                }
            }
        }
        System.out.println(Arrays.toString(answer));
    }
}
```

