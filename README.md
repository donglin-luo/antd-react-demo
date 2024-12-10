import java.util.*;

public class MAIN {

    public static List<Integer> minSignalStrength(String inputString) {
        int n = inputString.length();
        int[] answer = new int[n];
        Arrays.fill(answer, -1); // 初始化所有节点的信号强度为 -1

        // 从根节点 (索引 0) 开始深度优先搜索
        dfs(inputString, 0, 0, answer);

        // 过滤出有效节点的信号强度，返回列表
        List<Integer> validSignalStrengths = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (inputString.charAt(i) == '1') {
                validSignalStrengths.add(answer[i]);
            }
        }
        return validSignalStrengths;
    }

    private static void dfs(String inputString, int current, int strength, int[] answer) {
        // 如果索引超出范围或当前节点无效，则返回
        if (current >= inputString.length() || inputString.charAt(current) == '0') {
            return;
        }

        // 更新当前节点的信号强度
        answer[current] = strength;

        // 计算左孩子和右孩子的索引
        int leftChild = 2 * current + 1;
        int rightChild = 2 * current + 2;

        // 递归处理左孩子
        dfs(inputString, leftChild, strength + 1, answer);
        // 递归处理右孩子
        dfs(inputString, rightChild, strength + 1, answer);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // 输入字符串
        String inputString = in.nextLine();

        // 计算信号强度
        List<Integer> result = minSignalStrength(inputString);

        // 打印结果
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) {
                System.out.print(" ");
            }
            System.out.print(result.get(i));
        }
    }
}
