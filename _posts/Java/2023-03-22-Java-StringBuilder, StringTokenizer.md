---
layout: single
title: "[Java] Stringbuilder, StringTokenizer"
comments: true
category: Java
---

## Stringbuilder, StringTokenizer

---

### Stringbuilder

StringBuilder는 내부 버퍼(데이터를 저장하는 메모리)에 문자열을 저장해두고 그 안에서 추가, 수정, 삭제 작업을 하도록 설계되어 있다.
<br>

| 리턴타입      | 메소드(매개변수)                | 설명         |
|-----------|--------------------------|------------|
| StringBuilder | append(문자열)              | 문자열을 끝에 추가 |
| StringBuilder | insert(위치, 문자열)          | 문자열을 지정 위치에 추가           |
| StringBuilder | delete(시작위치, 끝 위치)       | 문자열 일부를 삭제           |
| StringBuilder | replace(시작위치, 끝 위치, 문자열) | 문자열 일부를 대체           |
| String    | toString()               | 완성된 문자열을 리턴           |
 
toString() 을 제외한 다른 메소드는 StringBuilder를 다시 리터하기 때문에 연이어서 다른 메소드를 호출할 수 있는 메소드 체이닝 패턴을 사용할 수 있다.
```java
package ch12.sec05;

public class StringBuilderExample {
    public static void main(String[] args) {
        String data  = new StringBuilder()
                .append("DEF")
                .insert(0, "ABC")
                .delete(3, 4)
                .toString();
        System.out.println(data);   // ABCEF
    }
}

```

### StringTokenizer
문자열이 구분자로 연결되어 있을 경우, 구분자를 기준으로 문자열을 분리하려면 String의 split() 메소드를 이용하거나 java.util의 패키지의 StringTokenizer 클래스를 이용할 수 있다.

```java
    String data = "홍길동$이수홍,박연수,김자바-최명호";
    String[] names = data.split("$|,|-")

    String data = "홍길동/이수홍/박연수";
    StringTokenizer st = new StringTokenizer(data, "/");
```
| 리턴타입    | 메소드(매개변수)       | 설명              |
|---------|-----------------|-----------------|
| int     | countTokens() 옴 | 분리할 수 있는 문자열의 총 수 |
| boolean | hasMoreTokens() | 남아 있는 문자열이 있는지 여부 |
| String  | nextToken()     | 문자열을 하나씩 가져     |

```java
package ch12.sec05;

import java.util.StringTokenizer;

public class StringTokenizerExample {
    public static void main(String[] args) {
        String data1 = "홍길동&이수홍,박연수";
        String[] arr = data1.split("&|,");
        for (String token : arr)
            System.out.println(token);
        System.out.println();

        String data2 = "홍길동/이수홍/박연수";
        StringTokenizer st = new StringTokenizer(data2, "/");
        while(st.hasMoreTokens()){
            String token = st.nextToken();
            System.out.println(token);
        }
    }
}

```

* 출처: 이것이 자바다