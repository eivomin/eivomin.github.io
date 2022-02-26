---
layout: single
title: "[lv1] 실패율"
comments: true
category: Programmers
---

## level1.  실패율

---

### Code

```java
package lv1;

import java.util.*;

class User implements Comparable<User> {
	int idx;
	double failrate;

	User(int idx, double failrate) {
		this.idx = idx;
		this.failrate = failrate;
	}

	@Override
	public int compareTo(User o) {
        if(failrate < o.failrate)
            return 1;
        else if(failrate == o.failrate){
            if(idx < o.idx)
                return -1;
            else
                return 1;
        }
        else
            return -1;
	}
}
public class programmers_level1_실패율 {

		public static int[] solution(int N, int[] stages) {
			int user = stages.length;
			int[] answer = new int[N + 1];
			int[] result = new int[N];
			ArrayList<User> list = new ArrayList<>();

			for (int s : stages) {
				if (s <= N)
					answer[s]++;
			}
			
			System.out.println(Arrays.toString(answer));
			int user_num = user;
			for(int i=1; i<=N; i++){
	            int tmp = answer[i];
	            if(tmp==0 && user_num == 0) {
	            	list.add(new User(i, 0.0));
	            	continue;
	            }
	            if(user_num == 0) {
	            	list.add(new User(i, 0.0));
	            	continue;	
	            }
	            else	
	            	list.add(new User(i, (double)tmp/user_num));
	            user_num -= tmp;
	        }

			for(int i=0; i<list.size(); i++)
				System.out.println(list.get(i).idx+"  "+list.get(i).failrate);
			Collections.sort(list);

			for (int i = 0; i < N; i++) {
				result[i] = list.get(i).idx;
			}

			return result;
		}

	public static void main(String[] args) {
		int[] stages = {1,1,1,1,1};
		System.out.println(Arrays.toString(solution(5,stages)));
	}
}

```

