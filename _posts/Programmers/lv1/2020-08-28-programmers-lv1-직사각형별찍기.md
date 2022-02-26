---
layout: single
title: "[lv1] 직사각형별찍기"
comments: true
category: Programmers
---

## level1.  직사각형별찍기

---

### Code

```java
package lv1;
import java.util.Scanner;

public class programmers_level1_직사각형별찍기 {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        String str = "1234";

        for(int i=0; i<b; i++){
            for(int j=0; j<a; j++){
                System.out.print("*");                
            }
            System.out.println();
        }
    }

}

```

