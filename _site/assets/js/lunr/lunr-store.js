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
        "title": "[백준] 2991. 사나운 개",
        "excerpt":"2991. 사나운 개 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int A = sc.nextInt(); int B = sc.nextInt(); int C = sc.nextInt(); int D = sc.nextInt(); int P = sc.nextInt(); int M = sc.nextInt(); int N = sc.nextInt(); int[]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2991-%EC%82%AC%EB%82%98%EC%9A%B4-%EA%B0%9C/",
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
        "title": "[백준] 1100. 하얀 칸",
        "excerpt":"1100. 하얀 칸 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); char[][] map = new char[8][8]; for (int i = 0; i &lt; 8; i++) { String str = sc.next(); for (int j = 0; j &lt; 8; j++) {...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1100-%ED%95%98%EC%96%80-%EC%B9%B8/",
        "teaser":null},{
        "title": "[백준] 1236. 성 지키기",
        "excerpt":"1236. 성 지키기 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); // 세로 크기 int M = sc.nextInt(); // 가로 크기 char[][] arr = new char[N][M]; for (int i = 0; i &lt; N; i++) {...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1236-%EC%84%B1-%EC%A7%80%ED%82%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 1592. 영식이와 친구들",
        "excerpt":"1592. 영식이와 친구들 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); // 인원수 int M = sc.nextInt(); // 공 제한 횟수 int L = sc.nextInt(); // 넘길 번수 int[] cnt_arr = new int[N + 1]; int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1592-%EC%98%81%EC%8B%9D%EC%9D%B4%EC%99%80-%EC%B9%9C%EA%B5%AC%EB%93%A4/",
        "teaser":null},{
        "title": "[백준] 2941. 크로아티아 알파벳",
        "excerpt":"2941. 크로아티아 알파벳 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); String str = sc.next(); char[] arr = new char[str.length()]; for (int i = 0; i &lt; str.length(); i++) { arr[i] = str.charAt(i); } int cnt = 0; for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2941-%ED%81%AC%EB%A1%9C%EC%95%84%ED%8B%B0%EC%95%84-%EC%95%8C%ED%8C%8C%EB%B2%B3/",
        "teaser":null},{
        "title": "[백준] 2999. 비밀 이메일",
        "excerpt":"2999. 비밀 이메일 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); String str = sc.next(); int N = str.length(); int temp = 0; int max = 0; for (int i = 1; i &lt;= N; i++) { if (i &lt;=...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2999-%EB%B9%84%EB%B0%80-%EC%9D%B4%EB%A9%94%EC%9D%BC/",
        "teaser":null},{
        "title": "[백준] 8320. 직사각형을 만드는 방법",
        "excerpt":"8320. 직사각형을 만드는 방법 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int n = sc.nextInt(); int cnt = 0; for (int i = 1; i &lt;= n; i++) { for (int j = i; j &lt;= n; j++) {...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-8320-%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95%EC%9D%84-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B0%A9%EB%B2%95/",
        "teaser":null},{
        "title": "[백준] 2563. 색종이",
        "excerpt":"2563. 색종이 Code import java.util.*; public class Main { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); // 색종이의 개수 int[][] arr = new int[100][100]; for (int k = 1; k &lt;= N; k++) { int x = sc.nextInt(); int y = sc.nextInt();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2563-%EC%83%89%EC%A2%85%EC%9D%B4/",
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
        "title": "[백준] 11724. 연결 요소의 개수",
        "excerpt":"11724. 연결 요소의 개수 Code import java.util.*; public class 연결요소의개수 { static int[][] adj; static boolean[] visited; static int N; static int cnt = 0; public static void main(String[] args) { Scanner sc = new Scanner(System.in); N = sc.nextInt(); //정점의 개수 int M = sc.nextInt(); //간선의 개수 adj = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11724-%EC%97%B0%EA%B2%B0-%EC%9A%94%EC%86%8C%EC%9D%98-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 1260. DFS와 BFS",
        "excerpt":"1260. DFS와 BFS Code import java.util.*; public class DFS와BFS { static int[][] adj; static int N, M; static boolean[] visited; public static void main(String[] args) { Scanner sc = new Scanner(System.in); N = sc.nextInt(); M = sc.nextInt(); int V = sc.nextInt(); adj = new int[N + 1][N + 1]; for...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1260-DFS%EC%99%80-BFS/",
        "teaser":null},{
        "title": "[백준] 13023. ABCDE",
        "excerpt":"13023. ABCDE Code import java.util.*; public class ABCDE{ static int N, M, ans; static ArrayList&lt;Integer&gt;[] adj; static boolean[] visited; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); //사람의 수 - 정점 int M = sc.nextInt(); //친구 관계의 수 - 간선 adj = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-13023-ABCDE/",
        "teaser":null},{
        "title": "[백준] 2667. 단지번호붙이기",
        "excerpt":"2667. 단지번호붙이기 Code package BFS; import java.io.*; import java.util.*; public class boj_2667_단지번호붙이기 { static int N; static int max = 0; static int[][] map; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static PriorityQueue&lt;Integer&gt; pq; public static void...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2667-%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 4963. 섬의 개수",
        "excerpt":"4963. 섬의 개수 Code import java.util.*; public class 섬의개수_DFS { static int w, h; static int[] dr = { -1, -1, -1, 0, 1, 1, 1, 0 }; static int[] dc = { -1, 0, 1, 1, 1, 0, -1, -1 }; static int[][] map; public static void main(String[] args)...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-4963-%EC%84%AC%EC%9D%98-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 1012. 유기농 배추",
        "excerpt":"1012. 유기농 배추 Code package BFS; import java.util.*; import java.io.*; public class boj_1012_유기농배추 { static int M, N, K; private static int[][] map; private static int[][] dist; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; public static void...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1012-%EC%9C%A0%EA%B8%B0%EB%86%8D-%EB%B0%B0%EC%B6%94/",
        "teaser":null},{
        "title": "[백준] 1931. 회의실배정",
        "excerpt":"1931. 회의실배정 Code import java.util.*; class Time { int start; int end; public Time(int start, int end) { this.start = start; this.end = end; } } public class 회의실배정 { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); ArrayList&lt;Time&gt; list = new ArrayList&lt;Time&gt;();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1931-%ED%9A%8C%EC%9D%98%EC%8B%A4%EB%B0%B0%EC%A0%95/",
        "teaser":null},{
        "title": "[백준] 2178. 미로 탐색",
        "excerpt":"2178. 미로 탐색 Code package BFS; import java.util.*; import java.io.*; public class boj_2178_미로탐색 { static int N, M; static int[][] map, dist; static int[] dr = {-1, 1, 0, 0}; static int[] dc = {0, 0, 1, -1}; public static void main(String[] args) throws IOException { BufferedReader in = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2178-%EB%AF%B8%EB%A1%9C%ED%83%90%EC%83%89/",
        "teaser":null},{
        "title": "[백준] 2606. 바이러스",
        "excerpt":"2606. 바이러스 Code import java.util.*; public class 바이러스 { static ArrayList&lt;Integer&gt;[] adj; static boolean[] visited; static int cnt = 0; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int V = sc.nextInt(); // 컴퓨터의 수, 정점 int E = sc.nextInt(); // 컴퓨터의 쌍의 수, 간선 adj =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2606-%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4/",
        "teaser":null},{
        "title": "[백준] 3985. 롤케이크",
        "excerpt":"3985. 롤케이크 Code import java.util.*; public class Main { public static void main(String[] args) { // L미터의 롤케이크 N명의 사람에게 나눠줌 Scanner sc = new Scanner(System.in); int L = sc.nextInt(); int N = sc.nextInt(); int[] arr = new int[L + 1]; int[] expect = new int[N + 1]; int[] many...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-3985-%EB%A1%A4%EC%BC%80%EC%9D%B4%ED%81%AC/",
        "teaser":null},{
        "title": "[백준] 7576. 토마토",
        "excerpt":"7576. 토마토 Code package BFS; import java.io.*; import java.util.*; public class boj_7576_토마토 { static int N, M; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, 1, -1 }; static int[][] map, dist; static Queue&lt;Pair&gt; queue; public static void main(String[] args) throws...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-7576-%ED%86%A0%EB%A7%88%ED%86%A0/",
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
        "title": "[백준] 1697. 숨바꼭질",
        "excerpt":"1697. 숨바꼭질 Code package BFS; import java.util.*; import java.io.*; public class boj_1697_숨바꼭질 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int K = Integer.parseInt(st.nextToken()); int[] dist = new int[100001]; Arrays.fill(dist, -1); dist[N]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1697-%EC%88%A8%EB%B0%94%EA%BC%AD%EC%A7%88/",
        "teaser":null},{
        "title": "[백준] 2644. 촌수계산",
        "excerpt":"2644. 촌수계산 Code import java.util.ArrayList; import java.util.LinkedList; import java.util.Queue; import java.util.Scanner; public class Main { static ArrayList&lt;Integer&gt;[] adj; static boolean[] visited; static int cnt = 0; static int ps2; static boolean flag; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int V = sc.nextInt(); // 정점의 수...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2644-%EC%B4%8C%EC%88%98%EA%B3%84%EC%82%B0/",
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
        "title": "[백준] 18352. 특정 거리의 도시 찾기",
        "excerpt":"18352. 특정 거리의 도시 찾기 Code import java.util.*; public class 특정거리의도시찾기 { static ArrayList&lt;Integer&gt;[] adj; static boolean[] visited; static boolean flag; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); // 도시의 개수 : 정점 int M = sc.nextInt(); // 도로의 개수 : 간선...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-18352-%ED%8A%B9%EC%A0%95-%EA%B1%B0%EB%A6%AC%EC%9D%98-%EB%8F%84%EC%8B%9C-%EC%B0%BE%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 3055. 탈출",
        "excerpt":"3055. 탈출 Code package 백준_Solution; import java.util.*; class Node3 { int r, c; Node3(int r, int c) { this.r = r; this.c = c; } } public class 탈출 { static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 };...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-3055-%ED%83%88%EC%B6%9C/",
        "teaser":null},{
        "title": "[백준] 13549. 숨바꼭질3",
        "excerpt":"13549. 숨바꼭질3 Code import java.util.*; class Node6 { int idx, cnt; Node6(int idx, int cnt) { this.idx = idx; this.cnt = cnt; } } public class 숨바꼭질3 { static int[] dr = { 2, -1, 1 }; static int nr = 0; static int cnt = 0; public static void...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-13549-%EC%88%A8%EB%B0%94%EA%BC%AD%EC%A7%883/",
        "teaser":null},{
        "title": "[백준] 14226. 이모티콘",
        "excerpt":"14226. 이모티콘 Code import java.util.*; class Node5 { int display, clipboard, cnt; Node5(int display, int clipboard, int cnt) { this.display = display; this.clipboard = clipboard; this.cnt = cnt; } } public class 이모티콘 { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int S = sc.nextInt(); //...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-14226-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98/",
        "teaser":null},{
        "title": "[백준] 1707. 이분 그래프",
        "excerpt":"1707. 이분 그래프 Code import java.util.*; public class Main { static int V; static ArrayList&lt;Integer&gt;[] adj; static Queue&lt;Integer&gt; queue; static int[] color; static boolean flag; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int K = sc.nextInt(); // 테스트 케이스 수 for (int tc = 1; tc...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1707-%EC%9D%B4%EB%B6%84-%EA%B7%B8%EB%9E%98%ED%94%84/",
        "teaser":null},{
        "title": "[백준] 2206. 벽 부수고 이동하기",
        "excerpt":"2206. 벽 부수고 이동하기 Code import java.util.*; class Node7 { int r, c, dist, cnt; Node7(int r, int c, int cnt) { this.r = r; this.c = c; this.cnt = cnt; } } public class Main { static int[] dr = { -1, 1, 0, 0 }; static int[] dc...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2206-%EB%B2%BD-%EB%B6%80%EC%88%98%EA%B3%A0-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 15649. N과 M (1)",
        "excerpt":"15649. N과 M (1) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15649_N과M1 { //순열 static int N,M; static int[] arr; static boolean[] visited; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15649-N%EA%B3%BC-M-(1)/",
        "teaser":null},{
        "title": "[백준] 15650. N과 M (2)",
        "excerpt":"15650. N과 M (2) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15650_N과M2 { // 조합 static int N, M; static int[] arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15650-N%EA%B3%BC-M-(2)/",
        "teaser":null},{
        "title": "[백준] 15651. N과 M (3)",
        "excerpt":"15651. N과 M (3) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15651_N과M3 { //중복순열 static int N, M; static int[] arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); sb = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15651-N%EA%B3%BC-M-(3)/",
        "teaser":null},{
        "title": "[백준] 15652. N과 M (4)",
        "excerpt":"15652. N과 M (4) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15652_N과M4 { // 중복조합 static int[] arr; static int N, M; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15652-N%EA%B3%BC-M-(4)/",
        "teaser":null},{
        "title": "[백준] 15654. N과 M (5)",
        "excerpt":"15654. N과 M (5) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15654_N과M5 { // 정렬 후 순열 static int N,M; static int[] arr, tmp_arr; static StringBuilder sb; static boolean[] visited; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15654-N%EA%B3%BC-M-(5)/",
        "teaser":null},{
        "title": "[백준] 15655. N과 M (6)",
        "excerpt":"15655. N과 M (6) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15655_N과M6 { // 정렬 후 조합 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \"...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15655-N%EA%B3%BC-M-(6)/",
        "teaser":null},{
        "title": "[백준] 15656. N과 M (7)",
        "excerpt":"15656. N과 M (7) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15656_N과M7 { // 정렬 후 중복순열 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \"...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15656-N%EA%B3%BC-M-(7)/",
        "teaser":null},{
        "title": "[백준] 15657. N과 M (8)",
        "excerpt":"15657. N과 M (8) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15657_N과M8 { // 정렬 후 중복조합 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \"...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15657-N%EA%B3%BC-M-(8)/",
        "teaser":null},{
        "title": "[백준] 15663. N과 M (9)",
        "excerpt":"15663. N과 M (9) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15663_N과M9 { // 정렬, 중복제거, 순열 static int N, M; static int[] arr, tmp_arr; static boolean[] visited; static StringBuilder sb; static LinkedHashSet&lt;String&gt; lhset; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in));...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15663-N%EA%B3%BC-M-(9)/",
        "teaser":null},{
        "title": "[백준] 15664. N과 M (10)",
        "excerpt":"15664. N과 M (10) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15664_N과M10 { // 정렬, 중복제거, 조합 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; static LinkedHashSet&lt;String&gt; lhset; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15664-N%EA%B3%BC-M-(10)/",
        "teaser":null},{
        "title": "[백준] 15665. N과 M (11)",
        "excerpt":"15665. N과 M (11) Code package 백트래킹; import java.util.*; import java.io.*; public class boj_15665_N과M11 { // 정렬, 중복제거, 중복순열 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; static LinkedHashSet&lt;String&gt; lhset; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15665-N%EA%B3%BC-M-(11)/",
        "teaser":null},{
        "title": "[백준] 15666. N과 M (12)",
        "excerpt":"15666. N과 M (12) Code package 백트래킹; import java.io.*; import java.util.*; public class boj_15666_N과M12 {// 정렬, 중복제거, 중복조합 static int N, M; static int[] arr, tmp_arr; static StringBuilder sb; static LinkedHashSet&lt;String&gt; lhset; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw = new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15666-N%EA%B3%BC-M-(12)/",
        "teaser":null},{
        "title": "[백준] 14889. 스타트와 링크",
        "excerpt":"14889. 스타트와 링크 Code package 시뮬레이션; import java.util.*; import java.io.*; public class boj_14889_스타트와링크 { static int N; static int[][] arr; static int[] res, res2; static ArrayList&lt;Integer&gt; list; static boolean[] visited; static int sum = 0; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-14889-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%99%80-%EB%A7%81%ED%81%AC/",
        "teaser":null},{
        "title": "[백준] 1748. 수 이어 쓰기 1",
        "excerpt":"1748. 수 이어 쓰기 1 Code import java.util.*; public class 수이어쓰기1 { public static void main(String[] args) { Scanner sc = new Scanner(System.in); String str = sc.next(); int len = str.length(); int num = Integer.parseInt(str); int sum = 0; int[] arr = new int[10]; for (int i = 1; i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1748-%EC%88%98-%EC%9D%B4%EC%96%B4-%EC%93%B0%EA%B8%B0-1/",
        "teaser":null},{
        "title": "[백준] 2003. 수들의 합 2",
        "excerpt":"2003. 수들의 합 2 Code import java.io.*; import java.util.*; public class 수들의합2 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); String[] s = br.readLine().split(\" \"); String[] str = br.readLine().split(\" \"); int N = Integer.parseInt(s[0]); int M =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2003-%EC%88%98%EB%93%A4%EC%9D%98-%ED%95%A9-2/",
        "teaser":null},{
        "title": "[백준] 1339. 단어 수학",
        "excerpt":"1339. 단어 수학 Code import java.util.*; class Word implements Comparable&lt;Word&gt; { int idx; int value; Word(int idx, int value) { this.idx = idx; this.value = value; } @Override public int compareTo(Word o1) { if (value &gt; o1.value) return -1; else if (value &lt; o1.value) return 1; else return 0; }...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1339-%EB%8B%A8%EC%96%B4-%EC%88%98%ED%95%99/",
        "teaser":null},{
        "title": "[백준] 1926. 그림",
        "excerpt":"1926. 그림 Code package BFS; import java.util.*; import java.io.*; public class boj_1926_그림 { static int N, M; static int[][] map; static boolean[][] visited; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static int max = Integer.MIN_VALUE; public static...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1926-%EA%B7%B8%EB%A6%BC/",
        "teaser":null},{
        "title": "[백준] 6064. 카잉 달력",
        "excerpt":"6064. 카잉 달력 Code import java.io.*; public class 카잉달력 { public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); int T = Integer.parseInt(br.readLine()); for (int tc = 1; tc &lt;= T; tc++) { int[] arr = new int[4]; String[]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-6064-%EC%B9%B4%EC%9E%89-%EB%8B%AC%EB%A0%A5/",
        "teaser":null},{
        "title": "[백준] 15686. 치킨 배달",
        "excerpt":"15686. 치킨 배달 Code package 시뮬레이션; import java.io.*; import java.util.*; public class boj_15686_치킨배달 { static int N, M, chiccnt, homecnt; static int[][] arr; static ArrayList&lt;Pair&gt; homelist; static ArrayList&lt;Pair&gt; chiclist; static int[] tmp; static int result = Integer.MAX_VALUE; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15686-%EC%B9%98%ED%82%A8-%EB%B0%B0%EB%8B%AC/",
        "teaser":null},{
        "title": "[백준] 2529. 부등호",
        "excerpt":"2529. 부등호 Code import java.io.*; import java.util.*; public class 부등호3 { static ArrayList&lt;String&gt; array = new ArrayList&lt;&gt;(); static boolean[] visited; static String[] giho; static int k; public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); k = Integer.parseInt(br.readLine());...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2529-%EB%B6%80%EB%93%B1%ED%98%B8/",
        "teaser":null},{
        "title": "[백준] 9663. N-Queen",
        "excerpt":"9663. N-Queen Code import java.util.*; public class N퀸 { static int[][] map; static int cnt = 0; static int N; public static void main(String[] args) { Scanner sc = new Scanner(System.in); N = sc.nextInt(); map = new int[N][N]; backtrack(0); System.out.println(cnt); } private static void backtrack(int idx) { if (idx ==...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-9663-N-Queen/",
        "teaser":null},{
        "title": "[백준] 1759. 암호 만들기",
        "excerpt":"1759. 암호 만들기 Code package 백트래킹; import java.util.*; import java.io.*; public class boj_1759_암호만들기 { static String[] arr, tmp_arr; static int L, C; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); L = Integer.parseInt(st.nextToken()); C...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1759-%EC%95%94%ED%98%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 1987. 알파벳",
        "excerpt":"1987. 알파벳 Code import java.util.*; class Node { int r, c, cnt; Node(int r, int c, int cnt) { this.r = r; this.c = c; this.cnt = cnt; } } public class 알파벳 { static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0,...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1987-%EC%95%8C%ED%8C%8C%EB%B2%B3/",
        "teaser":null},{
        "title": "[백준] 2661. 좋은수열",
        "excerpt":"2661. 좋은수열 Code import java.io.*; import java.util.*; public class 좋은수열 { static int N; static StringBuilder sb; static String min = \"\"; static String tmp = \"\"; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); N = Integer.parseInt(br.readLine());...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2661-%EC%A2%8B%EC%9D%80%EC%88%98%EC%97%B4/",
        "teaser":null},{
        "title": "[백준] 2143. 두 배열의 합",
        "excerpt":"2143. 두 배열의 합 Code import java.util.*; public class 두배열의합2 { static int[] A_arr; static int[] B_arr; static ArrayList&lt;Integer&gt; A_array; static ArrayList&lt;Integer&gt; B_array; public static void main(String[] args) { Scanner sc = new Scanner(System.in); int T = sc.nextInt(); // 합 int N = sc.nextInt(); A_arr = new int[N]; for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2143-%EB%91%90-%EB%B0%B0%EC%97%B4%EC%9D%98-%ED%95%A9/",
        "teaser":null},{
        "title": "[백준] 1806. 부분합",
        "excerpt":"1806. 부분합 Code import java.util.*; public class 부분합 { public static void main(String[] args) { Scanner sc = new Scanner(System.in); int N = sc.nextInt(); int S = sc.nextInt(); int[] arr = new int[N]; for (int i = 0; i &lt; N; i++) { arr[i] = sc.nextInt(); } int start =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1806-%EB%B6%80%EB%B6%84%ED%95%A9/",
        "teaser":null},{
        "title": "[백준] 10026. 적록색약",
        "excerpt":"10026. 적록색약 Code package BFS; import java.io.*; import java.util.*; public class boj_10026_적록색약 { static int[][] map1, map2; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static int N; public static void main(String[] args) throws Exception { BufferedReader in...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10026-%EC%A0%81%EB%A1%9D%EC%83%89%EC%95%BD/",
        "teaser":null},{
        "title": "[백준] 3184. 양",
        "excerpt":"3184. 양 Code import java.util.*; class Node { int r, c; Node(int r, int c) { this.r = r; this.c = c; } } public class 양 { static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static boolean[][]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-3184-%EC%96%91/",
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
        "title": "[백준] 10807. 개수세기",
        "excerpt":"10807. 개수세기 Code package 배열; import java.util.*; import java.io.*; public class boj_10807_개수세기 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int V = Integer.parseInt(in.readLine()); int cnt = 0; for (int i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10807-%EA%B0%9C%EC%88%98%EC%84%B8%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 10808. 알파벳개수",
        "excerpt":"10808.  알파벳개수     Code   package 배열;  import java.io.*; import java.util.*;  public class boj_10808_알파벳개수 { \tpublic static void main(String[] args) throws IOException { \t\tBufferedReader in = new BufferedReader(new InputStreamReader(System.in)); \t\tString s = in.readLine(); \t\t \t\tint[] arr = new int[26]; \t\tfor(int i=0; i&lt;s.length(); i++) \t\t\tarr[s.charAt(i)-97]++; \t\t \t\tfor(int i : arr) \t\t\tSystem.out.print(i+\" \"); \t} }    ","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10808-%EC%95%8C%ED%8C%8C%EB%B2%B3%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 11328. Strfry",
        "excerpt":"11328. Strfry Code package 배열; import java.io.*; import java.util.*; public class boj_11328_Strfry { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st; for (int i = 0; i &lt; N; i++) { st = new StringTokenizer(in.readLine(), \" \");...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11328-Strfry/",
        "teaser":null},{
        "title": "[백준] 13300. 방배정",
        "excerpt":"13300. 방배정 Code package 배열; import java.util.*; import java.io.*; public class boj_13300_방배정 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int K = Integer.parseInt(st.nextToken()); int[][] arr = new int[6][2]; for (int i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-13300-%EB%B0%A9%EB%B0%B0%EC%A0%95/",
        "teaser":null},{
        "title": "[백준] 1475. 방번호",
        "excerpt":"1475. 방번호 Code package 배열; import java.util.*; import java.io.*; public class boj_1475_방번호 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); String s = in.readLine(); int[] arr = new int[10]; for (int i = 0; i &lt; s.length(); i++) { int idx = s.charAt(i)...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1475-%EB%B0%A9%EB%B2%88%ED%98%B8/",
        "teaser":null},{
        "title": "[백준] 1919. 애너그램만들기",
        "excerpt":"1919. 애너그램만들기 Code package 배열; import java.util.*; import java.io.*; public class boj_1919_애너그램만들기 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); String str1 = in.readLine(); String str2 = in.readLine(); int[] arr1 = new int[26]; int[] arr2 = new int[26];; for (int i = 0;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1919-%EC%97%90%EB%84%88%EA%B7%B8%EB%9E%A8%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 2577. 숫자의개수",
        "excerpt":"2577. 숫자의개수 Code package 배열; import java.util.*; import java.io.*; public class boj_2577_숫자의개수 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int sum = 1; for (int i = 0; i &lt; 3; i++) sum *= Integer.parseInt(in.readLine()); String s = sum + \"\";...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2577-%EC%88%AB%EC%9E%90%EC%9D%98%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 1158. 요세푸스문제",
        "excerpt":"1158. 요세푸스문제 Code package 연결리스트; import java.io.*; import java.util.*; public class boj_1158_요세푸스문제 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int K = Integer.parseInt(st.nextToken()); Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); for (int i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1158-%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4%EB%AC%B8%EC%A0%9C/",
        "teaser":null},{
        "title": "[백준] 1406. 에디터",
        "excerpt":"1406. 에디터 Code package 연결리스트; import java.util.*; import java.io.*; public class boj_1406_에디터 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); String s = in.readLine(); Stack&lt;Character&gt; lstack = new Stack&lt;&gt;(); Stack&lt;Character&gt; rstack = new Stack&lt;&gt;(); int len = s.length(); for(int i=0; i&lt;len; i++) lstack.push(s.charAt(i));...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1406-%EC%97%90%EB%94%94%ED%84%B0/",
        "teaser":null},{
        "title": "[백준] 5397. 키로거",
        "excerpt":"5397. 키로거 Code package 연결리스트; import java.util.*; import java.io.*; public class boj_5397_키로거 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int T = Integer.parseInt(in.readLine()); for (int i = 0; i &lt; T; i++) { Stack&lt;String&gt; lstack = new Stack&lt;&gt;(); Stack&lt;String&gt; rstack =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-5397-%ED%82%A4%EB%A1%9C%EA%B1%B0/",
        "teaser":null},{
        "title": "[백준] 10773. 제로",
        "excerpt":"10773. 제로 Code package 스택; import java.util.*; import java.io.*; public class boj_10773_제로 { public static void main(String[] args) throws Exception { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int K = Integer.parseInt(in.readLine()); Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(); for (int i = 0; i &lt; K; i++) { int num = Integer.parseInt(in.readLine());...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10773-%EC%A0%9C%EB%A1%9C/",
        "teaser":null},{
        "title": "[백준] 10828. 스택",
        "excerpt":"10828. 스택 Code package 스택; import java.util.*; import java.io.*; public class boj_10828_스택 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(); StringTokenizer st; for (int i = 0; i &lt; N; i++) { st...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10828-%EC%8A%A4%ED%83%9D/",
        "teaser":null},{
        "title": "[백준] 1874. 스택수열",
        "excerpt":"1874. 스택수열 Code package 스택; import java.util.*; import java.io.*; public class boj_1874_스택수열 { public static void main(String[] args) throws Exception, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); Stack&lt;Integer&gt; stack = new Stack&lt;&gt;(); int[] arr = new int[N + 1]; for (int i = 1; i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1874-%EC%8A%A4%ED%83%9D%EC%88%98%EC%97%B4/",
        "teaser":null},{
        "title": "[백준] 2493. 탑",
        "excerpt":"2493. 탑 Code package 스택; import java.io.*; import java.util.*; public class boj_2493_탑 { public static void main(String[] args) throws Exception, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); Stack&lt;Top&gt; stack = new Stack&lt;&gt;(); int[] arr = new int[N]; for...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2493-%ED%83%91/",
        "teaser":null},{
        "title": "[백준] 6198. 옥상정원꾸미기",
        "excerpt":"6198. 옥상정원꾸미기 Code package 스택; import java.io.*; import java.util.*; public class boj_6198_옥상정원꾸미기 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(br.readLine()); long cnt = 0; Stack&lt;Long&gt; stack = new Stack&lt;&gt;(); for (int i = 0; i &lt; N; i++)...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-6198-%EC%98%A5%EC%83%81%EC%A0%95%EC%9B%90%EA%BE%B8%EB%AF%B8%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 10799. 쇠막대기",
        "excerpt":"10799. 쇠막대기 Code package 스택의활용; import java.util.*; import java.io.*; public class boj_10799_쇠막대기 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); String str = in.readLine(); Stack&lt;Character&gt; stack = new Stack&lt;&gt;(); int len = str.length(); int cnt = 0; for (int i = 0; i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10799-%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 2504. 괄호의값",
        "excerpt":"2504. 괄호의값 Code package 스택의활용; import java.util.*; import java.io.*; public class boj_2504_괄호의값 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); String str = in.readLine(); boolean flag = false; long ans = 0; int val = 1; Stack&lt;Character&gt; stack = new Stack&lt;&gt;(); for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2504-%EA%B4%84%ED%98%B8%EC%9D%98-%EA%B0%92/",
        "teaser":null},{
        "title": "[백준] 4889. 안정적인 문자열",
        "excerpt":"4889. 안정적인 문자열 Code package 스택의활용; import java.util.*; import java.io.*; public class boj_4889_안정적인문자열 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); Stack&lt;Character&gt; stack; int idx = 1; while (true) { String str = in.readLine(); if (str.charAt(0) == '-') break; stack = new Stack&lt;&gt;();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-4889-%EC%95%88%EC%A0%95%EC%A0%81%EC%9D%B8-%EB%AC%B8%EC%9E%90%EC%97%B4/",
        "teaser":null},{
        "title": "[백준] 9012. 괄호",
        "excerpt":"9012. 괄호 Code package 스택의활용; import java.util.*; import java.io.*; public class boj_9012_괄호 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); for(int i=0; i&lt;N; i++) { String str = in.readLine(); Stack&lt;Character&gt; stack = new Stack&lt;&gt;(); boolean flag = false;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-9012-%EA%B4%84%ED%98%B8/",
        "teaser":null},{
        "title": "[백준] 10845. 큐",
        "excerpt":"10845. 큐 Code package 큐; import java.util.*; import java.io.*; public class boj_10845_큐 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st; Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); StringBuilder sb = new StringBuilder(); int last = 0; for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10845-%ED%81%90/",
        "teaser":null},{
        "title": "[백준] 18258. 큐2",
        "excerpt":"18258. 큐2 Code package 큐; import java.util.*; import java.io.*; public class boj_18258_큐2 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st; Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); StringBuilder sb = new StringBuilder(); int last = 0; for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-18258-%ED%81%902/",
        "teaser":null},{
        "title": "[백준] 2164. 카드2",
        "excerpt":"2164. 카드2 Code package 큐; import java.util.*; import java.io.*; public class boj_2164_카드2 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;(); for (int i = 1; i &lt;= N; i++) queue.add(i); int num =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2164-%EC%B9%B4%EB%93%9C2/",
        "teaser":null},{
        "title": "[백준] 1021. 회전하는 큐",
        "excerpt":"1021. 회전하는 큐 Code package 덱; import java.util.*; import java.io.*; public class boj_1021_회전하는큐 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int M = Integer.parseInt(st.nextToken()); int[] arr = new int[M]; st =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1021-%ED%9A%8C%EC%A0%84%ED%95%98%EB%8A%94-%ED%81%90/",
        "teaser":null},{
        "title": "[백준] 10866. 덱",
        "excerpt":"10866. 덱 Code package 덱; import java.io.*; import java.util.*; public class boj_10866_덱 { public static void main(String[] args) throws Exception, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st; Deque&lt;Integer&gt; deque = new LinkedList&lt;&gt;(); StringBuilder sb = new StringBuilder(); for (int i = 0; i...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10866-%EB%8D%B1/",
        "teaser":null},{
        "title": "[백준] 5430. AC",
        "excerpt":"5430. AC Code package 덱; import java.util.*; import java.io.*; public class boj_5430_AC { public static void main(String[] args) throws Exception { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int T = Integer.parseInt(in.readLine()); Deque&lt;Integer&gt; deque = new LinkedList&lt;&gt;(); for (int i = 0; i &lt; T; i++) { char[] command = in.readLine().toCharArray();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-5430-AC/",
        "teaser":null},{
        "title": "[백준] 2468. 안전영역",
        "excerpt":"2468. 안전영역 Code package BFS; import java.io.*; import java.util.*; public class boj_2468_안전영역 { static int[][] map; static boolean[][] visited; static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static int N; public static void main(String[] args) throws NumberFormatException, IOException...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2468-%EC%95%88%EC%A0%84%EC%98%81%EC%97%AD/",
        "teaser":null},{
        "title": "[백준] 2583. 영역구하기",
        "excerpt":"2583. 영역구하기 Code package BFS; import java.util.*; import java.io.*; public class boj_2583_영역구하기 { static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; static int M, N, K; static int[][] map; static PriorityQueue&lt;Integer&gt; pq; public static void main(String[] args) throws...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2583-%EC%98%81%EC%97%AD%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 4179. 불",
        "excerpt":"4179. 불 Code package BFS; import java.util.*; import java.io.*; public class boj_4179_불 { static int R, C; static char[][] map; static int[][] dist1, dist2; // 불 전파시간, 지훈이 이동시간 static int[] dr = { -1, 1, 0, 0 }; static int[] dc = { 0, 0, -1, 1 }; public...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-4179-%EB%B6%88/",
        "teaser":null},{
        "title": "[백준] 5014. 스타트링크",
        "excerpt":"5014. 스타트링크 Code package BFS; import java.io.*; import java.util.*; public class boj_5014_스타트링크 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int F = Integer.parseInt(st.nextToken()); // 총 개수 int S = Integer.parseInt(st.nextToken()); // 강호 위치 int G...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-5014-%EC%8A%A4%ED%83%80%ED%8A%B8%EB%A7%81%ED%81%AC/",
        "teaser":null},{
        "title": "[백준] 6539. 상범빌딩",
        "excerpt":"6539. 상범빌딩 Code package BFS; import java.io.*; import java.util.*; public class boj_6539_상범빌딩 { static int L, R, C; static int[] dr = { -1, 1, 0, 0, 0, 0 }; static int[] dc = { 0, 0, 0, 0, 1, -1 }; static int[] dz = { 0, 0, -1,...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-6539-%EC%83%81%EB%B2%94%EB%B9%8C%EB%94%A9/",
        "teaser":null},{
        "title": "[백준] 7562. 나이트의 이동",
        "excerpt":"7562. 나이트의 이동 Code package BFS; import java.io.*; import java.util.*; public class boj_7562_나이트의이동 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int T = Integer.parseInt(in.readLine()); int[] dr = { -1, -2, -2, -1, 1, 2, 2, 1 }; int[] dc = {...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-7562-%EB%82%98%EC%9D%B4%ED%8A%B8%EC%9D%98-%EC%9D%B4%EB%8F%99/",
        "teaser":null},{
        "title": "[백준] 7569. 토마토",
        "excerpt":"7569. 토마토 Code package BFS; import java.io.*; import java.util.*; public class boj_7569_토마토 { static int N, M, H; static int[] dr = { -1, 1, 0, 0, 0, 0 }; static int[] dc = { 0, 0, 0, 0, 1, -1 }; static int[] dz = { 0, 0, -1,...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-7569-%ED%86%A0%EB%A7%88%ED%86%A0/",
        "teaser":null},{
        "title": "[백준] 1074. Z",
        "excerpt":"1074. Z Code package 재귀; import java.io.*; import java.util.*; public class boj_1074_Z { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); int N = Integer.parseInt(st.nextToken()); int r = Integer.parseInt(st.nextToken()); int c = Integer.parseInt(st.nextToken()); System.out.println(func(N, r, c)); }...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1074-Z/",
        "teaser":null},{
        "title": "[백준] 11729. 하노이 탑 이동순서",
        "excerpt":"11729. 하노이 탑 이동순서 Code package 재귀; import java.io.*; public class boj_11729_하노이탑이동순서 { static StringBuilder sb; public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); sb = new StringBuilder(); int N = Integer.parseInt(in.readLine()); int cnt = (1 &lt;&lt; N) - 1; sb.append(cnt + \"\\n\");...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11729-%ED%95%98%EB%85%B8%EC%9D%B4-%ED%83%91-%EC%9D%B4%EB%8F%99%EC%88%9C%EC%84%9C/",
        "teaser":null},{
        "title": "[백준] 1629. 곱셈",
        "excerpt":"1629. 곱셈 Code package 재귀; import java.io.*; import java.util.*; public class boj_1629_곱셈 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(in.readLine(), \" \"); long A = Long.parseLong(st.nextToken()); long B = Long.parseLong(st.nextToken()); long C = Long.parseLong(st.nextToken()); System.out.println(pow(A, B, C)); }...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1629-%EA%B3%B1%EC%85%88/",
        "teaser":null},{
        "title": "[백준] 16505. 별",
        "excerpt":"16505. 별 Code package 재귀; import java.io.*; public class boj_16505_별 { static char[][] arr; public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); int size = (1 &lt;&lt; N); arr = new char[size][size]; for (int i = 0; i &lt; size;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-16505-%EB%B3%84/",
        "teaser":null},{
        "title": "[백준] 17478. 재귀함수가뭔가요",
        "excerpt":"17478. 재귀함수가뭔가요 Code package 재귀; import java.io.*; public class boj_17478_재귀함수가뭔가요 { static String[] arr; static String underBar = \"\"; public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); arr = new String[6]; arr[0] = \"\\\"재귀함수가 뭔가요?\\\"\"; arr[1] = \"\\\"잘 들어보게....","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-17478-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98%EA%B0%80-%EB%AD%94%EA%B0%80%EC%9A%94/",
        "teaser":null},{
        "title": "[백준] 1780. 종이의 개수",
        "excerpt":"1780. 종이의 개수 Code package 재귀; import java.io.*; import java.util.*; public class boj_1780_종이의개수 { static int[][] arr; static int[] cnt; public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); arr = new int[N][N]; cnt = new int[3]; StringTokenizer st; for (int...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1780-%EC%A2%85%EC%9D%B4%EC%9D%98-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "[백준] 1992. 쿼드트리",
        "excerpt":"1992. 쿼드트리 Code package 재귀; import java.io.*; public class boj_1992_쿼드트리 { static char[][] arr; public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); arr = new char[64][64]; for (int i = 0; i &lt; N; i++) { String str = in.readLine();...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1992-%EC%BF%BC%EB%93%9C%ED%8A%B8%EB%A6%AC/",
        "teaser":null},{
        "title": "[백준] 2447. 별찍기10",
        "excerpt":"2447. 별찍기10 Code package 재귀; import java.io.*; public class boj_2447_별찍기10 { static char[][] arr; public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); arr = new char[N][N]; star(0, 0, N, false); StringBuilder sb = new StringBuilder(); for (int i = 0;...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2447-%EB%B3%84%EC%B0%8D%EA%B8%B010/",
        "teaser":null},{
        "title": "[백준] 1182. 부분수열의 합",
        "excerpt":"1182. 부분수열의 합 Code package 백트래킹; import java.io.*; import java.util.*; public class boj_1182_부분수열의합 { static int N, S; static int[] arr; static int cnt = 0; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N = Integer.parseInt(st.nextToken());...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1182-%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4%EC%9D%98-%ED%95%A9/",
        "teaser":null},{
        "title": "[백준] 16987. 계란으로 계란치기",
        "excerpt":"16987. 계란으로 계란치기 Code package 백트래킹; import java.io.*; import java.util.*; public class boj_16987_계란으로계란치기 { static Egg[] list; static int N; static int result = 0; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N = Integer.parseInt(st.nextToken()); list...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-16987-%EA%B3%84%EB%9E%80%EC%9C%BC%EB%A1%9C-%EA%B3%84%EB%9E%80%EC%B9%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 1799. 비숍",
        "excerpt":"1799. 비숍 Code package 백트래킹; import java.io.*; import java.util.*; public class boj_1799_비숍 { static int N; static int[][] arr; static boolean[] issued1, issued2; static int cnt = 0; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); N...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1799-%EB%B9%84%EC%88%8D/",
        "teaser":null},{
        "title": "[백준] 6603. 로또",
        "excerpt":"6603. 로또 Code package 백트래킹; import java.io.*; import java.util.*; public class boj_6603_로또 { static int K, S; static int[] rotto, arr; static StringBuilder sb; public static void main(String[] args) throws IOException { BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); while (true) { StringTokenizer st = new StringTokenizer(br.readLine(), \" \"); K =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-6603-%EB%A1%9C%EB%98%90/",
        "teaser":null},{
        "title": "[백준] 10814. 나이순정렬",
        "excerpt":"10814. 나이순정렬 Code package 정렬1; import java.io.*; import java.util.*; public class boj_10814_나이순정렬 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); ArrayList&lt;User&gt; list = new ArrayList&lt;&gt;(); StringTokenizer st; for (int i = 0; i &lt; N; i++) { st...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10814-%EB%82%98%EC%9D%B4%EC%88%9C%EC%A0%95%EB%A0%AC/",
        "teaser":null},{
        "title": "[백준] 10989. 수정렬하기3",
        "excerpt":"10989. 수정렬하기3 Code package 정렬1; import java.io.*; import java.util.*; public class boj_10989_수정렬하기3 { // 메모리초과 public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(); for (int i = 0; i &lt; N; i++) list.add(Integer.parseInt(in.readLine())); Collections.sort(list);...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-10989-%EC%88%98%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B03/",
        "teaser":null},{
        "title": "[백준] 11650. 좌표정렬하기",
        "excerpt":"11650. 좌표정렬하기 Code package 정렬1; import java.util.*; import java.io.*; public class boj_11650_좌표정렬하기 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); ArrayList&lt;Pos&gt; list = new ArrayList&lt;&gt;(); StringTokenizer st; for (int i = 0; i &lt; N; i++) { st...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11650-%EC%A2%8C%ED%91%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 11651. 좌표정렬하기2",
        "excerpt":"11651. 좌표정렬하기2 Code package 정렬1; import java.io.*; import java.util.*; public class boj_11651_좌표정렬하기2 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); StringTokenizer st; ArrayList&lt;Pos&gt; list = new ArrayList&lt;&gt;(); for (int i = 0; i &lt; N; i++) { st =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11651-%EC%A2%8C%ED%91%9C%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B02/",
        "teaser":null},{
        "title": "[백준] 1181. 단어정렬",
        "excerpt":"1181. 단어정렬 Code package 정렬1; import java.util.*; import java.io.*; public class boj_1181_단어정렬 { public static void main(String[] args) throws NumberFormatException, IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); String[] arr = new String[N]; for (int i = 0; i &lt; N; i++) arr[i] = in.readLine(); Arrays.sort(arr,...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-1181-%EB%8B%A8%EC%96%B4%EC%A0%95%EB%A0%AC/",
        "teaser":null},{
        "title": "[백준] 11931. 수정렬하기4",
        "excerpt":"11931.  수정렬하기4     Code   package 정렬1; import java.io.*; import java.util.*;  public class boj_11931_수정렬하기4 { \tpublic static void main(String[] args) throws IOException { \t\tBufferedReader in = new BufferedReader(new InputStreamReader(System.in)); \t\tint N = Integer.parseInt(in.readLine()); \t\t \t\tPriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;(Collections.reverseOrder()); \t\t \t\tfor(int i=0; i&lt;N; i++) \t\t\tpq.add(Integer.parseInt(in.readLine())); \t\t \t\twhile(!pq.isEmpty()) \t\t\tSystem.out.println(pq.poll());  \t} }   ","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-11931-%EC%88%98%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B04/",
        "teaser":null},{
        "title": "[백준] 2750. 수정렬하기",
        "excerpt":"2750. 수정렬하기 Code package 정렬1; import java.io.*; import java.util.*; public class boj_2750_수정렬하기 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); int[] arr = new int[N]; for (int i = 0; i &lt; N; i++) arr[i] = Integer.parseInt(in.readLine()); Arrays.sort(arr); for...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2750-%EC%88%98%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0/",
        "teaser":null},{
        "title": "[백준] 2751. 수정렬하기2",
        "excerpt":"2751. 수정렬하기2 Code package 정렬1; import java.io.*; import java.util.*; public class boj_2751_수정렬하기2 { public static void main(String[] args) throws IOException { BufferedReader in = new BufferedReader(new InputStreamReader(System.in)); int N = Integer.parseInt(in.readLine()); ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(); for (int i = 0; i &lt; N; i++) list.add(Integer.parseInt(in.readLine())); Collections.sort(list); StringBuilder sb =...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-2751-%EC%88%98%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B02/",
        "teaser":null},{
        "title": "[백준] 15683. 감시",
        "excerpt":"15683. 감시 Code package 시뮬레이션; import java.io.*; import java.util.*; public class boj_15683_감시 { static int N, M; static int[][] arr1, arr2; static int[] dx = { 1, 0, -1, 0 }; // 남, 동, 북, 서 static int[] dy = { 0, 1, 0, -1 }; public static void main(String[]...","categories": ["Baekjoon"],
        "tags": [],
        "url": "http://localhost:4000/baekjoon/%EB%B0%B1%EC%A4%80-15683-%EA%B0%90%EC%8B%9C/",
        "teaser":null},{
        "title": "백준 10808 알파벳 개수",
        "excerpt":"","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%B0%B1%EC%A4%80-10808-%EC%95%8C%ED%8C%8C%EB%B2%B3-%EA%B0%9C%EC%88%98/",
        "teaser":null},{
        "title": "백준 10808 알파벳 개수",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/%EB%B0%B1%EC%A4%80-10808-%EC%95%8C%ED%8C%8C%EB%B2%B3-%EA%B0%9C%EC%88%98/",
        "teaser":null}]
