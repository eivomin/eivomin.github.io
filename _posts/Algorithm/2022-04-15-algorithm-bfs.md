---
layout: single
title: "[Algorithm] BFS"
comments: true
category: Algorithm
---

### BFS

```java
package Backjoon;

import java.util.*;
import java.io.*;

/*
 * 바킹독님 블로그 참고
 * */

public class bfs {

    static class Pair{
        int x;
        int y;
        public Pair(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
    public static void main(String[] args) {
        /*
                {1,1,1,0,1,0,0,0,0,0},
                {1,0,0,0,1,0,0,0,0,0},
                {1,1,1,0,1,0,0,0,0,0},
                {1,1,0,0,1,0,0,0,0,0},
                {0,1,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0},
                {0,0,0,0,0,0,0,0,0,0}
          1이 파란 칸, 0이 빨간 칸에 대응
         */
        
        int[][] board = new int[502][502];
        boolean[][] visited = new boolean[502][502]; // 해당 칸을 방문했는지 여부를 저장
        int n = 7, m = 10; // n = 행의 수, m = 열의 수
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, 1, -1}; // 상하좌우 네 방향을 의미

        Queue<Pair> queue = new LinkedList<>();
        visited[0][0] = true; // (0, 0)을 방문했다고 명시
        queue.add(new Pair(0,0)); // 큐에 시작점인 (0, 0)을 삽입

        StringBuilder sb = new StringBuilder();

        while(!queue.isEmpty()){
            Pair cur = queue.poll();
            System.out.println("("+cur.x+", "+cur.y+") -> ");
            for(int dir=0; dir<4; dir++){ // 상하좌우 칸을 살펴볼 것이다.
                int nx = cur.x+dx[dir];
                int ny = cur.y+dy[dir]; // nx, ny에  dir에서 정한 방향의 인접한 칸의 좌표가 들어감
                if(nx < 0 || nx >=n || ny < 0 || ny >=m) continue; // 범위 밖일 경우 넘어감
                if(visited[nx][ny] || board[nx][ny] != 1) continue; // 이미 방문한 칸이거나 파란 칸이 아닐 경우
                visited[nx][ny] = true; // (nx, ny)를 방문했다고 명시
                queue.add(new Pair(nx, ny));
            }
        }

    }
}

```
