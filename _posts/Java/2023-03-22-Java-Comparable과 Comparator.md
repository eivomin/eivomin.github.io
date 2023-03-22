---
layout: single
title: "[Java] Comparable과 Comparator"
comments: true
category: Java
---

## Comparable과 Comparator

---

TreeSet에 저장되는 객체와 TreeMap에 저장되는 키 객체는 저장과 동시에 오름차순으로 정렬되는데, 
어떤 객체든 정렬될 수 있는 것은 아니고 객체가 Comparable 인터페이스를 구현하고 있어야 가능하다. 
Integer, Double, String 타입은 모두 Comparable을 구현하고 있기 때문에 상관 없지만, 
사용자 정의 객체를 저장할 때에는 반드시 Comparable을 구현하고 있어야 한다.
Comparable 인터페이스에는 compareTo() 메소드가 정의되어 있다.

| 리턴 타입 | 메소드             | 설명                                              |
|-------|-----------------|-------------------------------------------------|
| int   | compareTo(T o)  | 주어진 객체와 같으면 0을 리턴<br>주어진 객체보다 적으면 음수를 리턴<br>주어진 객체보다 크면 양수를 리턴 |

```java
package ch15.sec05.exam03;

public class Person implements Comparable<Person> {
    public String name;
    public int age;

    public Person(String name, int age){
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Person o){
        if(age<o.age) return -1;
        else if(age == o.age) return 0;
        else return 1;
    }
}
```
```java
package ch15.sec05.exam03;

import java.util.*;

public class ComparableExample {
    public static void main(String[] args) {
        //TreeSet 컬렉션 생성
        TreeSet<Person> treeSet = new TreeSet<Person>();

        //객체 저장
        treeSet.add(new Person("홍길동", 45));
        treeSet.add(new Person("감자바", 25));
        treeSet.add(new Person("박지원", 31));

        //객체를 하나씩 가져오기
        for(Person person : treeSet){
            System.out.println(person.name + ":" +person.age);
        }

    }
}
```

비교 기능이 있는 Comparable 구현 객체를 TreeSet에 저장하거나 TreeMap의 키로 저장하는 것이 원칙이지만, 
비교 기능이 없는 Comparable 비구현 객체를 저장하고 싶다면 방법은 없진 않다. TreeSet과 TreeMap을 생성할 때 비교자(Comparator)를 다음과 같이 제공하면 된다.

```java
    TreeSet<E> treeSet = new TreeSet<E>(new ComparatorImpl());
    TreeSet<E> treeMap = new TreeMap<K,V>(new ComparatorImpl());
```

비교자는 Comparator 인터페이스를 구현한 객체를 말하는데, Comparator 인터페이스에는 compare() 메소드가 정의되어 있다. 
비교자는 이 메소드를 재정의해서 비교 결과를 정수 값으로 리턴하면 된다.

| 리턴 타입 | 메소드                 | 설명                                                                             |
|-------|---------------------|--------------------------------------------------------------------------------|
| int   | compare(T o1, T o2) | o1과 o2가 동등하다면 0을 리턴<br>o1이 o2보다 앞에 오게 하려면 음수를 리턴 <br>o1이 o2보다 뒤에 오게 하려면 양수를 리턴 |

```java
package ch15.sec05.exam04;

public class Fruit {
    public String name;
    public int price;

    public Fruit(String name, int price){
        this.name = name;
        this.price = price;
    }
}

```
```java
package ch15.sec05.exam04;

import java.util.*;
public class FruitComparator implements Comparator<Fruit>{
    @Override
    public int compare(Fruit o1, Fruit o2){
        if(o1.price<o2.price) return -1;
        else if(o1.price == o2.price) return 0;
        else return 1;
    }
}

```
```java
package ch15.sec05.exam04;

import java.util.*;
public class ComparatorExample {
    public static void main(String[] args) {
        //비교자를 제공한 TreeSet 컬렉션 생성
        TreeSet<Fruit> treeSet = new TreeSet<Fruit>(new FruitComparator());

        //객체 저장
        treeSet.add(new Fruit("포도", 3000));
        treeSet.add(new Fruit("수박", 10000));
        treeSet.add(new Fruit("딸기", 6000));

        //객체를 하나씩 가져오기
        for(Fruit fruit : treeSet){
            System.out.println(fruit.name + ":"+fruit.price);
        }
    }
}

```

* 출처: 이것이 자바다