import java.util.Arrays;

public class Solution {
    public static int[] calculatePrimeNumbers(int num) {
        // 创建一个布尔数组，用于标记数字是否为素数
        boolean[] isPrime = new boolean[num + 1];
        Arrays.fill(isPrime, true); // 初始假设所有数都是素数
        isPrime[0] = false; // 0不是素数
        isPrime[1] = false; // 1不是素数

        // 从2开始到sqrt(num)，检查每个数是否为素数
        for (int i = 2; i * i <= num; i++) {
            if (isPrime[i]) {
                // 如果是素数，那么它的倍数都不是素数
                for (int j = i * i; j <= num; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        // 收集所有素数
        int count = 0;
        for (int i = 2; i <= num; i++) {
            if (isPrime[i]) {
                count++;
            }
        }

        // 创建结果数组，大小为素数的数量
        int[] answer = new int[count];
        int index = 0;

        // 填充结果数组
        for (int i = 2; i <= num; i++) {
            if (isPrime[i]) {
                answer[index++] = i;
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        in.close();

        int[] result = calculatePrimeNumbers(num);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + (i < result.length - 1 ? " " : ""));
        }
    }
}
Certainly, here is the text extracted from the image:
SHL

Question

The current selected programming language is Java. We emphasize the submission of a fully working code over partially correct but inefficient code. Once submitted you cannot review this problem again. You can use System.out.print() to debug your code. The System.out.print() may not work in case of syntax/runtime error. The version of JDK being used is 1.8.

Note: The main class name must be "Solution"

A prime number is divisible only by 1 and itself. The teacher writes a positive integer on the board. Write an algorithm to find all the prime numbers from 2 to the given positive number.

Input
The first line of the input consists of an integer num, representing the number written on the board.

Output
Print space separated integers representing the prime numbers represented by the teacher in increasing order, if no prime number exists within given range, then do not print anything.

Constraints
1 < num < 10^9

Example
Input:
11

Output:
2 3 5 7 11

Explanation
For the given prime number, the prime numbers are 2, 3, 5, 7, and 11.

import java.util.*;
import java.lang.*;
import java.io.*;

public class Solution
{
    public static int[] calculatePrimeNumbers(int num)
    {
        int[] answer = new int[100];
        // Write your code here

        return answer;
    }

    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        // input for num
        int num = in.nextInt();

        int[] result = calculatePrimeNumbers(num);
        for(int idx = 0; idx < result.length - 1; idx++)
            System.out.print(result[idx] + " ");
        System.out.print(result[result.length - 1]);
    }
}

IamplayingonthehouseofTimwiththegangofTim
Tim
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
