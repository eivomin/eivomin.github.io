---
layout: single
title: "[Java] switch문 Expressions"
comments: true
category: Java
---

## switch문 Expressions

---

#### Java 12 이후부터 switch문에서 Expressions(표현식) 사용가능
break 문 없애는 대신에 화살표, 중괄호 사용

```java
package ch04.sec03;

public class SwitchExpressionsExample {
    public static void main(String[] args) {
        char grade = 'B';

        switch (grade){
            case 'A', 'a'->{
                System.out.println("우수 회원입니다.");
            }
            case 'B', 'b'->{
                System.out.println("일반 회원입니다.");
            }
            default -> {
                System.out.println("손님입니다.");
            }
        }

        switch(grade){
            case 'A', 'a'-> System.out.println("우수 회원입니다.");
            case 'B', 'b'-> System.out.println("일반 회원입니다.");
            default -> System.out.println("손님입니다.");
        }
    }
}

```

#### 스위치된 값을 변수에 바로 대입도 가능
```java
package ch04.sec03;

public class SwitchValueExample {
    public static void main(String[] args) {
        String grade = "B";

        //Java 11 이전 문법
        int score1 = 0;
        switch(grade){
            case "A":
                score1 = 100;
                break;
            case "B":
                int result = 100-20;
                score1 = result;
                break;
            default:
                score1 = 60;
        }
        System.out.println("score1: "+score1);

        //Java 12부터 가능
        int score2 = switch(grade){
            case "A" -> 100;
            case "B" -> {
                int result = 100-20;
                //Java 13부터 가능
                yield result;
            }
            default -> 60;
        };

        System.out.println("score2: "+score2);

    }
}


```

* 출처: 이것이 자바다, 122page