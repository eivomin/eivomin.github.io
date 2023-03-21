---
layout: single
title: "[Java] String 문자열 관련 Method"
comments: true
category: Java
---

## String 문자열 관련 Method

---

### replace(), replaceAll(), replaceFirst()
문자열을 다른 문자열로 치환할 때 사용.
치환 메소드이긴 한데 주로 문자열에서 특정 문자를 삭제할 때 유용하게 사용한다.
* replace(CharSequence target, CharSequence replacement) : 모든 target replacement로 치환

```java
    String str = "a,b,c,d,e";
    System.out.println(str.replace(",", " ")); // a b c d e
    System.out.println(str.replace(",", "")); // abcde
```
* replaceAll(String regex, String replacement) : replace()와 비슷하나, 첫번째 인자로 정규식을 넣는다.
* replaceFirst(String target, String replacement) : 첫번째 발견되는 target만 치환한다.
```java
String str = "a,b,c,d,e";
        System.out.println(str.replaceFirst(",", " ")); // a b,c,d,e
        System.out.println(str.replaceFirst(",", "")); // ab,c,d,e
```

### Substring()
| 메소드                                     | 설명                             |
|-----------------------------------------|--------------------------------|
| substring(int beginIndex)               | beginIndex에서 끝까지 잘라내기          |
| substring(int beginIndex, int endIndex) | beginIndex에서 endIndex 앞까지 잘라내기 |
```java
    String ssn = "880815-1234567";
    String firstNum = ssn.substring(0, 6); // 880815
    String secondNum = ssn.substring(7); // 1234567
 ```

### indexOf()
문자열에서 특정 문자열의 위치를 찾고자 할 때 사용. 주어진 문자열이 시작되는 인덱스를 리턴한다.
만약 주어진 문자열이 포함되어 있지 않으면 -1을 리턴함.
```java
    String subject = "자바 프로그래밍";
    int index = subject.indexOf("프로그래밍"); // 3
```

### contains()
주어진 문자열이 단순히 포함되어 있는지만 조사하고 싶다면 사용. 원하는 문자열이 포함되어 있으면 true 리턴, 그렇지 않으면 false 리턴
```java
    Boolean result = subject.contains("프로그래밍");
```

### split()
파라미터로 들어오는 문자열을 기준으로 문자열을 쪼갠다. String[]을 리턴함.
```java
    String str = "abcd#efg";
    String[] splited = str.split("#"); // splited[0]: abcd, splited[1]: efg

    String str2 = "aaa bbb ccc";
    String[] splited2 = str.split(" "); // splited2[0]: aaa, splited2[1]: bbb, splited2[2]: ccc
```

* 출처: 이것이 자바다, 98page