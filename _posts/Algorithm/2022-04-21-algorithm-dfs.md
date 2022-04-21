---
layout: single
title: "[Algorithm] DFS"
comments: true
category: Algorithm
---

### DFS

```java
package Backjoon;

/*
 * 바킹독님 블로그 참고
 * */

import java.io.*;
import java.util.*;

public class dfs {

    static class Pair{
        int x, y;
        public Pair(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
    public static void main(String[] args) {

        int[][] board = new int[502][502]; // 1이 파란 칸, 0이 빨간 칸에 대응
        int[][] visited = new int[502][502]; // 해당 칸을 방문했는지 여부를 저장
        int N = 7; // 행의 수
        int M = 10; // 열의 수
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};

        Stack<Pair> stack = new Stack<>();
        visited[0][0] = 1; // (0,0)을 방문했다고 명시
        stack.push(new Pair(0,0)); // 스택에 시작점인 (0,0)을 삽입

        while (!stack.isEmpty()){
            Pair cur = stack.pop();
            for(int dir=0; dir<4; dir++){ // 상하좌우 칸 
                int nx = cur.x+dx[dir];
                int ny = cur.y+dy[dir];
                if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue; // 범위 밖일 경우 넘어감
                if(visited[nx][ny] == 1 || board[nx][ny] != 1) continue; // 이미 방문한 칸이거나 파란 칸이 아닐 경우
                visited[nx][ny] = 1; // (nx, ny)를 방문했다고 명시
                stack.push(new Pair(nx, ny));
            }

        }




    }
}

```
