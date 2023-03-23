var store = [{
        "title": "[D2] 1928. Base64 Decoder",
        "excerpt":"1928. Base64 Decoder Code import java.util.Base64; import java.util.Scanner; import java.io.FileInputStream; import java.util.Base64.Decoder; public class Solution { public static void main(String args[]) throws Exception { Scanner sc = new Scanner(System.in); int T; String stc; char[] a = new char[64]; T=sc.nextInt(); Decoder decoder = Base64.getDecoder(); for(int tc = 1; tc &lt;= T;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1928-Base64-Decoder/",
        "teaser":null},{
        "title": "[D2] 1945. 간단한 소인수분해",
        "excerpt":"1945. 간단한 소인수분해 Code import java.util.Scanner; import java.io.FileInputStream; class Solution { public static void main(String args[]) throws Exception { Scanner sc = new Scanner(System.in); int T, num; int a=0, b=0, c=0, d=0, e=0; int[] arr = {2,3,5,7,11}; T=sc.nextInt(); for(int tc = 1; tc &lt;= T; tc++) { a = 0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1945-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%86%8C%EC%9D%B8%EC%88%98%EB%B6%84%ED%95%B4/",
        "teaser":null},{
        "title": "[D2] 1986. 지그재그 숫자",
        "excerpt":"1986. 지그재그 숫자 Code import java.util.Scanner; import java.io.FileInputStream; class Solution { public static void main(String args[]) throws Exception { Scanner sc = new Scanner(System.in); int T,N; T=sc.nextInt(); for(int test_case = 1; test_case &lt;= T; test_case++) { N = sc.nextInt(); int sum = 1; for(int i=2; i&lt;=N; i++) { if(i%2==0) sum-=i;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1986-%EC%A7%80%EA%B7%B8%EC%9E%AC%EA%B7%B8-%EC%88%AB%EC%9E%90/",
        "teaser":null},{
        "title": "[D2] 1284. 수도 요금 경쟁",
        "excerpt":"1284. 수도 요금 경쟁 Code import java.util.Scanner; import java.io.FileInputStream; class Solution { public static void main(String args[]) throws Exception { Scanner sc = new Scanner(System.in); int T, P, Q, R, S, W; T=sc.nextInt(); for(int tc = 1; tc &lt;= T; tc++) { P = sc.nextInt(); Q = sc.nextInt(); R =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1284-%EC%88%98%EB%8F%84-%EC%9A%94%EA%B8%88-%EA%B2%BD%EC%9F%81/",
        "teaser":null},{
        "title": "[D2] 1288. 새로운 불면증 치료법",
        "excerpt":"128. 새로운 불면증 치료법 Code import java.util.HashSet; import java.util.Scanner; import java.util.Set; public class Solution { public static void main(String[] args) { // TODO Auto-generated method stub Scanner sc = new Scanner(System.in); int T= sc.nextInt(); int count = 1; for(int tc=1;tc&lt;=T;tc++) { Set&lt;Integer&gt; number = new HashSet&lt;&gt;(); String N = sc.next();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1288-%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%B6%88%EB%A9%B4%EC%A6%9D-%EC%B9%98%EB%A3%8C%EB%B2%95/",
        "teaser":null},{
        "title": "[D2] 1959. 두 개의 숫자열",
        "excerpt":"1959. 두 개의 숫자열 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T,N,M; T = sc.nextInt(); for(int tc = 1; tc&lt;=T; tc++) { N = sc.nextInt(); M = sc.nextInt(); int[] A_arr = new int[N]; int[] B_arr = new int[M];...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1959-%EB%91%90-%EA%B0%9C%EC%9D%98-%EC%88%AB%EC%9E%90%EC%97%B4/",
        "teaser":null},{
        "title": "[D2] 1989. 초심자의 회문 검사",
        "excerpt":"1989. 초심자의 회문 검사 Code import java.util.*; import java.io.FileInputStream; public class Solution { public static void main(String[] args) throws Exception { Scanner sc = new Scanner(System.in); int T; T=sc.nextInt(); for(int tc = 1; tc &lt;= T; tc++) { String stc = sc.next(); int result = 0; String[] arr = stc.split(\"\");...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1989-%EC%B4%88%EC%8B%AC%EC%9E%90%EC%9D%98-%ED%9A%8C%EB%AC%B8-%EA%B2%80%EC%82%AC/",
        "teaser":null},{
        "title": "[D2] 2007. 패턴 마디의 길이",
        "excerpt":"2007. 패턴 마디의 길이 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); boolean flag = false; for(int tc = 1; tc &lt;=T; tc++) { String stc = sc.next(); String[] arr = stc.split(\"\"); String c = arr[0];...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-2007-%ED%8C%A8%ED%84%B4%EB%A7%88%EB%94%94%EC%9D%98%EA%B8%B8%EC%9D%B4/",
        "teaser":null},{
        "title": "[D2] 1948. 날짜 계산기",
        "excerpt":"1948. 날짜 계산기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T; T = sc.nextInt(); int month1, month2; int day1, day2; int sum = 0, temp = 0; int[] day_num = {31, 28, 31, 30, 31, 30, 31, 31,...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1948-%EB%82%A0%EC%A7%9C-%EA%B3%84%EC%82%B0%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 1979. 어디에 단어가 들어갈 수 있을까",
        "excerpt":"1979. 어디에 단어가 들어갈 수 있을까 Code import java.util.*; public class Solution { static int N; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { N = sc.nextInt(); int K = sc.nextInt(); int[][] large_arr...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1979-%EC%96%B4%EB%94%94%EC%97%90-%EB%8B%A8%EC%96%B4%EA%B0%80-%EB%93%A4%EC%96%B4%EA%B0%88-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C/",
        "teaser":null},{
        "title": "[D2] 1204. 최빈수 구하기",
        "excerpt":"1204. 최빈수 구하기 Code import java.util.Scanner; import java.io.FileInputStream; class Solution { public static void main(String args[]) throws Exception { Scanner sc = new Scanner(System.in); int T, max, num; T=sc.nextInt(); for(int test_case = 1; test_case &lt;= T; test_case++){ int[] arr = new int[101]; int test_num = sc.nextInt(); for(int i = 0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1204-%EC%B5%9C%EB%B9%88%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 1926. 간단한 369게임",
        "excerpt":"1926. 간단한 369게임 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); String[] arr = new String[N]; int count = 0; for(int i=0; i&lt;N; i++) { arr[i] = Integer.toString(i+1); String temp = arr[i]; for(int j=0; j&lt;temp.length(); j++)...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1926-%EA%B0%84%EB%8B%A8%ED%95%9C-369%EA%B2%8C%EC%9E%84/",
        "teaser":null},{
        "title": "[D2] 1940. 가랏! RC카!",
        "excerpt":"1940. 가랏! RC카! Code import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 0; tc &lt; T; tc++) { int N = sc.nextInt(); int speed = 0; int dis = 0; int a =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1940-%EA%B0%80%EB%9E%8F!-RC%EC%B9%B4!/",
        "teaser":null},{
        "title": "[D2] 1946. 간단한 압축 풀기",
        "excerpt":"1946. 간단한 압축 풀기 Code import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); char[] alpha = new char[N]; int[] cnt = new int[N]; int total = 0; for(int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1946-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%95%95%EC%B6%95-%ED%92%80%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 1954. 달팽이 숫자",
        "excerpt":"1954. 달팽이 숫자 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int[][] arr = new int[N][N]; int flag = 1; int length...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1954-%EB%8B%AC%ED%8C%BD%EC%9D%B4-%EC%88%AB%EC%9E%90/",
        "teaser":null},{
        "title": "[D2] 1961. 숫자 배열 회전",
        "excerpt":"1961. 숫자 배열 회전 Code import java.util.*; public class Solution { static int N; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { N = sc.nextInt(); int[][] arr = new int[N][N]; int[][] temp1 = new int[N][N]; int[][] temp2 =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1961-%EC%88%AB%EC%9E%90-%EB%B0%B0%EC%97%B4-%ED%9A%8C%EC%A0%84/",
        "teaser":null},{
        "title": "[D2] 1966. 숫자를 정렬하자",
        "excerpt":"1966. 숫자를 정렬하자 Code import java.util.*; import java.util.Arrays; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int[] arr = new int[N]; for(int i=0; i&lt;N; i++) { arr[i] = sc.nextInt(); }...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1966-%EC%88%AB%EC%9E%90%EB%A5%BC-%EC%A0%95%EB%A0%AC%ED%95%98%EC%9E%90/",
        "teaser":null},{
        "title": "[D2] 1970. 쉬운 거스름돈",
        "excerpt":"1970. 쉬운 거스름돈 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); int[] arr = {50000, 10000, 5000, 1000, 500, 100, 50, 10}; int[] count = new int[arr.length]; for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1970-%EC%89%AC%EC%9A%B4-%EA%B1%B0%EC%8A%A4%EB%A6%84%EB%8F%88/",
        "teaser":null},{
        "title": "[D2] 1976. 시각 덧셈",
        "excerpt":"1976. 시각 덧셈 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int fst_hour = sc.nextInt(); int fst_min = sc.nextInt(); int snd_hour = sc.nextInt(); int snd_min = sc.nextInt(); int total_hour = fst_hour+snd_hour;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1976-%EC%8B%9C%EA%B0%81-%EB%8D%A7%EC%85%88/",
        "teaser":null},{
        "title": "[D2] 1983. 조교의 성적 매기기",
        "excerpt":"1983. 조교의 성적 매기기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int K = sc.nextInt(); Integer[] score = new Integer[N]; String[] level = {\"A+\",\"A0\",\"A-\",\"B+\",\"B0\",\"B-\",\"C+\",\"C0\",\"C-\",\"D0\"}; for(int i=0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1983-%EC%A1%B0%EA%B5%90%EC%9D%98-%EC%84%B1%EC%A0%81-%EB%A7%A4%EA%B8%B0%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 1984. 중간 평균값 구하기",
        "excerpt":"1984. 중간 평균값 구하기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int[] arr = new int[10]; int max = 0; int min = Integer.MAX_VALUE; double sum = 0; double average...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1984-%EC%A4%91%EA%B0%84-%ED%8F%89%EA%B7%A0%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 2001. 파리 퇴치",
        "excerpt":"2001. 파리 퇴치 Code ```java import java.util.Scanner; public class Solution { static int N; static int M; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int M = sc.nextInt();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-2001-%ED%8C%8C%EB%A6%AC-%ED%87%B4%EC%B9%98/",
        "teaser":null},{
        "title": "[D2] 2005. 파스칼의 삼각형",
        "excerpt":"2005. 파스칼의 삼각형 Code import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int[][] arr = new int[N][N]; arr[0][0] = 1; for(int i=0; i&lt;N; i++) { for(int j=0; j&lt;N;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-2005-%ED%8C%8C%EC%8A%A4%EC%B9%BC%EC%9D%98-%EC%82%BC%EA%B0%81%ED%98%95/",
        "teaser":null},{
        "title": "[D2] 1285. 아름이의 돌 던지기",
        "excerpt":"1285. 아름이의 돌 던지기 Code #include &lt;iostream&gt; #include &lt;algorithm&gt; int main(void) { using namespace std; int T; cin &gt;&gt; T; for (int tc = 1; tc &lt;= T; tc++) { int N; cin &gt;&gt; N; int arr[1000]; int distance_arr[1000]; int distance; int cnt = 0; for (int i = 0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1285-%EC%95%84%EB%A6%84%EC%9D%B4%EC%9D%98-%EB%8F%8C-%EB%8D%98%EC%A7%80%EA%B8%B0/",
        "teaser":null},{
        "title": "[D2] 1859. 백만 장자 프로젝트",
        "excerpt":"1859. 백만 장자 프로젝트 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int[] arr = new int[N]; for(int i=0; i&lt;N; i++) {...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1859-%EB%B0%B1%EB%A7%8C-%EC%9E%A5%EC%9E%90-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/",
        "teaser":null},{
        "title": "[D2] 1974. 스도쿠 검증",
        "excerpt":"1974. 스도쿠 검증 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int[][] arr = new int[9][9]; for(int i=0; i&lt;9; i++) { for(int j=0; j&lt;9; j++) { arr[i][j] = sc.nextInt(); } }...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D2-1974-%EC%8A%A4%EB%8F%84%EC%BF%A0-%EA%B2%80%EC%A6%9D/",
        "teaser":null},{
        "title": "[D3] 3431. 준환이의 운동관리",
        "excerpt":"3431. 준환이의 운동관리 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { // L분 이상 U분 이하 int L = sc.nextInt(); int U = sc.nextInt(); int X = sc.nextInt(); System.out.print(\"#\"+tc+\" \"); if(X&gt;U)...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-3431-%EC%A4%80%ED%99%98%EC%9D%B4%EC%9D%98-%EC%9A%B4%EB%8F%99%EA%B4%80%EB%A6%AC/",
        "teaser":null},{
        "title": "[D3] 4406. 모음이 보이지 않는 사람",
        "excerpt":"4406. 모음이 보이지 않는 사람 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { String temp = sc.next(); int cnt = 0; Queue&lt;Character&gt; queue = new LinkedList&lt;&gt;(); for(int i=0; i&lt;temp.length(); i++) {...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-4406-%EB%AA%A8%EC%9D%8C%EC%9D%B4-%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%82%AC%EB%9E%8C/",
        "teaser":null},{
        "title": "[D3] 1213. String",
        "excerpt":"1213. String Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); for(int tc=1; tc&lt;=10; tc++) { int num = sc.nextInt(); String temp = sc.next(); String sentence = sc.next(); int cnt = 0; int fromIndex = -1; while((fromIndex = sentence.indexOf(temp, fromIndex+1))&gt;=0) cnt++;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-1213-String/",
        "teaser":null},{
        "title": "[D3] 3314. 보충학습과 평균",
        "excerpt":"3314. 보충학습과 평균 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int sum = 0; for(int i=0; i&lt;5; i++) { int num = sc.nextInt(); if(num&lt;40) sum+=40; else sum+=num; } System.out.println(\"#\"+tc+\" \"+(sum/5));...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-3314-%EB%B3%B4%EC%B6%A9%ED%95%99%EC%8A%B5%EA%B3%BC-%ED%8F%89%EA%B7%A0/",
        "teaser":null},{
        "title": "[D3] 3456. 직사각형 길이 찾기",
        "excerpt":"3456. 직사각형 길이 찾기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int a = sc.nextInt(); int b = sc.nextInt(); int c = sc.nextInt(); System.out.print(\"#\"+tc+\" \"); if(a==b&amp;&amp;b==c) { System.out.print(a); } else...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-3456-%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95-%EA%B8%B8%EC%9D%B4-%EC%B0%BE%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 5601. 쥬스 나누기",
        "excerpt":"5601. 쥬스 나누기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); System.out.print(\"#\"+tc+\" \"); for(int i=0; i&lt;N; i++) System.out.print(\"1/\"+N+\" \"); System.out.println(); } }...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5601-%EC%A5%AC%EC%8A%A4-%EB%82%98%EB%88%84%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 6730. 장애물 경주 난이도",
        "excerpt":"6730. 장애물 경주 난이도 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int[] arr = new int[N]; for (int i = 0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-6730-%EC%9E%A5%EC%95%A0%EB%AC%BC-%EA%B2%BD%EC%A3%BC-%EB%82%9C%EC%9D%B4%EB%8F%84/",
        "teaser":null},{
        "title": "[D3] 6913. 동철이의 프로그래밍 대회",
        "excerpt":"6913. 동철이의 프로그래밍 대회 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int M = sc.nextInt(); int[][] arr = new int[N][M]; for(int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-6913-%EB%8F%99%EC%B2%A0%EC%9D%B4%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%8C%80%ED%9A%8C/",
        "teaser":null},{
        "title": "[D3] 6958. 동철이의 프로그래밍 대회",
        "excerpt":"6958. 동철이의 프로그래밍 대회 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int M = sc.nextInt(); int[][] arr = new int[N][M]; for(int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-6958-%EB%8F%99%EC%B2%A0%EC%9D%B4%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%8C%80%ED%9A%8C/",
        "teaser":null},{
        "title": "[D3] 7728. 다양성 측정",
        "excerpt":"7728. 다양성 측정 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { String str = sc.next(); int[] arr = new int[10]; for(int i=0; i&lt;str.length(); i++) { arr[str.charAt(i)-'0']++; } int sum = 0;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-7728-%EB%8B%A4%EC%96%91%EC%84%B1-%EC%B8%A1%EC%A0%95/",
        "teaser":null},{
        "title": "[D3] 8658. Summation",
        "excerpt":"8658. Summation Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int sum = 0; int max = 0; int min = Integer.MAX_VALUE; int[] arr = new int[10]; for(int i=0; i&lt;10; i++)...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8658-Summation/",
        "teaser":null},{
        "title": "[D3] 8673. 코딩 토너먼트1",
        "excerpt":"8673. 코딩 토너먼트1 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); for(int i=0; i&lt;Math.pow(2, N); i++) { queue.add(sc.nextInt()); } int lazy =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8673-%EC%BD%94%EB%94%A9-%ED%86%A0%EB%84%88%EB%A8%BC%ED%8A%B81/",
        "teaser":null},{
        "title": "[D3] 3142. 영준이와 신비한 뿔의 숲",
        "excerpt":"3142.  영준이와 신비한 뿔의 숲     Code   import java.util.*;   public class Solution {     public static void main(String[] args) {         Scanner sc = new Scanner(System.in);                   int T = sc.nextInt();                   for(int tc=1; tc&lt;=T; tc++) {             int N = sc.nextInt();             int M = sc.nextInt();                           System.out.println(\"#\"+tc+\" \"+(2*M-N)+\" \"+(N-M));                       }     } }   ","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-3142-%EC%98%81%EC%A4%80%EC%9D%B4%EC%99%80-%EC%8B%A0%EB%B9%84%ED%95%9C-%EB%BF%94%EC%9D%98-%EC%88%B2/",
        "teaser":null},{
        "title": "[D3] 4466. 최대 성적표 만들기",
        "excerpt":"4466. 최대 성적표 만들기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int K = sc.nextInt(); int[] arr = new int[N]; for...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-4466-%EC%B5%9C%EB%8C%80-%EC%84%B1%EC%A0%81%ED%91%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 5431. 민석이의 과제 체크하기",
        "excerpt":"5431. 민석이의 과제 체크하기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int K = sc.nextInt(); int[] arr = new int[N]; for(int i=0; i&lt;K; i++) { arr[sc.nextInt()-1]++;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5431-%EB%AF%BC%EC%84%9D%EC%9D%B4%EC%9D%98-%EA%B3%BC%EC%A0%9C-%EC%B2%B4%ED%81%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 7102. 준홍이의 카드놀이",
        "excerpt":"7102. 준홍이의 카드놀이 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int M = sc.nextInt(); System.out.print(\"#\" + tc + \" \"); int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-7102-%EC%A4%80%ED%99%8D%EC%9D%B4%EC%9D%98-%EC%B9%B4%EB%93%9C%EB%86%80%EC%9D%B4/",
        "teaser":null},{
        "title": "[D3] 8741. 두문자어",
        "excerpt":"8741.  두문자어     Code   import java.util.*;   public class Solution {     public static void main(String[] args) {         Scanner sc = new Scanner(System.in);                   int T = sc.nextInt();                   for(int tc=1; tc&lt;=T; tc++) {             System.out.print(\"#\"+tc+\" \");             for(int i=0; i&lt;3; i++) {                 String temp1 = sc.next();                 System.out.print(temp1.toUpperCase().charAt(0));                 }             System.out.println();                       }     } }   ","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8741-%EB%91%90%EB%AC%B8%EC%9E%90%EC%96%B4/",
        "teaser":null},{
        "title": "[D3] 8821. 적고 지우기",
        "excerpt":"8821. 적고 지우기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int size = 1; int[] arr = new int[10]; String str = sc.next(); for (int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8821-%EC%A0%81%EA%B3%A0-%EC%A7%80%EC%9A%B0%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 8931. 제로",
        "excerpt":"8931. 제로 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int K = sc.nextInt(); Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(); int temp = 0; for(int i=0; i&lt;K; i++) { temp = sc.nextInt();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8931-%EC%A0%9C%EB%A1%9C/",
        "teaser":null},{
        "title": "[D3] 5162. 두가지 빵의 딜레마",
        "excerpt":"5162. 두가지 빵의 딜레마 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int A = sc.nextInt(); int B = sc.nextInt(); int C = sc.nextInt(); int min = Math.min(A, B); System.out.println(\"#\"+tc+\" \"+C/min);...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5162-%EB%91%90%EA%B0%80%EC%A7%80-%EB%B9%B5%EC%9D%98-%EB%94%9C%EB%A0%88%EB%A7%88/",
        "teaser":null},{
        "title": "[D3] 6808. 규영이와 인영이의 카드게임",
        "excerpt":"6808. 규영이와 인영이의 카드게임 Code import java.util.*; public class Solution { static int[] arr1; static int[] arr2; static boolean[] visited = new boolean[9]; static int win_cnt = 0; static int lose_cnt = 0; static int[] result = new int[1]; public static void main(String[] args) { Scanner sc = new Scanner(System.in);...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-6808-%EA%B7%9C%EC%98%81%EC%9D%B4%EC%99%80-%EC%9D%B8%EC%98%81%EC%9D%B4%EC%9D%98-%EC%B9%B4%EB%93%9C%EA%B2%8C%EC%9E%84/",
        "teaser":null},{
        "title": "[D3] 1289. 원재의 메모리 복구하기",
        "excerpt":"1289. 원재의 메모리 복구하기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int sum = 0; String str = sc.next(); if (str.charAt(0) == '1') sum++; for...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-1289-%EC%9B%90%EC%9E%AC%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%B3%B5%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 1860. 진기의 최고급 붕어빵",
        "excerpt":"1860. 진기의 최고급 붕어빵 Code import java.util.Arrays; import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc = 1;tc&lt;=T;tc++) { int N = sc.nextInt(); // 총 손님 int M = sc.nextInt(); // 시간 텀 int K =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-1860-%EC%A7%84%EA%B8%B0%EC%9D%98-%EC%B5%9C%EA%B3%A0%EA%B8%89-%EB%B6%95%EC%96%B4%EB%B9%B5/",
        "teaser":null},{
        "title": "[D3] 9280. 진용이네 주차타워",
        "excerpt":"9280. 진용이네 주차타워 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { // 비어있는 주차 공간이 있는지 확인 // 비어있는 공간이 없다면, 빈 공간이 생길 때까지 차량을...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-9280-%EC%A7%84%EC%9A%A9%EC%9D%B4%EB%84%A4-%EC%A3%BC%EC%B0%A8%ED%83%80%EC%9B%8C/",
        "teaser":null},{
        "title": "[D4] 3289. 서로소 집합",
        "excerpt":"3289. 서로소 집합 Code import java.util.*; public class Solution { static int[] parents; static int[] rank; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int n = sc.nextInt(); // 원소 n개 int m...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D4-3289-%EC%84%9C%EB%A1%9C%EC%86%8C-%EC%A7%91%ED%95%A9/",
        "teaser":null},{
        "title": "[D3] 1220. Magnetic",
        "excerpt":"1220. Magnetic Code import java.util.Arrays; import java.util.Scanner; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); for(int tc=1; tc&lt;=10; tc++) { sc.nextInt(); int[][] arr = new int[100][100]; for(int i=0; i&lt;arr.length; i++) { for(int j=0; j&lt;arr.length; j++) { arr[i][j] = sc.nextInt(); } } int N_cnt...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-1220-Magnetic/",
        "teaser":null},{
        "title": "[D3] 1873. 상호의 배틀필드",
        "excerpt":"1873. 상호의 배틀필드 Code import java.util.*; public class Solution { static int H; static int W; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { H = sc.nextInt(); W = sc.nextInt(); char[][] map =...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-1873-%EC%83%81%ED%98%B8%EC%9D%98-%EB%B0%B0%ED%8B%80%ED%95%84%EB%93%9C/",
        "teaser":null},{
        "title": "[D3] 5549. 홀수일까 짝수일까",
        "excerpt":"5549.  홀수일까 짝수일까     Code   import java.util.*;   public class Solution {     public static void main(String[] args) {         Scanner sc = new Scanner(System.in);                   int T = sc.nextInt();                   for(int tc=1; tc&lt;=T; tc++) {             System.out.print(\"#\"+tc+\" \");             String str = sc.next();             int n = str.charAt(str.length()-1);                           if(n%2==1)                 System.out.println(\"Odd\");             else                 System.out.println(\"Even\");         }     } }   ","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5549-%ED%99%80%EC%88%98%EC%9D%BC%EA%B9%8C-%EC%A7%9D%EC%88%98%EC%9D%BC%EA%B9%8C/",
        "teaser":null},{
        "title": "[D3] 5603. 건초더미",
        "excerpt":"5603. 건초더미 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int[] arr = new int[N]; int sum = 0; for(int i=0; i&lt;N; i++) { arr[i] = sc.nextInt();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5603-%EA%B1%B4%EC%B4%88%EB%8D%94%EB%AF%B8/",
        "teaser":null},{
        "title": "[D3] 6692. 다솔이의 월급 상자",
        "excerpt":"6692. 다솔이의 월급 상자 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); double sum = 0.0; for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); for(int i=0; i&lt;N; i++) { double p = sc.nextDouble(); int x...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-6692-%EB%8B%A4%EC%86%94%EC%9D%B4%EC%9D%98-%EC%9B%94%EA%B8%89-%EC%83%81%EC%9E%90/",
        "teaser":null},{
        "title": "[D3] 7272. 안경이 없어!",
        "excerpt":"7272. 안경이 없어! Code import java.util.*; public class Solution { static int flag = 0; static boolean check_num = false; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { String str1 = sc.next(); String...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-7272-%EC%95%88%EA%B2%BD%EC%9D%B4-%EC%97%86%EC%96%B4!/",
        "teaser":null},{
        "title": "[D3] 8104. 조 만들기",
        "excerpt":"8104. 조 만들기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); int K = sc.nextInt(); int[][] arr = new int[K + 1][N...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-8104-%EC%A1%B0%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[D4] 1258. 행렬찾기",
        "excerpt":"1258. 행렬찾기 Code import java.util.*; class Array { int x; int y; int area; public Array(int x, int y, int area) { this.x = x; this.y = y; this.area = area; } } public class Solution { static int[] dr = { -1, 0, 1, 0 }; static int[] dc...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D4-1258-%ED%96%89%EB%A0%AC%EC%B0%BE%EA%B8%B0/",
        "teaser":null},{
        "title": "[D4] 1861. 정사각형 방",
        "excerpt":"1861. 정사각형 방 Code import java.util.*; class Room { int x; int y; int num; public Room(int x, int y, int num) { this.x = x; this.y = y; this.num = num; } } public class Solution { static int[] dr = { -1, 1, 0, 0 }; static int[]...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D4-1861-%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95-%EB%B0%A9/",
        "teaser":null},{
        "title": "[D3] 3449. 퍼펙트 셔플",
        "excerpt":"3449. 퍼펙트 셔플 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int N = sc.nextInt(); Queue&lt;String&gt; odd_queue = new LinkedList&lt;&gt;(); Queue&lt;String&gt; even_queue = new LinkedList&lt;&gt;(); int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-3499-%ED%8D%BC%ED%8E%99%ED%8A%B8-%EC%85%94%ED%94%8C/",
        "teaser":null},{
        "title": "[D3] 4299. 태혁이의 사랑은 타이밍",
        "excerpt":"4299. 태혁이의 사랑은 타이밍 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { int D = sc.nextInt(); int H = sc.nextInt(); int M = sc.nextInt(); int temp...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-4299-%ED%83%9C%ED%98%81%EC%9D%B4%EC%9D%98-%EC%82%AC%EB%9E%91%EC%9D%98-%ED%83%80%EC%9D%B4%EB%B0%8D/",
        "teaser":null},{
        "title": "[D3] 4676. 늘어지는 소리 만들기",
        "excerpt":"4676. 늘어지는 소리 만들기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for (int tc = 1; tc &lt;= T; tc++) { char[] arr = new char[21]; int[] cnt_arr = new int[21]; String str = sc.next();...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-4676-%EB%8A%98%EC%96%B4%EC%A7%80%EB%8A%94-%EC%86%8C%EB%A6%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 4751. 다솔이의 다이아몬드 장식",
        "excerpt":"4751. 다솔이의 다이아몬드 장식 Code import java.util.*;   public class Solution {     public static void main(String[] args) {         Scanner sc = new Scanner(System.in);           int T = sc.nextInt();         for (int tc = 1; tc &lt;= T; tc++) {             String str = sc.next();               for (int i = 0; i &lt;...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-4751-%EB%8B%A4%EC%86%94%EC%9D%B4%EC%9D%98-%EB%8B%A4%EC%9D%B4%EC%95%84%EB%AA%AC%EB%93%9C-%EC%9E%A5%EC%8B%9D/",
        "teaser":null},{
        "title": "[D3] 5356. 의석이의 세로로 말해요",
        "excerpt":"5356. 의석이의 세로로 말해요 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { char[][] arr = new char[5][15]; for(int i=0; i&lt;5; i++) { for(int j=0; j&lt;15; j++) { arr[i][j] = '.'; }...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5356-%EC%9D%98%EC%84%9D%EC%9D%B4%EC%9D%98-%EC%84%B8%EB%A1%9C%EB%A1%9C-%EB%A7%90%ED%95%B4%EC%9A%94/",
        "teaser":null},{
        "title": "[D3] 5515. 2016년 요일 맞추기",
        "excerpt":"5515. 2016년 요일 맞추기 Code import java.util.*; public class Solution { static int[] day = { 0, 30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }; static int[] arr = { 4, 5, 6, 0, 1, 2, 3 }; public static void main(String[] args) { Scanner...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5515-2016%EB%85%84-%EC%9A%94%EC%9D%BC-%EB%A7%9E%EC%B6%94%EA%B8%B0/",
        "teaser":null},{
        "title": "[D3] 5789. 현주의 상자 바꾸기",
        "excerpt":"5789. 현주의 상자 바꾸기 Code import java.util.*; public class Solution { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); for(int tc=1; tc&lt;=T; tc++) { int N = sc.nextInt(); int Q = sc.nextInt(); int[] arr = new int[N+1]; for(int i=1; i&lt;=Q; i++) { int...","categories": ["Swea"],
        "tags": [],
        "url": "http://localhost:4000/swea/D3-5789-%ED%98%84%EC%A3%BC%EC%9D%98-%EC%83%81%EC%9E%90-%EB%B0%94%EA%BE%B8%EA%B8%B0/",
        "teaser":null},{
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
        "title": "[lv1] 2016년",
        "excerpt":"level1. 2016년 Code package level1; public class programmers_level1_2016년 { class Solution { public String solution(int a, int b) { int[] day = {31, 29, 31, 30, 31,30, 31, 31, 30, 31, 30, 31}; String[] month = {\"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\", \"SAT\"}; int totalDay = 0; for(int i=0; i&lt;a;...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-2016%EB%85%84/",
        "teaser":null},{
        "title": "[lv1] 가운데글자가져오기",
        "excerpt":"level1.  가운데글자가져오기     Code   package level1;  public class programmers_level1_가운데글자가져오기 { \tclass Solution { \t    public String solution(String s) { \t        String answer = \"\"; \t        int len = s.length(); \t         \t        if(len%2==1){ \t            return Character.toString(s.charAt(len/2)); \t        }else{ \t            return s.substring(len/2-1, len/2+1); \t        } \t       \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EA%B0%80%EC%9A%B4%EB%8D%B0%EA%B8%80%EC%9E%90%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 나누어떨어지는숫자배열",
        "excerpt":"level1. 나누어떨어지는숫자배열 Code package lv1; import java.util.*; public class programmers_level1_나누어떨어지는숫자배열 { class Solution { public int[] solution(int[] arr, int divisor) { ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(); for (int i = 0; i &lt; arr.length; i++) { if (arr[i] % divisor == 0) list.add(arr[i]); } Collections.sort(list); int len = 1; int[]...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%82%98%EB%88%84%EC%96%B4%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%EC%88%AB%EC%9E%90%EB%B0%B0%EC%97%B4/",
        "teaser":null},{
        "title": "[lv1] 두 정수 사이의 합",
        "excerpt":"level1. 두 정수 사이의 합 Code package lv1; public class programmers_level1_두정수사이의합 { class Solution { public long solution(int a, int b) { long answer = 0; if(a==b) return a; else if(a&gt;b){ for(int i=b; i&lt;=a; i++){ answer += i; } } else{ for(int i=a; i&lt;=b; i++){ answer += i; } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%91%90%EC%A0%95%EC%88%98%EC%82%AC%EC%9D%B4%EC%9D%98%ED%95%A9/",
        "teaser":null},{
        "title": "[lv1] 모의고사",
        "excerpt":"level1. 모의고사 Code package lv1; import java.util.*; public class programmers_level1_모의고사 { public static int[] solution(int[] answers) { int[] answer = new int[3]; int len = answers.length; int[] fst_arr = { 1, 2, 3, 4, 5 }; int[] snd_arr = { 2, 1, 2, 3, 2, 4, 2, 5 }; int[]...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC/",
        "teaser":null},{
        "title": "[lv1] 문자열내림차순으로배치하기",
        "excerpt":"level1. 문자열내림차순으로배치하기 Code package lv1; import java.util.*; public class programmers_level1_문자열내림차순으로배치하기 { class Solution { public String solution(String s) { String answer = \"\"; List&lt;Character&gt; list = new LinkedList&lt;&gt;(); int len = s.length(); String[] arr = new String[len]; for(int i=0; i&lt;len; i++) arr[i] = Character.toString(s.charAt(i)); Arrays.sort(arr, Collections.reverseOrder()); for(String tmp : arr)...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 문자열내p와y의개수",
        "excerpt":"level1.  문자열내p와y의개수     Code   package lv1;  public class programmers_level1_문자열내p와y의개수 { \tclass Solution { \t    boolean solution(String s) { \t        s = s.toUpperCase(); \t        int pcnt = 0; \t        int ycnt = 0; \t         \t        for(int i=0; i&lt;s.length(); i++){ \t            if(s.charAt(i)=='P') \t                pcnt++; \t            else if(s.charAt(i)=='Y') \t                ycnt++; \t        } \t        if(pcnt == ycnt) \t            return true; \t        else \t            return false; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4p%EC%99%80y%EC%9D%98%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 문자열내마음대로정렬하기",
        "excerpt":"level1. 문자열내마음대로정렬하기 Code package lv1; import java.util.*; class Pair implements Comparable&lt;Pair&gt;{ int idx; int value; Pair(int idx, int value){ this.idx = idx; this.value = value; } @Override public int compareTo(Pair o) { return value-o.value; } } public class programmers_level1_문자열내마음대로정렬하기 { public static String[] solution(String[] strings, int n) { int len...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 문자열다루기기본",
        "excerpt":"level1.  문자열다루기기본     Code   package lv1;  public class programmers_level1_문자열다루기기본 { \tclass Solution { \t    public boolean solution(String s) { \t        int len = s.length(); \t        System.out.printf(\"%d\", 1); \t        if(len == 4 || len == 6){ \t            for(char c : s.toCharArray()){ \t                if(!Character.isDigit(c)) \t                    return false; \t            } \t            return true; \t        }else \t            return false; \t         \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AC%B8%EC%9E%90%EC%97%B4%EB%8B%A4%EB%A3%A8%EA%B8%B0%EA%B8%B0%EB%B3%B8/",
        "teaser":null},{
        "title": "[lv1] 문자열을정수로바꾸기",
        "excerpt":"level1.  문자열을정수로바꾸기     Code   package lv1;  public class programmers_level1_문자열을정수로바꾸기 { \tclass Solution { \t    public int solution(String s) { \t        int answer = 0; \t        answer = Integer.parseInt(s); \t        return answer; \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84%EC%A0%95%EC%88%98%EB%A1%9C%EB%B0%94%EA%BE%B8%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 서울에서김서방찾기",
        "excerpt":"level1.  서울에서김서방찾기     Code   package lv1;  public class programmers_level1_서울에서김서방찾기 { \tclass Solution { \t    public String solution(String[] seoul) { \t        StringBuilder sb = new StringBuilder(); \t        sb.append(\"김서방은 \"); \t        for(int i=0; i&lt;seoul.length; i++){ \t            if(seoul[i].equals(\"Kim\")){ \t                sb.append(i); \t                break; \t            } \t        } \t        sb.append(\"에 있다\"); \t        return sb.toString(); \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%EA%B9%80%EC%84%9C%EB%B0%A9%EC%B0%BE%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 수박수박수박수박수박수",
        "excerpt":"level1.  수박수박수박수박수박수     Code   package lv1;  public class programmers_level1_수박수박수박수박수박수 { \tclass Solution { \t    public String solution(int n) { \t        String answer = \"\"; \t        for(int i=0; i&lt;n/2; i++){ \t                answer+=\"수박\"; \t        } \t        if(n%2==0){ \t            return answer;     \t        }else{ \t            answer += \"수\"; \t        } \t        return answer; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98%EB%B0%95%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 시저암호",
        "excerpt":"level1. 시저암호 Code package lv1; public class programmers_level1_시저암호 { class Solution { public String solution(String s, int n) { String answer = \"\"; int tmp; for (int i = 0; i &lt; s.length(); i++) { tmp = 0; if (s.charAt(i) &gt;= 65 &amp;&amp; s.charAt(i) &lt;= 90) { tmp = s.charAt(i)...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%8B%9C%EC%A0%80%EC%95%94%ED%98%B8/",
        "teaser":null},{
        "title": "[lv1] 실패율",
        "excerpt":"level1. 실패율 Code package lv1; import java.util.*; class User implements Comparable&lt;User&gt; { int idx; double failrate; User(int idx, double failrate) { this.idx = idx; this.failrate = failrate; } @Override public int compareTo(User o) { if(failrate &lt; o.failrate) return 1; else if(failrate == o.failrate){ if(idx &lt; o.idx) return -1; else return...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%8B%A4%ED%8C%A8%EC%9C%A8/",
        "teaser":null},{
        "title": "[lv1] 완주하지못한선수",
        "excerpt":"level1. 완주하지못한선수 Code package lv1; import java.util.*; public class programmers_level1_완주하지못한선수 { public static String solution(String[] participant, String[] completion) { HashSet&lt;String&gt; hashSet = new HashSet&lt;&gt;(); for (String s : participant) hashSet.add(s); Iterator&lt;String&gt; it = hashSet.iterator(); ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(); while (it.hasNext()) { list.add(it.next()); } it = list.iterator(); while (it.hasNext()) {...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80%EB%AA%BB%ED%95%9C%EC%84%A0%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 이상한문자만들기",
        "excerpt":"level1. 이상한문자만들기 Code package lv1; import java.util.*; public class programmers_level1_이상한문자만들기 { class Solution { public String solution(String s) { s += \" \"; StringBuilder sb = new StringBuilder(); Queue&lt;String&gt; queue = new LinkedList&lt;&gt;(); for (int i = 0; i &lt; s.length(); i++) { if (s.charAt(i) == ' ') { queue.add(sb.toString());...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%9D%B4%EC%83%81%ED%95%9C%EB%AC%B8%EC%9E%90%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 자릿수더하기",
        "excerpt":"level1.  자릿수더하기     Code   package lv1;  public class programmers_level1_자릿수더하기 {  \tpublic class Solution { \t    public int solution(int n) { \t        int answer = 0; \t        String str = n+\"\"; \t         \t        for(int i=0; i&lt;str.length(); i++){ \t            answer += str.charAt(i)-'0'; \t        } \t        return answer; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%9E%90%EB%A6%BF%EC%88%98%EB%8D%94%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 자연수뒤집어배열로만들기",
        "excerpt":"level1.  자연수뒤집어배열로만들기     Code   package lv1;  import java.util.Arrays;  public class programmers_level1_자연수뒤집어배열로만들기 {  \tclass Solution { \t    public int[] solution(long n) { \t        String str = n+\"\"; \t        int len = str.length(); \t        int[] answer = new int[len]; \t         \t        for(int i=0; i&lt;len; i++){ \t            answer[i] = str.charAt(len-i-1)-'0'; \t        } \t        return answer; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%9E%90%EC%97%B0%EC%88%98%EB%92%A4%EC%A7%91%EC%96%B4%EB%B0%B0%EC%97%B4%EB%A1%9C%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 정수내림차순으로배치하기",
        "excerpt":"level1. 정수내림차순으로배치하기 Code package lv1; import java.util.*; public class programmers_level1_정수내림차순으로배치하기 { class Solution { public long solution(long n) { String ans = \"\"; PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;(Collections.reverseOrder()); String str = n+\"\"; int len = str.length(); for(int i=0; i&lt;len; i++) pq.add(str.charAt(i)-'0'); while(!pq.isEmpty()) ans += (pq.poll()+\"\"); return Long.valueOf(ans); } } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%A0%95%EC%88%98%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 정수내림차순으로배치하기",
        "excerpt":"level1.  정수내림차순으로배치하기     Code   package lv1; import java.util.*;  public class programmers_level1_정수제곱근판별 { \tclass Solution { \t    public long solution(long n) { \t        long answer = 0; \t        answer = ((long)Math.sqrt(n)*(long)Math.sqrt(n) == n) ? ((long)Math.sqrt(n)+1)*((long)Math.sqrt(n)+1) : -1; \t        return answer; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%A0%95%EC%88%98%EC%A0%9C%EA%B3%B1%EA%B7%BC%ED%8C%90%EB%B3%84/",
        "teaser":null},{
        "title": "[lv1] 제일작은수제거하기",
        "excerpt":"level1. 제일작은수제거하기 Code package lv1; import java.util.*; public class programmers_level1_제일작은수제거하기 { class Solution { public int[] solution(int[] arr) { int len = arr.length; if(len == 1){ arr[0] = -1; return arr; }else{ int[] answer = new int[len-1]; int min = Integer.MAX_VALUE; for(int i=0; i&lt;len; i++){ min = Math.min(min, arr[i]); }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%A0%9C%EC%9D%BC%EC%9E%91%EC%9D%80%EC%88%98%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 직사각형별찍기",
        "excerpt":"level1.  직사각형별찍기     Code   package lv1; import java.util.Scanner;  public class programmers_level1_직사각형별찍기 { \tpublic static void main(String[] args) {         Scanner sc = new Scanner(System.in);         int a = sc.nextInt();         int b = sc.nextInt();         String str = \"1234\";          for(int i=0; i&lt;b; i++){             for(int j=0; j&lt;a; j++){                 System.out.print(\"*\");                             }             System.out.println();         }     }  }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95%EB%B3%84%EC%B0%8D%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 짝수와홀수",
        "excerpt":"level1.  짝수와홀수     Code   package lv1;  public class programmers_level1_짝수와홀수 { \tclass Solution { \t    public String solution(int num) { \t        String answer = \"\"; \t        answer += num%2 == 0 ? \"Even\" : \"Odd\"; \t        return answer; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%A7%9D%EC%88%98%EC%99%80%ED%99%80%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 체육복",
        "excerpt":"level1. 체육복 Code package lv1; import java.util.*; public class programmers_level1_체육복 { class Solution { public int solution(int n, int[] lost, int[] reserve) { int answer = 0; int[] cnt = new int[n+1]; for(int i=1; i&lt;=n; i++) cnt[i] = 1; for(int l: lost) cnt[l]--; for(int r: reserve) cnt[r]++; for(int i=1; i&lt;=n;...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%B2%B4%EC%9C%A1%EB%B3%B5/",
        "teaser":null},{
        "title": "[lv1] 콜라츠추측",
        "excerpt":"level1. 콜라츠추측 Code package lv1; import java.util.Arrays; public class programmers_level1_콜라츠추측 { class Solution { public int solution(int num) { int answer = 0; long n = num; while(n!=1){ if(n%2==0) n /= 2; else n = (n*3+1); answer++; } if(answer &gt; 500) return -1; else if(n==1) return answer; else return -1;...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%BD%9C%EB%9D%BC%EC%B8%A0%EC%B6%94%EC%B8%A1/",
        "teaser":null},{
        "title": "[lv1] 평균구하기",
        "excerpt":"level1.  평균구하기     Code   package lv1;  public class programmers_level1_평균구하기 { \tclass Solution { \t    public double solution(int[] arr) { \t        double answer = 0; \t        int len = arr.length; \t        for(int tmp : arr){ \t            answer += tmp; \t        } \t        return answer/len; \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%ED%8F%89%EA%B7%A0%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 하샤드수",
        "excerpt":"level1.  하샤드수     Code   package lv1;  public class programmers_level1_하샤드수 { \tclass Solution { \t    public boolean solution(int x) { \t        int sum = 0; \t        int num = x; \t        while(num != 0){ \t            sum += num%10; \t            num /= 10; \t        } \t        if(x % sum == 0) \t            return true; \t        else \t            return false; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%ED%95%98%EC%83%A4%EB%93%9C%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 핸드폰번호가리기",
        "excerpt":"level1.  핸드폰번호가리기     Code   package lv1;  public class programmers_level1_핸드폰번호가리기 { \tclass Solution { \t    public String solution(String phone_number) { \t        String answer = \"\"; \t        int len = phone_number.length(); \t        for(int i=0; i&lt;len-4; i++){ \t            answer += \"*\"; \t        } \t        answer += phone_number.substring(len-4, len); \t        return answer; \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%ED%95%B8%EB%93%9C%ED%8F%B0%EB%B2%88%ED%98%B8%EA%B0%80%EB%A6%AC%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv1] 다트게임",
        "excerpt":"level1. 다트게임 Code package lv1; import java.util.*; public class programmers_lv1_다트게임 { // 10을 처리하는게 어려웠던 문제 class Solution { public int solution(String dartResult) { StringBuilder sb = new StringBuilder(); int[] arr = new int[3]; Arrays.fill(arr, 1); ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(); sb.append(dartResult.charAt(0) + \"\"); for (int i = 1; i...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%8B%A4%ED%8A%B8%EA%B2%8C%EC%9E%84/",
        "teaser":null},{
        "title": "[lv1] 비밀지도",
        "excerpt":"level1. 비밀지도 Code package lv1; import java.util.*; public class programmers_lv1_비밀지도 { public static String[] solution(int n, int[] arr1, int[] arr2) { String[] answer = new String[n]; StringBuilder sb = new StringBuilder(); for (int i = 0; i &lt; n; i++) { String tmp1 = Integer.toBinaryString(arr1[i]); String tmp2 = Integer.toBinaryString(arr2[i]); String...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EB%B9%84%EB%B0%80%EC%A7%80%EB%8F%84/",
        "teaser":null},{
        "title": "[lv1] 최대공약수와최소공배수",
        "excerpt":"level1. 최대공약수와최소공배수 Code package lv1; import java.util.*; class programmers_lv1_최대공약수와최소공배수 { public static void main(String[] args){ Scanner sc = new Scanner(System.in); int n = sc.nextInt(); int m = sc.nextInt(); int[] answer = new int[2]; int temp; if(m &lt; n){ temp = n; n = m; m = temp; } if(m %...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] 행렬의덧셈",
        "excerpt":"level1.  행렬의덧셈     Code   package lv1;  public class programmers_lv1_행렬의덧셈 { \tclass Solution { \t    public int[][] solution(int[][] arr1, int[][] arr2) { \t        int[][] answer = new int[arr1.length][arr1[0].length]; \t        for(int i=0; i&lt;arr1.length; i++){ \t            for(int j=0; j&lt;arr1[0].length; j++){ \t                answer[i][j] = arr1[i][j]+arr2[i][j]; \t            } \t        } \t        return answer; \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%ED%96%89%EB%A0%AC%EC%9D%98%EB%8D%A7%EC%85%88/",
        "teaser":null},{
        "title": "[lv1] K번째수",
        "excerpt":"level1. K번째수 Code package lv1; import java.util.*; public class programmers_lv1_K번째수 { class Solution { public int[] solution(int[] array, int[][] commands) { int[] answer = new int[commands.length]; for (int i = 0; i &lt; commands.length; i++) { int m = commands[i][0]; int n = commands[i][1]; int k = commands[i][2]; List&lt;Integer&gt; list...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-K%EB%B2%88%EC%A7%B8%EC%88%98/",
        "teaser":null},{
        "title": "[lv1] x만큼간격이있는n개의숫자",
        "excerpt":"level1.  x만큼간격이있는n개의숫자     Code   package lv1;  public class programmers_lv1_x만큼간격이있는n개의숫자 { \tclass Solution { \t    public long[] solution(int x, int n) { \t      long[] answer = new long[n]; \t      for(int i=0;i&lt;n;i++){ \t          answer[i] = (Long.valueOf(x) * (i+1));  \t      } \t      return answer; \t    } \t} }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-x%EB%A7%8C%ED%81%BC%EA%B0%84%EA%B2%A9%EC%9D%B4%EC%9E%88%EB%8A%94n%EA%B0%9C%EC%9D%98%EC%88%AB%EC%9E%90/",
        "teaser":null},{
        "title": "[lv2] 124나라의숫자",
        "excerpt":"level2. 124나라의숫자 Code package lv2; public class programmers_level2_124나라의숫자 { public String solution(int n) { String answer = \"\"; int quotient = n; int remainder = -1; while(quotient!=0){ remainder = quotient % 3; quotient = quotient/3; if(remainder == 0 ){ //나누어 떨어지면 몫을 1빼주고 4를 더함 answer = \"4\"+answer; quotient--; }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-124%EB%82%98%EB%9D%BC%EC%9D%98%EC%88%AB%EC%9E%90/",
        "teaser":null},{
        "title": "[lv2] 가장큰수",
        "excerpt":"level2. 가장큰수 Code package lv2; import java.util.*; public class programmers_level2_가장큰수 { public static String solution(int[] numbers) { String answer = \"\"; String[] str = new String[numbers.length]; for (int i = 0; i &lt; numbers.length; i++) { str[i] = String.valueOf(numbers[i]); } Arrays.sort(str, new Comparator&lt;String&gt;() { @Override public int compare(String a, String...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EA%B0%80%EC%9E%A5%ED%81%B0%EC%88%98/",
        "teaser":null},{
        "title": "[lv2] 다리를지나는트럭",
        "excerpt":"level2. 다리를지나는트럭 Code package lv2; import java.util.*; class Truck{ int weight, index; public Truck(int weight, int index){ this.weight = weight; this.index = index; } } class programmers_level2_다리를지나는트럭 { public int solution(int bridge_length, int weight, int[] truck_weights) { Queue&lt;Integer&gt; waitTruck = new LinkedList&lt;&gt;(); List&lt;Truck&gt; workingTruck = new ArrayList&lt;&gt;(); for(int truck :...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EB%8B%A4%EB%A6%AC%EB%A5%BC%EC%A7%80%EB%82%98%EB%8A%94%ED%8A%B8%EB%9F%AD/",
        "teaser":null},{
        "title": "[lv2] 쇠막대기",
        "excerpt":"level2. 쇠막대기 Code package lv2; public class programmers_level2_쇠막대기 { class Solution { public int solution(String arrangement) { int answer = 0; //결과 저장할 변수 int stick = 0; //누적 막대기의 갯수 for(int i=0; i&lt;arrangement.length(); i++){ if(arrangement.charAt(i)=='('){ stick++; } else if(arrangement.charAt(i)==')'){ stick--; if(arrangement.charAt(i-1)=='('){ answer += stick; } else answer++; } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv2] 위장",
        "excerpt":"level2. 위장 Code package lv2; import java.util.*; public class programmers_level2_위장 { class Solution { public int solution(String[][] clothes) { int answer = 1; HashMap&lt;String, Integer&gt; map = new HashMap&lt;&gt;(); for(int i=0; i&lt;clothes.length; i++){ String key = clothes[i][1]; if(!map.containsKey(key)) { map.put(key, 1); } else { map.put(key, map.get(key) + 1); } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%9C%84%EC%9E%A5/",
        "teaser":null},{
        "title": "[lv2] 전화번호목록",
        "excerpt":"level2.  전화번호목록     Code   package lv2;  public class programmers_level2_전화번호목록 {  \tclass Solution { \t    public boolean solution(String[] phone_book) { \t        boolean answer = true; \t        for(int i=0; i&lt;phone_book.length-1; i++){ \t            for(int j=i+1; j&lt;phone_book.length; j++){ \t                if(phone_book[i].startsWith(phone_book[j])) \t                    return false; \t                if(phone_book[j].startsWith(phone_book[i])) \t                    return false; \t            } \t        } \t        return true; \t    } \t} \t }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8%EB%AA%A9%EB%A1%9D/",
        "teaser":null},{
        "title": "[lv2] 주식가격",
        "excerpt":"level2. 주식가격 Code package lv2; import java.util.*; public class programmers_level2_주식가격 { class Solution { public int[] solution(int[] prices) { int[] answer = new int[prices.length]; int len = prices.length; for(int i=0; i&lt;len-1; i++){ int num = prices[i]; int time = 0; for(int j=i+1; j&lt;len; j++){ if(num &lt;= prices[j]){ time++; }else{ time++;...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%A3%BC%EC%8B%9D%EA%B0%80%EA%B2%A9/",
        "teaser":null},{
        "title": "[lv2] 탑",
        "excerpt":"level2. 탑 Code package lv2; import java.util.Arrays; import java.util.Stack; public class programmers_level2_탑 { public static void main(String[] args) { int[] heights = {1,5,3,6,7,6,5}; System.out.println(Arrays.toString(solution(heights))); } public static int[] solution(int[] heights) { // 6,9,5,7,4 // 1,2,3,4,5 Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(); int[] answer = new int[heights.length]; for(int i:heights){ stack.push(i); } while(!stack.isEmpty()){...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%ED%83%91/",
        "teaser":null},{
        "title": "[lv2] 프린터",
        "excerpt":"level2. 프린터 Code package lv2; import java.util.*; class Document{ int idx, rank, result; public Document(int idx, int rank, int result){ this.idx = idx; this.rank = rank; this.result = result; } } public class programmers_level2_프린터 { public static void main(String[] args) { int[] priorities = {1,1,9,1,1,1}; int location = 0; System.out.println(solution(priorities,...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%ED%94%84%EB%A6%B0%ED%84%B0/",
        "teaser":null},{
        "title": "[lv2] Hindex",
        "excerpt":"level2. Hindex Code package lv2; import java.util.Arrays; public class programmers_level2_Hindex { class Solution { public int solution(int[] citations) { int total = 0; Arrays.sort(citations); int result = 0; for(int i=0; i &lt; citations.length; i++) { int smaller = Math.min(citations[i], citations.length-i); result = Math.max(result, smaller); } return result; } } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-Hindex/",
        "teaser":null},{
        "title": "[lv1] 행렬의곱셈",
        "excerpt":"level1. 행렬의곱셈 Code package lv1; import java.util.Arrays; public class programmers_lv1_행렬의곱셈 { public static int[][] solution(int[][] arr1, int[][] arr2) { int a1h = arr1.length; int a1w = arr1[0].length; int a2h = arr2.length; int a2w = arr2[0].length; int[][] answer = new int[a1h][a2w]; int temp = 0; for (int i = 0; i...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv1-%ED%96%89%EB%A0%AC%EC%9D%98%EA%B3%B1%EC%85%88/",
        "teaser":null},{
        "title": "[lv2] 구명보트",
        "excerpt":"level2. 구명보트 Code package lv2; import java.util.*; public class programmers_lv2_구명보트 { class Solution { public int solution(int[] people, int limit) { int answer = 0; int len = people.length; Arrays.sort(people); int i=0; for(int j=len-1; j&gt;=i; j--){ if(people[j]+people[i] &gt; limit){ answer++; }else{ answer++; i++; } } return answer; } } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8/",
        "teaser":null},{
        "title": "[lv2] 기능개발",
        "excerpt":"level2. 기능개발 Code package lv2; import java.util.*; public class programmers_lv2_기능개발 { public static int[] solution(int[] progresses, int[] speeds) { int len = speeds.length; int[] work = new int[len]; for (int i = 0; i &lt; len; i++) { for (int j = 1; j &lt; 100; j++) { if (progresses[i]...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C/",
        "teaser":null},{
        "title": "[lv2] 다음큰숫자",
        "excerpt":"level2. 다음큰숫자 Code package lv2; public class programmers_lv2_다음큰숫자 { public static void main(String[] args) { int num = 78; String a = Integer.toBinaryString(num); System.out.println(a); int cnt = 0; for(int i=0; i&lt;a.length(); i++) { if(a.charAt(i)-'0' == 1) cnt++; } String tmp; while(true) { tmp = Integer.toBinaryString(++num); int ccnt = 0; for(int...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EB%8B%A4%EC%9D%8C%ED%81%B0%EC%88%AB%EC%9E%90/",
        "teaser":null},{
        "title": "[lv2] 숫자의표현",
        "excerpt":"level2. 숫자의표현 Code package lv2; public class programmers_lv2_숫자의표현 { class Solution { public int solution(int n) { int answer = 1; for(int i=n/2+1; i&gt;=1; i--){ int start = i; int tmp = 0; while(tmp &lt; n){ tmp += start; start--; } if(tmp == n) answer++; } return answer; } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%88%AB%EC%9E%90%EC%9D%98%ED%91%9C%ED%98%84/",
        "teaser":null},{
        "title": "[lv2] 올바른괄호",
        "excerpt":"level2.  올바른괄호     Code   package lv2;  import java.util.*;  public class programmers_lv2_올바른괄호 {  \tclass Solution { \t    boolean solution(String s) { \t        Stack&lt;Character&gt; stack = new Stack&lt;&gt;(); \t        for(int i=0; i&lt;s.length(); i++){ \t            if(s.charAt(i) == '('){ \t                stack.push(s.charAt(i)); \t            }else{ \t                if(stack.isEmpty()) \t                    return false; \t                stack.pop(); \t            } \t        } \t        if(stack.isEmpty()) \t            return true; \t        return false; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%98%AC%EB%B0%94%EB%A5%B8%EA%B4%84%ED%98%B8/",
        "teaser":null},{
        "title": "[lv2] 조이스틱",
        "excerpt":"level2. 조이스틱 Code package lv2; import java.util.Arrays; public class programmers_lv2_조이스틱 { static int solution(String name) { int answer = 0; // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z char[] arr =...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1/",
        "teaser":null},{
        "title": "[lv2] 최댓값과최솟값",
        "excerpt":"level2.  최댓값과최솟값     Code   package lv2; import java.util.*;  public class programmers_lv2_최댓값과최솟값 {  \tclass Solution { \t    public String solution(String s) { \t        String answer = \"\"; \t        String[] strArr = s.split(\" \"); \t        int[] arr = new int[strArr.length]; \t         \t        for(int i=0; i&lt;strArr.length; i++) \t            arr[i] = Integer.parseInt(strArr[i]); \t         \t        Arrays.sort(arr); \t         \t        return arr[0]+\" \"+arr[arr.length-1]; \t    } \t} }     ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%B5%9C%EB%8C%93%EA%B0%92%EA%B3%BC%EC%B5%9C%EC%86%9F%EA%B0%92/",
        "teaser":null},{
        "title": "[lv2] 카펫",
        "excerpt":"level2. 카펫 Code package lv2; public class programmers_lv2_카펫 { class Solution { public int[] solution(int brown, int yellow) { int[] answer = new int[2]; int area = brown+yellow; for(int i=3; i&lt;area; i++){ //세로 if(area % i == 0){ int tmp = area/i; //가로 if((tmp-2)*(i-2) == yellow){ answer[0] = tmp; answer[1]...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%EC%B9%B4%ED%8E%AB/",
        "teaser":null},{
        "title": "[lv2] 큰수만들기",
        "excerpt":"level2. 큰수만들기 Code package lv2; import java.util.*; public class programmers_lv2_큰수만들기 { static int sel; static ArrayList&lt;Integer&gt; list; static int[] arr; static int len; static int max; public static String solution(String number, int k) { list = new ArrayList&lt;&gt;(); len = number.length(); arr = new int[len]; for (int i = 0;...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%ED%81%B0%EC%88%98%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv2] 피보나치수",
        "excerpt":"level2.  피보나치수     Code   package lv2;  public class programmers_lv2_피보나치수 { \tclass Solution { \t    public int solution(int n) { \t        int answer = 0; \t        int[] dp = new int[n+1]; \t        dp[0] = 0; \t        dp[1] = 1; \t         \t        for(int i=2; i&lt;=n; i++){ \t        dp[i] = dp[i-1]%1234567+dp[i-2]%1234567;             \t        } \t        return dp[n]%1234567; \t    } \t} }  }    ","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%EC%88%98/",
        "teaser":null},{
        "title": "[lv2] JadenCase문자열만들기",
        "excerpt":"level2. JadenCase문자열만들기 Code package lv2; import java.util.*; public class programmers_lv2_JadenCase문자열만들기 { public static String solution(String s) { StringBuilder sb = new StringBuilder(); String first = s.charAt(0)+\"\"; sb.append(first.toUpperCase()); for(int i=1; i&lt;s.length(); i++) { String tmp = s.charAt(i)+\"\"; if(tmp.equals(\" \")) { sb.append(\" \"); }else if(s.charAt(i-1) == ' ') { sb.append(tmp.toUpperCase()); }else {...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv2-JadenCase%EB%AC%B8%EC%9E%90%EC%97%B4%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv3] 가장긴팰린드롬",
        "excerpt":"level3. 가장긴팰린드롬 Code package lv3; public class programmers_lv3_가장긴팰린드롬 { public int solution(String s) { int oddCount = 0; int evenCount = 0; if(s.length() == 1) { //길이가 1이면 1반환 return 1; } for(int i = 0; i &lt; s.length()-1; i++) { if(i&gt;0 &amp;&amp; s.charAt(i-1) == s.charAt(i+1)) { //홀 수 int...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EA%B0%80%EC%9E%A5%EA%B8%B4%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC/",
        "teaser":null},{
        "title": "[lv3] 네트워크",
        "excerpt":"level3. 네트워크 Code package lv3; public class programmers_lv3_네트워크 { class Solution { boolean[][] visited; public int solution(int n, int[][] computers) { int answer = 0; visited = new boolean[n][n]; for(int i=0; i&lt;n; i++){ if(!visited[i][i]){ dfs(i, n, computers); answer++; } } return answer; } void dfs(int node, int n, int[][] computers){...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/",
        "teaser":null},{
        "title": "[lv3] 단속카메라",
        "excerpt":"level3. 단속카메라 Code package lv3; import java.util.*; public class programmers_lv3_단속카메라 { class Solution { public int solution(int[][] routes) { int answer = 0; //끝나는 시간으로 정렬 Arrays.sort(routes, (a,b) -&gt; a[1]-b[1]); int min = Integer.MIN_VALUE; for(int[] route : routes) { if(min &lt; route[0]) { min = route[1]; ++answer; } } return...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EB%8B%A8%EC%86%8D%EC%B9%B4%EB%A9%94%EB%9D%BC/",
        "teaser":null},{
        "title": "[lv3] 단어변환",
        "excerpt":"level3. 단어변환 Code package lv3; public class programmers_lv3_단어변환 { int answer; // 최소 단계 boolean[] used; // 단어를 사용 중인지를 판단하는 visited와 같은 역할을 하는 배열 public int solution(String begin, String target, String[] words) { answer = 51; // 단어 최대값이 50이므로 used = new boolean[words.length]; dfs(begin, target, 0, words);...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EB%8B%A8%EC%96%B4%EB%B3%80%ED%99%98/",
        "teaser":null},{
        "title": "[lv3] 멀리뛰기",
        "excerpt":"level3. 멀리뛰기 Code package lv3; public class programmers_lv3_멀리뛰기 { class Solution { public long solution(int n) { long answer = 0; long[] dp = new long[2001]; // 메모리 때문에 n+1로 하면 안된다.. dp[1] = 1; dp[2] = 2; for(int i=3; i&lt;=n; i++){ dp[i] = (dp[i-1]+dp[i-2])%1234567; } return dp[n]; } }...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EB%A9%80%EB%A6%AC%EB%9B%B0%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv3] 섬연결하기",
        "excerpt":"level3. 섬연결하기 Code package lv3; import java.util.*; public class programmers_lv3_섬연결하기 { class Solution { int[] findParent; // 부모와 자식의 정보가 담긴 배열 public int find(int child) { // 부모 찾기 if (findParent[child] == child) return child; else return findParent[child] = find(findParent[child]); } public int solution(int n, int[][] costs) { Arrays.sort(costs,...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EC%84%AC%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[lv3] 여행경로",
        "excerpt":"level3. 여행경로 Code package lv3; import java.util.*; public class programmers_lv3_여행경로 { boolean[] visited; // 방문한지 안한지를 체크하는 visited배열 ArrayList&lt;String&gt; answers; public String[] solution(String[][] tickets) { visited = new boolean[tickets.length]; answers = new ArrayList&lt;String&gt;(); int count = 0; // 몇개의 공항을 들렸는지 알려주는 카운트 dfs(count, \"ICN\", \"ICN\", tickets); Collections.sort(answers); // 답들...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C/",
        "teaser":null},{
        "title": "[lv3] 최고의집합",
        "excerpt":"level3. 최고의집합 Code package lv3; public class programmers_lv3_최고의집합 { public int[] solution(int n, int s) { if(n &gt; s) { return new int[] {-1}; } int[] answer = new int[n]; if(s % n ==0) { //나눠지는 경우 for(int i = 0 ; i &lt; n; i++) { answer[i] = s...","categories": ["Programmers"],
        "tags": [],
        "url": "http://localhost:4000/programmers/programmers-lv3-%EC%B5%9C%EA%B3%A0%EC%9D%98%EC%A7%91%ED%95%A9/",
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
        "excerpt":"2023.03.23 TIL 자바 공부 Java - 스트림 정리 알고리즘 (참고. https://github.com/encrypted-def/basic-algo-lecture/blob/master/workbook/0x03.md) 구분 문제 분류 문제 문제 제목 풀이 url 추가 개념 배열 연습 문제 10808 알파벳 개수 정답 코드   배열 기본 문제✔ 2577 숫자의 개수 정답 코드   배열 기본 문제✔ 1475 방 번호 정답 코드   배열 기본...","categories": ["TIL"],
        "tags": [],
        "url": "http://localhost:4000/til/TIL-2023.03.23-TIL/",
        "teaser":null}]
