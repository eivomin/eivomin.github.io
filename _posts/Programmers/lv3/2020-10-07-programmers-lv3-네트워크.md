---
layout: single
title: "[lv3] 네트워크"
comments: true
category: Programmers
---

## level3.  네트워크

---

### Code

```java
package lv3;

public class programmers_lv3_네트워크 {
	class Solution {
	    boolean[][] visited;
	    public int solution(int n, int[][] computers) {
	        int answer = 0;
	        visited = new boolean[n][n];
	        
	        for(int i=0; i<n; i++){
	            if(!visited[i][i]){
	                dfs(i, n, computers);
	                answer++;
	            }
	        }
	        return answer;
	    }
	    
	    void dfs(int node, int n, int[][] computers){
	        for(int i=0; i<n; i++){
	            if(computers[node][i] == 1 && !visited[node][i]){
	                visited[node][i] = true;
	                visited[i][node] = true;
	                dfs(i, n, computers);
	            }
	        }
	    }
	}
}

```

