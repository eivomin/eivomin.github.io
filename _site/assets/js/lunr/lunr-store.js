var store = [{
        "title": "[Algorithm] 순열 ",
        "excerpt":"순열 import java.util.Arrays; public class 순열 { static int[] arr = {1,2,3}; static int[] res = new int[3]; static boolean[] visited = new boolean[3]; public static void main(String[] args) { perm(0); } private static void perm(int idx) { if(idx==arr.length) { //출력 System.out.println(Arrays.toString(res)); return; } for(int i=0; i&lt;arr.length; i++) { if(!visited[i])...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-%EC%88%9C%EC%97%B4/",
        "teaser":null},{
        "title": "[Algorithm] 중복순열 ",
        "excerpt":"중복순열 import java.util.Arrays; public class 순열 { static int[] arr = {1,2,3}; static int[] res = new int[3]; public static void main(String[] args) { perm(0); } private static void perm(int idx) { if(idx==arr.length) { //출력 System.out.println(Arrays.toString(res)); return; } for(int i=0; i&lt;arr.length; i++) { res[idx] = arr[i]; perm(idx+1); } } }...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-%EC%A4%91%EB%B3%B5%EC%88%9C%EC%97%B4/",
        "teaser":null},{
        "title": "[Algorithm] 부분집합 ",
        "excerpt":"부분집합 public class 부분집합 { static int[] arr = {1,2,3,4}; static int[] res = new int[4]; public static void main(String[] args) { powerset(0); } private static void powerset(int idx) { if(idx==res.length) { for(int i=0; i&lt;res.length; i++) { if(res[i]!=0) { System.out.print(res[i]+\" \"); } } System.out.println(); return; } res[idx] = arr[idx]; powerset(idx+1);...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-%EB%B6%80%EB%B6%84%EC%A7%91%ED%95%A9/",
        "teaser":null},{
        "title": "[Algorithm] 조합 ",
        "excerpt":"조합 import java.util.Arrays; public class 조합 { static int[] arr = {1,2,3,4}; static int[] sel = new int[2]; public static void main(String[] args) { //4C2 구하기 combination(0,0); } private static void combination(int idx, int s_idx) { if(s_idx==sel.length) { System.out.println(Arrays.toString(sel)); return; } for(int i=idx; i&lt;arr.length; i++) { sel[s_idx] = arr[i]; combination(i+1,...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-%EC%A1%B0%ED%95%A9/",
        "teaser":null},{
        "title": "[Algorithm] 중복조합 ",
        "excerpt":"중복조합 import java.util.Arrays; public class 조합 { static int[] arr = {1,2,3,4}; static int[] sel = new int[2]; public static void main(String[] args) { //4C2 구하기 combination(0,0); } private static void combination(int idx, int s_idx) { if(s_idx==sel.length) { System.out.println(Arrays.toString(sel)); return; } for(int i=idx; i&lt;arr.length; i++) { sel[s_idx] = arr[i]; combination(i,...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-%EC%A4%91%EB%B3%B5%EC%A1%B0%ED%95%A9/",
        "teaser":null},{
        "title": "[Java] 아스키코드표 (ASCII)",
        "excerpt":"아스키코드표 (ASCII)        ‘A’ = 65 / ‘a’ = 97 ‘Z’ = 90 / ‘z’ = 122   A 에서 Z : 65~90 a 에서 z : 97~122   출처: https://choseongho93.tistory.com/11 [TROLL]  ","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%95%84%EC%8A%A4%ED%82%A4%EC%BD%94%EB%93%9C/",
        "teaser":null},{
        "title": "[Java] Iterator와 ListIterator의 차이",
        "excerpt":"Iterator와 ListIterator의 차이 ListIterator ArrayList나 LinkedList와 같이 List인터페이스를 구현한 컬렉션에서만 사용 Iterator는 단방향으로만 이동할 수 있는 데 반해 ListIterator는 양방향으로의 이동이 가능 list.listIterator(list.size()); list.size()위치에서부터 시작 boolean hasNext() Iterator를 앞방향으로 진행하며 객체를 확인 iteration이 객체(elements)를 더 갖고 있으면 true 그외 false boolean hasPrevious() Iterator가 반대방향으로 진행하며 객체를 확인 iteration이 객체(elements)를 더...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-Iterator/",
        "teaser":null},{
        "title": "[Algorithm] BFS",
        "excerpt":"BFS package Backjoon; import java.util.*; import java.io.*; /* * 바킹독님 블로그 참고 * */ public class bfs { static class Pair{ int x; int y; public Pair(int x, int y){ this.x = x; this.y = y; } } public static void main(String[] args) { /* {1,1,1,0,1,0,0,0,0,0}, {1,0,0,0,1,0,0,0,0,0}, {1,1,1,0,1,0,0,0,0,0}, {1,1,0,0,1,0,0,0,0,0}, {0,1,0,0,0,0,0,0,0,0},...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-bfs/",
        "teaser":null},{
        "title": "[Algorithm] DFS",
        "excerpt":"DFS package Backjoon; /* * 바킹독님 블로그 참고 * */ import java.io.*; import java.util.*; public class dfs { static class Pair{ int x, y; public Pair(int x, int y){ this.x = x; this.y = y; } } public static void main(String[] args) { int[][] board = new int[502][502]; // 1이...","categories": ["Algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-dfs/",
        "teaser":null},{
        "title": "[Java] switch문 Expressions",
        "excerpt":"switch문 Expressions Java 12 이후부터 switch문에서 Expressions(표현식) 사용가능 break 문 없애는 대신에 화살표, 중괄호 사용 package ch04.sec03; public class SwitchExpressionsExample { public static void main(String[] args) { char grade = 'B'; switch (grade){ case 'A', 'a'-&gt;{ System.out.println(\"우수 회원입니다.\"); } case 'B', 'b'-&gt;{ System.out.println(\"일반 회원입니다.\"); } default -&gt; { System.out.println(\"손님입니다.\"); }...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-switch%EB%AC%B8-Expressions/",
        "teaser":null},{
        "title": "[Java] 문자열 숫자 타입 변환",
        "excerpt":"문자열 숫자 타입 변환 문자열을 기본 타입으로 변환 변환 타입 사용 예 String → byte String str = “10”; byte value = Byte.parseByte(str); String → short String str = “200”; short value = Short.parseShort(str); String → int String str = “300000”; int value = Integer.parseInt(str); String → long String str...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%88%AB%EC%9E%90-%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98/",
        "teaser":null},{
        "title": "[Java] 비트 이동 연산자",
        "excerpt":"비트 이동 연산자 비트 이동 연산자 연산식 설명 a « b 정수 a의 각 비트를 b만큼 왼쪽으로 이동 오른쪽 빈자리는 0으로 채움 a x 2^b 와 동일한 결과가 됨 a » b 정수 a의 각 비트를 b만큼 오른쪽으로 이동 왼쪽 빈자리는 최상위 부호 비트와 같은 값으로 채움 a / 2^b 와 동일한...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%B9%84%ED%8A%B8-%EC%9D%B4%EB%8F%99-%EC%97%B0%EC%82%B0%EC%9E%90/",
        "teaser":null},{
        "title": "[TIL] 웹개발 종합반 1주차",
        "excerpt":"웹개발 종합반 1주차 웹의 동작 개념 브라우저는 1) 요청을 보내고, 2) 받은 HTML 파일을 그려주는 것 HTML과 CSS의 개념 HTML은 뼈대, CSS는 꾸미기 HTML 기초 -. HTML은 크게 head와 body로 구성됨 -. head 안에는 페이지의 속성 정보를, body 안에는 페이지의 내용을 담는다. -. head 안에 들어가는 대표적인 요소들 : meta,...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EC%A2%85%ED%95%A9%EB%B0%98-1%EC%A3%BC%EC%B0%A8/",
        "teaser":null},{
        "title": "[TIL] 웹개발 종합반 2주차",
        "excerpt":"웹개발 종합반 2주차 Javascript, JQuery, Fetch -. Javascript : 웹을 움직이게 하는 코드 -. JQuery : html 뼈대를 선택해서 쉽게 조작할 수 있다. -. Fetch : 짧은 코드로 요청을 보내고 받아올 수 있다. 리스트 &amp; 딕셔너리 -. 리스트 : 순서를 지켜서 가지고 있는 형태 -. 딕셔너리 : 키(key)-밸류(value) 값의 묶음...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EC%A2%85%ED%95%A9%EB%B0%98-2%EC%A3%BC%EC%B0%A8/",
        "teaser":null},{
        "title": "[Java] String 문자열 관련 Method",
        "excerpt":"String 문자열 관련 Method replace(), replaceAll(), replaceFirst() 문자열을 다른 문자열로 치환할 때 사용. 치환 메소드이긴 한데 주로 문자열에서 특정 문자를 삭제할 때 유용하게 사용한다. replace(CharSequence target, CharSequence replacement) : 모든 target replacement로 치환 String str = \"a,b,c,d,e\"; System.out.println(str.replace(\",\", \" \")); // a b c d e System.out.println(str.replace(\",\", \"\")); // abcde...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-String-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B4%80%EB%A0%A8-Method/",
        "teaser":null},{
        "title": "[Java] final 클래스와 final 메소드",
        "excerpt":"final 클래스와 final 메소드 final 클래스 클래스를 선언할 때 final 키워드를 class 앞에 붙이면 최종적인 클래스이므로 더 이상 상속할 수 없는 클래스가 된다. 즉 final 클래스는 부모 클래스가 될 수 없어 자식 클래스를 만들 수 없다. final 메소드 메소드를 선언할 때 final 키워드를 붙이면 이 메소드는 최종적인 메소드이므로 오버라이딩할 수...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-final-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%99%80-final-%EB%A9%94%EC%86%8C%EB%93%9C/",
        "teaser":null},{
        "title": "[Java] super()",
        "excerpt":"super() super() 모든 객체는 생성자를 호출해야만 생성된다. 부모 객체도 예외는 아니다. 부모 생성자는 자식 생성자의 맨 첫 줄에 숨겨져 있는 super()에 의해 호출된다. //자식 생성자 선언 public 자식클래스(){ super(); ... } super()는 컴파일 과정에서 자동 추가되는데, 이것은 부모의 기본 생성자를 호출한다. 부모 클래스에 기본 생성자가 없고 매개변수를 갖는 생성자만 있다면...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-super()/",
        "teaser":null},{
        "title": "[Java] 메소드 오버라이딩",
        "excerpt":"메소드 오버라이딩 메소드 오버라이딩 메소드 오버라이딩은 상속된 메소드를 자식 클래스에서 재정의하는 것을 말한다. 메소드 오버라이딩되었다면 해당 부모 메소드는 숨겨지고, 자식 메소드가 우선적으로 사용된다. 메소드 오버라이딩할 때는 다음과 같은 규칙에 주의해서 작성해야 한다. 부모 메소드의 선언부(리턴 타입, 메소드 이름, 매개변수)와 동일해야 한다. 접근 제한을 더 강하게 오버라이딩할 수 없다(public → private으로...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%98%A4%EB%B2%84%EB%9D%BC%EC%9D%B4%EB%94%A9/",
        "teaser":null},{
        "title": "[Java] 메소드 오버로딩",
        "excerpt":"메소드 오버로딩 메소드 오버로딩 메소드 이름은 같되 매개변수의 타입, 개수, 순서가 다른 메소드를 여러개 선언하는 것 메소드 오버로딩의 목적은 다양한 매개값을 처리하기 위해서이다! /* Car.java */ package ch06.sec08.exam04; public class Calculator { //정사각형의 넓이 double areaRectangle(double width){ return width*width; } //직사각형의 넓이 double areaRectangle(double width, double height){ return width*height; }...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%98%A4%EB%B2%84%EB%A1%9C%EB%94%A9/",
        "teaser":null},{
        "title": "[Java] 배열복사",
        "excerpt":"배열복사 System.arraycopy() System.arraycopy(Object src, int srcPosm Object dest, int destPos, int length); System.arraycopy(arr1, 0, arr2, 0, arr1.length); package ch05.sec09; public class ArrayCopyExample { public static void main(String[] args) { // 길이 3인 배열 String[] oldStrArray = {\"java\", \"array\", \"copy\"}; // 길이 5인 배열을 새로 생성 String[] newStrArray = new String[5];...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%B0%B0%EC%97%B4%EB%B3%B5%EC%82%AC/",
        "teaser":null},{
        "title": "[Java] 봉인된 클래스",
        "excerpt":"봉인된 클래스 기본적으로 final 클래스를 제외한 모든 클래스는 부모 클래스가 될 수 있다. 그러나 Java 15부터는 무분별한 자식 클래스 생성을 방지하기 위해 봉인된(sealed) 클래스가 도입되었다. public sealed class Person permits Employee, Manager { ... } sealed 키워드를 사용하면 permits 키워드 뒤에 상속 가능한 자식 클래스를 지정해야 한다. 봉인된 Person 클래스를...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EB%B4%89%EC%9D%B8%EB%90%9C-%ED%81%B4%EB%9E%98%EC%8A%A4/",
        "teaser":null},{
        "title": "[Java] 생성자 오버로딩",
        "excerpt":"생성자 오버로딩 생성자 오버로딩 매개변수의 타입, 개수, 순서가 다르게 여러 개의 생성자 선언 /* Car.java */ package ch06.sec07.exam04; public class Car { //필드 선언 String company = \"현대자동차\"; String model; String color; int maxSpeed; //생성자 선언 Car() {} Car(String model){ this.model = model; } Car(String model, String color){ this.model =...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%83%9D%EC%84%B1%EC%9E%90-%EC%98%A4%EB%B2%84%EB%A1%9C%EB%94%A9/",
        "teaser":null},{
        "title": "[Java] 정적 블록",
        "excerpt":"정적 블록 정적 블록 정적 필드는 다음과 같이 필드 선언과 동시에 초기값을 주는 것이 일반적이다. static double pi = 3.141592; 하지만 복잡한 초기화 작업이 필요하다면 정적 블록(static block)을 이용해야 한다 static{ ... } 정적 블록은 클래스가 메모리로 로딩될 때 자동으로 실행된다. 정적 블록이 클래스 내부에 여러 개가 선언되어 있을 경우에는...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%A0%95%EC%A0%81-%EB%B8%94%EB%A1%9D/",
        "teaser":null},{
        "title": "[Java] 추상 클래스",
        "excerpt":"추상 클래스 객체를 생성할 수 있는 클래스를 실체 클래스라고 한다면, 이 클래스들의 공통적인 필드나 메소드를 추출해서 선언한 클래스를 추상 클래스라고 한다. 추상 클래스는 실체 클래스의 부모 역할을 한다. 따라서 실체 클래스는 추상 클래스를 상속해서 공통적인 필드나 메소드를 물려받을 수 있다. 추상 클래스는 실체 클래스의 공통되는 필드와 메소드를 추출해서 만들었기 때문에...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%B6%94%EC%83%81-%ED%81%B4%EB%9E%98%EC%8A%A4/",
        "teaser":null},{
        "title": "[Java] 타입 변환",
        "excerpt":"타입 변환 자동 타입 변환 (부모 - 자식) 자동 타입 변환은 의미 그대로 자동적으로 타입 변환이 일어나는 것을 말한다. 부모타입 변수 = 자식타입객체; 자식 클래스에서 오버라이딩된 메소드가 있다면 부모 메소드 대신 오버라이딩된 메소드가 호출된다 → 다형성과 관련! package ch07.sec07.exam02; public class Parent { //메소드 선언 public void method1(){ System.out.println(\"Parent-method1()\"); }...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98/",
        "teaser":null},{
        "title": "[TIL] 웹개발 종합반 3주차",
        "excerpt":"웹개발 종합반 3주차 forEach문으로 반복을 돌면서, 하나씩 출력 &lt;script&gt; fetch(\"http://spartacodingclub.shop/web/api/movie\") .then(response =&gt; response.json()) .then(data =&gt; { let movies = data['movies'] movies.forEach((movie) =&gt; { console.log(movie) }) }) &lt;/script&gt; repeat() repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다. &lt;script&gt; let star_image = '⭐'.repeat(star) &lt;/script&gt; 가상환경(virtual environment) 같은 시스템에서 실행되는 다른...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EC%A2%85%ED%95%A9%EB%B0%98-3%EC%A3%BC%EC%B0%A8/",
        "teaser":null},{
        "title": "[TIL] 웹개발 종합반 4주차",
        "excerpt":"웹개발 종합반 4주차 프로젝트 셋팅 필요한 패키지 flask, pymongo, dnspython, bs4, requests 4주차 숙제 : 별점 선택 기능 추가하기 def movie_post(): url_receive = request.form['url_give'] comment_receive = request.form['comment_give'] star_receive = request.form['star_give'] headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'} data = requests.get(url_receive,headers=headers) soup = BeautifulSoup(data.text,...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EC%A2%85%ED%95%A9%EB%B0%98-4%EC%A3%BC%EC%B0%A8/",
        "teaser":null},{
        "title": "[Java] Comparable과 Comparator",
        "excerpt":"Comparable과 Comparator TreeSet에 저장되는 객체와 TreeMap에 저장되는 키 객체는 저장과 동시에 오름차순으로 정렬되는데, 어떤 객체든 정렬될 수 있는 것은 아니고 객체가 Comparable 인터페이스를 구현하고 있어야 가능하다. Integer, Double, String 타입은 모두 Comparable을 구현하고 있기 때문에 상관 없지만, 사용자 정의 객체를 저장할 때에는 반드시 Comparable을 구현하고 있어야 한다. Comparable 인터페이스에는 compareTo()...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-Comparable%EA%B3%BC-Comparator/",
        "teaser":null},{
        "title": "[Java] Stringbuilder, StringTokenizer",
        "excerpt":"Stringbuilder, StringTokenizer Stringbuilder StringBuilder는 내부 버퍼(데이터를 저장하는 메모리)에 문자열을 저장해두고 그 안에서 추가, 수정, 삭제 작업을 하도록 설계되어 있다. 리턴타입 메소드(매개변수) 설명 StringBuilder append(문자열) 문자열을 끝에 추가 StringBuilder insert(위치, 문자열) 문자열을 지정 위치에 추가 StringBuilder delete(시작위치, 끝 위치) 문자열 일부를 삭제 StringBuilder replace(시작위치, 끝 위치, 문자열) 문자열 일부를 대체 String...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-StringBuilder,-StringTokenizer/",
        "teaser":null},{
        "title": "[Java] 인터페이스",
        "excerpt":"인터페이스 인터페이스의 역할 인터페이스는 사전적인 의미로 두 장치를 연결하는 접속기를 말한다. 여기서 두 장치를 서로 다른 객체로 본다면, 인터페이스는 이 두객체를 연결하는 역할을 한다. 이미지 출처 : https://hyuntaekhong.github.io/assets/images/java/java-basic20/interface02.png 인터페이스 선언 인터페이스 선언은 class 키워드 대신 interface 키워드를 사용한다. 접근 제한자로는 클래스와 마찬가지로 같은 패키지 내에서만 사용 가능한 default, 패키지와 상관없이...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4/",
        "teaser":null},{
        "title": "[Java] 제네릭",
        "excerpt":"제네릭 제네릭(Generic)이란 결정되지 않은 타입을 파라미터로 처리하고 실제 사용할 때 파라미터를 구체적인 타입으로 대체시키는 기능 public class Box&lt;T&gt;{ public T content; } 만약 Box의 내용물로 String을 저장하고 싶다면 다음과 같이 Box를 생성할 때 타입 파라미터 T 대신 String으로 대체하면 된다. Box&lt;String&gt; box = new Box&lt;String&gt;(); box.content = \"안녕하세요\"; String content...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%A0%9C%EB%84%A4%EB%A6%AD/",
        "teaser":null},{
        "title": "[Java] 컬렉션 자료구조",
        "excerpt":"컬렉션 자료구조 컬렉션 프레임워크 List 컬렉션 ArrayList List&lt;E&gt; list = new ArrayList&lt;E&gt;(); //E에 지정된 타입의 객체만 저장 List&lt;E&gt; list = new ArrayList&lt;&gt;(); //E에 지정된 타입의 객체만 저장 List list = new ArrayList&lt;&gt;(); //모든 타입의 객체를 저장 package ch15.sec02.exam01; public class Board { private String subject; private String content; private String...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%BB%AC%EB%A0%89%EC%85%98-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/",
        "teaser":null},{
        "title": "[TIL] 웹개발 종합반 5주차",
        "excerpt":"웹개발 종합반 5주차 나의 버킷리스트 팬명록 og 태그 넣기 &lt;meta property=\"og:title\" content=\"내 사이트의 제목\" /&gt; &lt;meta property=\"og:description\" content=\"보고 있는 페이지의 내용 요약\" /&gt; &lt;meta property=\"og:image\" content=\"이미지 URL\" /&gt; AWS Elastic Beanstalk AWS 클라우드에서 애플리케이션을 신속하게 배포하고 관리할 수 있는 서비스 애플리케이션을 업로드만 하면 용량 프로비저닝, 로드 밸런싱, 조정, 모니터링 등...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-%EC%9B%B9%EA%B0%9C%EB%B0%9C-%EC%A2%85%ED%95%A9%EB%B0%98-5%EC%A3%BC%EC%B0%A8/",
        "teaser":null},{
        "title": "[백준] 10807. 개수 세기",
        "excerpt":"10807. 개수 세기 Code package baekjoon; import java.io.*; import java.util.*; public class 개수세기_10807 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(br.readLine()); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); int target = Integer.parseInt(br.readLine()); int cnt = 0; for(int i=0; i&lt;N;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10807-%EA%B0%9C%EC%88%98-%EC%84%B8%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 10808. 알파벳 개수",
        "excerpt":"10808. 알파벳 개수 Code package baekjoon; import java.io.*; /* * a~z 26개 , a = 97 * */ public class 알파벳개수_10808 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String S = br.readLine(); int[] arr = new int[26]; StringBuilder sb = new StringBuilder();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10808-%EC%95%8C%ED%8C%8C%EB%B2%B3-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 11328. Strfry",
        "excerpt":"11328. Strfry Code package baekjoon; import java.util.*; import java.io.*; public class Strfry_11328 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(br.readLine()); for(int i=0; i&lt;N; i++){ StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); String[] arrA = st.nextToken().split(\"\"); String[] arrB = st.nextToken().split(\"\");...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11328-Strfry/",
        "teaser":null},{
        "title": "[백준] 13300. 방 배정",
        "excerpt":"13300. 방 배정 Code package baekjoon; import java.util.*; import java.io.*; public class 방배정_13300 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int K = Integer.parseInt(st.nextToken()); // N : 인원 수, K :...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-13300-%EB%B0%A9-%EB%B0%B0%EC%A0%95/",
        "teaser":null},{
        "title": "[백준] 1475. 방 번호",
        "excerpt":"1475. 방 번호 Code package baekjoon; import java.io.*; public class 방번호_1475 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String s = br.readLine(); int[] arr = new int[10]; for (int i = 0; i &lt; s.length(); i++) { int idx = s.charAt(i) -...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1475-%EB%B0%A9-%EB%B2%88%ED%98%B8/",
        "teaser":null},{
        "title": "[백준] 1919. 애너그램 만들기",
        "excerpt":"1919. 애너그램 만들기 Code package baekjoon; import java.io.*; public class 애너그램만들기_1919 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int[] arr1 = new int[26]; int[] arr2 = new int[26]; String str1 = br.readLine(); String str2 = br.readLine(); for(int i=0; i&lt;str1.length(); i++) arr1[str1.charAt(i)-'a']++; for(int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1919-%EC%95%A0%EB%84%88%EA%B7%B8%EB%9E%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 2577. 숫자의 개수",
        "excerpt":"2577. 숫자의 개수 Code package baekjoon; import java.io.*; public class 숫자의개수_2577 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int A = Integer.parseInt(br.readLine()); int B = Integer.parseInt(br.readLine()); int C = Integer.parseInt(br.readLine()); int sum = A*B*C; String sumStr = sum+\"\"; int[] arr = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2577-%EC%88%AB%EC%9E%90%EC%9D%98-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 3273. 두 수의 합",
        "excerpt":"3273. 두 수의 합 Code package baekjoon; import java.io.*; import java.util.*; public class 두수의합_3273 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int n = Integer.parseInt(br.readLine()); int[] arr = new int[n]; StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); for(int i=0; i&lt;n; i++) arr[i]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-3273-%EB%91%90-%EC%88%98%EC%9D%98-%ED%95%A9/",
        "teaser":null},{
        "title": "[Java] 스트림",
        "excerpt":"스트림 컬렉션 및 배열에 저장된 요소를 반복 처리하기 위해서는 for 문을 이용하거나 Iterator(반복자)를 이용했다. List&lt;String&gt; list = ....; for(int i=0; i&lt;list.size(); i++){ String item = list.get(i); //item 처리 } 그리고 Set에서 요소를 하나씩 처리하기 위해 Iterator를 다음과 같이 사용했다. Set&lt;String&gt; set = ...; Iterator&lt;String&gt; iterator = set.iterator(); while(iterator.hasNext()){ String item...","categories": ["Java"],
        "tags": [],
        "url": "http://localhost:4000/java/Java-%EC%8A%A4%ED%8A%B8%EB%A6%BC/",
        "teaser":null},{
        "title": "[TIL] 2023.03.23 TIL",
        "excerpt":"2023.03.23 TIL 자바 공부 Java - 스트림 정리 알고리즘 구분 문제 분류 문제 문제 제목 풀이 url 추가 개념 배열 연습 문제 10808 알파벳 개수 정답 코드   배열 기본 문제✔ 2577 숫자의 개수 정답 코드   배열 기본 문제✔ 1475 방 번호 정답 코드   배열 기본 문제✔ 3273...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-2023.03.23-TIL/",
        "teaser":null},{
        "title": "[백준] 1158. 요세푸스 문제",
        "excerpt":"1158. 요세푸스 문제 Code package baekjoon; import java.util.*; import java.io.*; public class 요세푸스문제_1158 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int K = Integer.parseInt(st.nextToken()); Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); for(int i=1;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1158-%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C/",
        "teaser":null},{
        "title": "[백준] 1406. 에디터",
        "excerpt":"1406. 에디터 Code package baekjoon; import java.io.*; import java.util.*; public class 에디터_1406 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String str = br.readLine(); Stack&lt;String&gt; lstack = new Stack&lt;&gt;(); Stack&lt;String&gt; rstack = new Stack&lt;&gt;(); int len = str.length(); for(int i=0; i&lt;len; i++) lstack.add(str.charAt(i)+\"\");...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1406-%EC%97%90%EB%94%94%ED%84%B0/",
        "teaser":null},{
        "title": "[백준] 5397. 키로거",
        "excerpt":"5397. 키로거 Code package baekjoon; import java.util.*; import java.io.*; public class 키로거_5397 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int tc = Integer.parseInt(br.readLine()); for(int i=0; i&lt;tc; i++){ String str = br.readLine(); Stack&lt;String&gt; lstack = new Stack&lt;&gt;(); Stack&lt;String&gt; rstack = new Stack&lt;&gt;(); int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-5397-%ED%82%A4%EB%A1%9C%EA%B1%B0/",
        "teaser":null},{
        "title": "[TIL] 2023.03.24 TIL",
        "excerpt":"2023.03.24 TIL 알고리즘 구분 문제 분류 문제 문제 제목 풀이 url 추가 개념 스택 연습 문제 10828 스택 추가   스택 기본 문제✔ 10773 제로 추가   스택 응용 문제✔ 1874 스택 수열 추가   스택 응용 문제✔ 2493 탑 추가   스택 응용 문제 6198 옥상 정원 꾸미기 추가...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-2023.03.24-TIL/",
        "teaser":null}]
