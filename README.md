import java.util.*;

public class Solution {
    private static int index = 0; // Tarjan算法的索引
    private static int maxGroupSize = 0; // 最大环大小

    public static int findMaxCEOs(int[] personIDs) {
        int n = personIDs.length;

        // Tarjan算法相关数据结构
        int[] indices = new int[n];
        int[] lowLink = new int[n];
        boolean[] onStack = new boolean[n];
        Stack<Integer> stack = new Stack<>();

        Arrays.fill(indices, -1); // 初始索引为-1

        // 遍历每个节点，找到所有SCC
        for (int i = 0; i < n; i++) {
            if (indices[i] == -1) {
                tarjan(i, personIDs, indices, lowLink, onStack, stack);
            }
        }

        return maxGroupSize;
    }

    private static void tarjan(int node, int[] graph, int[] indices, int[] lowLink, boolean[] onStack, Stack<Integer> stack) {
        indices[node] = lowLink[node] = index++;
        stack.push(node);
        onStack[node] = true;

        int neighbor = graph[node];
        if (indices[neighbor] == -1) { // 如果邻居未访问
            tarjan(neighbor, graph, indices, lowLink, onStack, stack);
            lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
        } else if (onStack[neighbor]) { // 如果邻居在栈中
            lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
        }

        // 如果当前节点是SCC的根节点
        if (indices[node] == lowLink[node]) {
            int size = 0;
            int v;
            do {
                v = stack.pop();
                onStack[v] = false;
                size++;
            } while (v != node);

            maxGroupSize = Math.max(maxGroupSize, size);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 输入CEO数量
        int n = scanner.nextInt();
        int[] personIDs = new int[n];

        // 输入喜欢关系
        for (int i = 0; i < n; i++) {
            personIDs[i] = scanner.nextInt() - 1; // 转为0索引
        }

        // 计算最大CEO人数
        int result = findMaxCEOs(personIDs);
        System.out.println(result);
    }
}
