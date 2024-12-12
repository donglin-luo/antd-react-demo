import java.util.Arrays;

public class Solution {
    public static double minPossLen(int posk, int[] retailerXcord, int headXcord, int headYcord) {
        // 将零售商坐标转换为二维数组
        double[][] retailers = new double[posk + 1][2];
        for (int i = 0; i < posk; i++) {
            retailers[i][0] = retailerXcord[i];
            retailers[i][1] = 0;
        }
        retailers[posk][0] = headXcord;
        retailers[posk][1] = headYcord;

        // 计算所有零售商之间的距离
        double totalDistance = 0;
        for (int i = 0; i < posk; i++) {
            for (int j = i + 1; j <= posk; j++) {
                double distance = Math.sqrt(Math.pow(retailers[i][0] - retailers[j][0], 2) + Math.pow(retailers[i][1] - retailers[j][1], 2));
                totalDistance += distance;
            }
        }

        // 考虑经过头零售商的最短路径
        double distanceViaHead = 0;
        for (int i = 0; i < posk; i++) {
            distanceViaHead += Math.sqrt(Math.pow(retailers[i][0] - retailers[posk][0], 2) + Math.pow(retailers[i][1] - retailers[posk][1], 2));
        }

        // 返回两种路径中较短的一个
        return Math.min(totalDistance, distanceViaHead * 2);
    }

    public static void main(String[] args) {
        int posk = 1;
        int[] retailerXcord = {3, 1, 0, 2};
        int headXcord = 1;
        int headYcord = 1;
        System.out.printf("%.6f\n", minPossLen(posk, retailerXcord, headXcord, headYcord));
    }
}
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class NonCommonElementsCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 读取第一个列表的大小和元素
        int listInput1Size = scanner.nextInt();
        Set<Integer> set1 = new HashSet<>();
        for (int i = 0; i < listInput1Size; i++) {
            set1.add(scanner.nextInt());
        }

        // 读取第二个列表的大小和元素
        int listInput2Size = scanner.nextInt();
        Set<Integer> set2 = new HashSet<>();
        for (int i = 0; i < listInput2Size; i++) {
            set2.add(scanner.nextInt());
        }

        // 计算不共有的元素数量
        int nonCommonCount = countNonCommonElements(set1, set2);

        // 打印结果
        System.out.println(nonCommonCount);

        scanner.close();
    }

    private static int countNonCommonElements(Set<Integer> set1, Set<Integer> set2) {
        Set<Integer> nonCommonElements = new HashSet<>(set1);
        nonCommonElements.addAll(set2); // 将set2的元素添加到nonCommonElements中
        nonCommonElements.removeAll(set1); // 移除set1中的元素
        nonCommonElements.removeAll(set2); // 移除set2中的元素

        return nonCommonElements.size(); // 返回不共有元素的数量
    }
}
Given a binary string S consisting of only Os and 1s, write an algorithm to find the numbeof different ways to get the longest consecutive sub-segment of 1s only. You are allowedto change any K number of 0s to 1s. lf two ways lead to the same string, they areconsidered to be similar, not different.
Input
The first line ofthe input consists of an integer -/istinput1 size, an integerrepresenting the number of elements in the first list (N).
The second line consists of N space-separated integers representing the first list of
positive integers.
The third line consists of an integer- /istinput2 size, representing the number ofelements in the second list (M).
The last line consists of M space-separated integers representing the second list ofpositive integers.
Output
Print a positive integer representing the count of elements that are not common toboth the lists of integers.
Example
input
11
1 1 2 3 4 5 5 7 6 9 10
10
11 12 13 45 6 7 18 19 20
Output.
12
Explanation:
The numbers that are not common to both lists are [1, 1, 2, 3, 9,10, 11, 12, 13, 18, 19,20].
So, the output is 12.
SHL

Question

The current selected programming language is Java. We emphasize the submission of a fully working code over partially correct but inefficient code. Once submitted you cannot review this problem again. You can use System.out.print() to debug your code. The version of JDK being used is 1.8.

Note: The main class name must be "Solution"

You are given two strings containing only English letters. Write an algorithm to count the number of occurrences of the second string in the first string. (You may disregard the case of the letters.)

Input
The first line of the input consists of a string parent, representing the first string.
The second line consists of a string sub, representing the second string.

Output
Print an integer representing the number of occurrences of Sub in Parent. If no occurrence is found in Parent then print 0.

Example
Input:
TimIsPlayingWithTheHouseOfTim
Tim
Output:
3

Explanation
Tim occurs 3 times in the first string.
So, the output is 3.

import java.util.*;
import java.lang.*;
import java.io.*;

public class Solution
{
    public static int countOccur(String parent, String sub)
    {
        int answer = 0;
        // Write your code here

        return answer;
    }

    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        // Input for parent
        // Input for sub
    }
}
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
