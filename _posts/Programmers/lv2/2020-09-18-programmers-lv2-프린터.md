---
layout: single
title: "[lv2] 프린터"
comments: true
category: Programmers
---

## level2.  프린터

---

### Code

```java
package lv2;
import java.util.*;

class Document{
    int idx, rank, result;
    
    public Document(int idx, int rank, int result){
        this.idx = idx;
        this.rank = rank;
        this.result = result; 
    }
}

public class programmers_level2_프린터 {
	
	public static void main(String[] args) {
		int[] priorities = {1,1,9,1,1,1};
		int location = 0;
		
		System.out.println(solution(priorities, location));
	}
	
    public static int solution(int[] priorities, int location) {
        int index = 1;
       
        Queue<Document> queue = new LinkedList<>();
        ArrayList<Integer> list = new ArrayList<>();
        int[] result = new int[priorities.length];
        for(int i=0; i<priorities.length; i++){
            queue.add(new Document(i, priorities[i], 0));
            list.add(priorities[i]);
        }
        while(!queue.isEmpty()){
        	boolean flag = false;
            Document doc = queue.poll();
            list.remove(0);
            for(int i=0; i<list.size(); i++){
                if(doc.rank < list.get(i)){
                    queue.add(doc);
                    list.add(doc.rank);
                    flag = true;
                    break;
                }
            }
            if(flag == false) {
            	result[doc.idx] = index++;
            }
        }
        System.out.println(Arrays.toString(result));
        return result[location];
    }
}

```

