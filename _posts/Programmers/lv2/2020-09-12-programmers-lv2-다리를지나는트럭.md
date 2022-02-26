---
layout: single
title: "[lv2] 다리를지나는트럭"
comments: true
category: Programmers
---

## level2.  다리를지나는트럭

---

### Code

```java
package lv2;
import java.util.*;

class Truck{
    int weight, index;
    public Truck(int weight, int index){
        this.weight = weight;
        this.index = index;
    }
}

class programmers_level2_다리를지나는트럭 {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Integer> waitTruck = new LinkedList<>();
        List<Truck> workingTruck = new ArrayList<>();

        for(int truck : truck_weights){
            waitTruck.add(truck);
        }

        int time = 0;

        int totalWeight = waitTruck.peek();

        workingTruck.add(new Truck(waitTruck.poll(), 0));

        while(!workingTruck.isEmpty()){
            time++;

            for(int i=0; i<workingTruck.size(); i++){
                workingTruck.get(i).index++;
            }

            if(workingTruck.get(0).index > bridge_length){
                totalWeight -= workingTruck.get(0).weight;
                workingTruck.remove(0);
            }

            if(!waitTruck.isEmpty() && totalWeight+waitTruck.peek() <= weight){
                int nextTruck = waitTruck.poll();
                totalWeight += nextTruck;
                workingTruck.add(new Truck(nextTruck, 1));
            }
        }

        return time;
    }
}

```

