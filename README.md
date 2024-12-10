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
