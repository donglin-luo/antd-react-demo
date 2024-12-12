The current selected programming language is Java. We emphasize the submission of a fully working code over partially correct but inefficient code. Once submitted you cannot review this problem again. You can use System.out.print() to debug your code. The System.out.print() may not work in case of syntax/runtime error. The version of JDK being used is 1.8.

Note: The main class name must be "Solution"

A prime number is divisible only by 1 and itself. The teacher writes a positive integer on the board. Write an algorithm to find all the prime numbers from 2 to the given positive number.

Input
The first line of the input consists o
import java.util.Scanner;

public class SubstringCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 输入父串和子串
        String parent = scanner.nextLine();
        String sub = scanner.nextLine();

        // 输出子串出现次数
        System.out.println(countSubstringOccurrences(parent, sub));
    }

    public static int countSubstringOccurrences(String parent, String sub) {
        if (sub.isEmpty() || parent.isEmpty()) return 0;

        // 转换为小写（忽略大小写）
        parent = parent.toLowerCase();
        sub = sub.toLowerCase();

        int[] lps = buildLPS(sub); // 构建部分匹配表（LPS 表）
        int count = 0;
        int i = 0, j = 0; // i 遍历父串，j 遍历子串

        while (i < parent.length()) {
            if (parent.charAt(i) == sub.charAt(j)) {
                i++;
                j++;
                if (j == sub.length()) { // 完整匹配
                    count++;
                    j = lps[j - 1]; // 重置 j，继续寻找下一次匹配
                }
            } else {
                if (j > 0) {
                    j = lps[j - 1]; // 回溯 j
                } else {
                    i++; // 前进父串指针
                }
            }
        }
        return count;
    }

    // 构建 LPS（Longest Prefix Suffix）表
    private static int[] buildLPS(String pattern) {
        int[] lps = new int[pattern.length()];
        int len = 0; // 当前最长相等前后缀长度
        int i = 1;

        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len > 0) {
                    len = lps[len - 1]; // 回退
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
}import java.util.*;

public class Solution {
    public static int heightPyramid(int[] arr) {
        int answer = 0;
        int currentWidth = 0;
        int currentHeight = 1;

        Arrays.sort(arr);

        for (int i = arr.length - 1; i >= 0; i--) {
            currentWidth += arr[i];
            if (currentWidth > arr[i]) {
                currentWidth -= arr[i];
                answer = currentHeight;
                break;
            }
            currentHeight++;
        }

        return answer;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr_size = in.nextInt();
        int arr[] = new int[arr_size];
        for (int i = 0; i < arr_size; i++) {
            arr[i] = in.nextInt();
        }
        in.close();

        int answer = heightPyramid(arr);
        System.out.println(answer);
    }
}
An engineer has ordered a special type of cuboo rock block. These blocks were very costly, so the government approved the purchase of only N number of rock blocks. The blocks are of various widths, and each block has a unit height. The design team will arrange these blocks in such a way that the total width and number of blocks at one level is less than that of the level below it. With the government decree, the team must construct the pyramid to reach the highest height in accordance with the government decree.
Write an algorithm to find the height of the pyramid that the team can build.
Input:
The first line of the input consists of an integer arr_size representing the number of rock blocks (N).
The second line consists of N space-separated integers: arr[0], arr[1], …, arr[N-1], representing the widths of each rock block.
Output:
Print an integer representing the height of the pyramid that the team can build.
Constraints:
1 ≤ arr_size ≤ 10^5
1 ≤ arr[0], arr[1], …, arr[N-1] ≤ 10^8
Example:
Input:
￼
Output:
￼
Explanation:
The number of blocks that can be placed at the top level: 30. The lower (or bottom) level: 20, 40, and 100.
