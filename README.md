import java.util.Scanner;

public class Solution {
    public static int[] stateOfCells(int[] cell, int days) {
        int n = cell.length;

        // 模拟天数
        for (int day = 0; day < days; day++) {
            int prev = cell[0]; // 存储上一轮的第一个元素，用于计算当前元素的更新
            for (int i = 0; i < n; i++) {
                // 获取左右邻居状态
                int left;
                if (i == 0) {
                    left = 0; // 边界条件
                } else {
                    left = prev;
                }

                int right;
                if (i == n - 1) {
                    right = 0; // 边界条件
                } else {
                    right = cell[i + 1];
                }

                // 临时保存当前值
                int temp = cell[i];

                // 更新状态
                if (left == right) {
                    cell[i] = 0;
                } else {
                    cell[i] = 1;
                }

                // 更新 prev 为当前值，用于下一轮计算
                prev = temp;
            }
        }

        return cell;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 输入数据
        int cell_size = scanner.nextInt(); // 细胞数（固定为 8）
        int[] cell = new int[cell_size];
        for (int i = 0; i < cell_size; i++) {
            cell[i] = scanner.nextInt();
        }
        int days = scanner.nextInt(); // 天数

        // 调用方法获取结果
        int[] result = stateOfCells(cell, days);

        // 输出结果
        for (int i = 0; i < result.length; i++) {
            if (i > 0) {
                System.out.print(" ");
            }
            System.out.print(result[i]);
        }
    }
}
