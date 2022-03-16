---
layout: single
title: "[Java] Iterator와 ListIterator의 차이"
comments: true
category: Java
---

## Iterator와 ListIterator의 차이

---

ListIterator
 * ArrayList나 LinkedList와 같이 List인터페이스를 구현한 컬렉션에서만 사용
 * Iterator는 단방향으로만 이동할 수 있는 데 반해 ListIterator는 양방향으로의 이동이 가능


 * list.listIterator(list.size());
   - list.size()위치에서부터 시작


 * boolean hasNext()
   - Iterator를 앞방향으로 진행하며 객체를 확인
   - iteration이 객체(elements)를 더 갖고 있으면 true 그외 false

 
 * boolean hasPrevious()
   - Iterator가 반대방향으로 진행하며 객체를 확인
   - iteration이 객체(elements)를 더 갖고 있으면 true 그외 false

 
 * Object next()
   - iteration에서 다음 객체를 리턴
   
 
* Object previous()
   - iteration에서 이전 객체를 리턴


* void remove()
  - next() 또는 previous()로 리턴된 마지막 객체를 제거


* void set(Object o)
  - next() 또는 previous()로 리턴된 마지막 객체와 o를 바꿉니다.


* int nextIndex()
  - next() 호출로 리턴될 객체의 인덱스
  

* int previousIndex()
  - previous()호출로 리턴될 객체의 인덱스


* void add(Object o)
  - list에 객체 o를 추가합니다.

출처: https://velog.io/@yuiopre98/%EB%B0%B1%EC%A4%80-1406%EB%B2%88-%EC%97%90%EB%94%94%ED%84%B0ListIterator