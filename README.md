import java.util.*;

public class MAIN {

    // 并查集结构
    static class UnionFind {
        int[] parent;
        int[] size;

        // 初始化并查集
        public UnionFind(int n) {
            parent = new int[n];
            size = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i; // 每个元素的父亲是自己
                size[i] = 1;   // 每个元素的大小是1
            }
        }

        // 查找根节点，带路径压缩
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // 路径压缩
            }
            return parent[x];
        }

        // 合并两个集合，按大小合并
        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);

            if (rootX != rootY) {
                // 小树接到大树下面
                if (size[rootX] < size[rootY]) {
                    parent[rootX] = rootY;
                    size[rootY] += size[rootX];
                } else {
                    parent[rootY] = rootX;
                    size[rootX] += size[rootY];
                }
            }
        }

        // 获取当前集合的大小
        public int getSize(int x) {
            return size[find(x)];
        }
    }

    public static int findMaxCEOs(int[] personIDs) {
        int n = personIDs.length;

        // 创建并查集对象
        UnionFind uf = new UnionFind(n);

        // 遍历 personIDs 数组，将CEO之间的关系进行合并
        for (int i = 0; i < n; i++) {
            if (personIDs[i] != n) {  // 如果 personIDs[i] == n，表示该CEO没有指向有效的CEO
                uf.union(i, personIDs[i]);
            }
        }

        // 找出所有并查集中的集合大小
        int maxCycleLength = 0;
        for (int i = 0; i < n; i++) {
            maxCycleLength = Math.max(maxCycleLength, uf.getSize(i));
        }

        return maxCycleLength;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();  // CEO的数量
        int[] personIDs = new int[num];  // 记录每个CEO指向的ID

        // 读取personIDs数组
        for (int i = 0; i < num; i++) {
            personIDs[i] = scanner.nextInt();
        }

        // 计算最大CEO参加的会议数量
        int result = findMaxCEOs(personIDs);
        System.out.println(result);  // 输出结果
    }
}
Sure, here is the extracted English text from the image:
----
The currently selected programming language is Java. We emphasize the submission of a fully working code. Over partially correct but inefficient code. Once submitted, you can not review the problem again. You can use System.out.println() to debug your code. The System.out.print() may not work in case of syntax/runtime error. The version of JDK being used is 1.8.
Note: The main class name must be “Solution”.
A colony of eight houses, represented as cells, are arranged in a straight line. Each day every cell competes with its adjacent cells (neighbours). An integer value of 1 represents an active cell and the value of 0 represents an inactive cell. If both the neighbours are active or inactive, the cell becomes inactive the next day. The two cells at the ends have a single adjacent cell, so the other adjacent cell can be assumed to be always inactive. Even after updating the cell state, its previous state is considered for updating the state of other cells. The cell information of all cells should be updated simultaneously.
Write an algorithm to output the state of the cells after the given number of days.
Input:
The first line of the input consists of an integer num (representing the number of cells where num is always equal to eight).
The second line consists of eight space-separated integers - cell1, cell2, …, cell8, representing the current state of cells.
The third line consists of an integer days, representing the number of days.
Output:
Print eight space-separated integers, representing the state of the cells after the given number of days.
Note:
The state of the cells is represented by 0s and 1s only.
Example
Input:
8
1 0 1 0 0 1 0 0
2
Output:
1 0 1 0 0 1 0 0
Explanation:
The cell at position 1 is 1 and its neighbours are 0, so its state on next day will be 0.
The cell at position 2 is 0 and its neighbours are 1 and 0, so its state on next day will be 1.
Similarly for all the cells, the state of cells on next day will be 0 1 0 0 1 0 1 0.
----
Sure, here is the extracted English text from the image:
----
The currently selected programming language is Java. We emphasize the submission of a fully working code over partially correct but inefficient code. Once submitted, you cannot review the problem again. You can use System.out.println() to debug your code. The System.out.print() may not work in case of syntax/runtime error. The version of JDK being used is 1.8.
Note: The main class name must be “Solution”.
A convention center is hosting a meeting of large firms which N CEOs will be attending. Each CEO is assigned an individual ID from 0 to N-1. Each CEO has some favorite CEOs whom they like. They will attend the meeting only if they can be seated next to the person they like. You are asked to plan this seating arrangement.
Write an algorithm to find the maximum number of CEOs who will attend the meeting.
Input:
The first line of the input consists of an integer num, representing the number of CEOs (N).
The second line consists of N space-separated integers representing the ID of the person whom the ith CEO likes.
Output:
Print an integer representing the maximum number of CEOs who can attend the meeting.
Note:
One CEO can be liked by more than one CEO.
Constraints:
1 ≤ num ≤ 10^5
0 ≤ i < num
Example
Input:
4
2 3 4 1
Output:
4
Explanation:
The CEO with ID 0 likes ID 2.
The CEO with ID 1 likes ID 3.
The CEO with ID 2 likes ID 4.
The CEO with ID 3 likes ID 0.
So, CEO 0 and CEO 2 can be seated around the circular table in the following manner:
(2, 3, 4, 1)
The maximum of 4 CEOs can be seated around the circular table in this manner.
----
