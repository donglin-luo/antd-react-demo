int[] current = cell.clone(); // 当前细胞状态
        int[] next = new int[cell.length]; // 临时数组存储下一天的状态

        // 模拟天数
        for (int day = 0; day < days; day++) {
            for (int i = 0; i < cell.length; i++) {
                // 左右邻居
                int left = (i == 0) ? 0 : current[i - 1];
                int right = (i == cell.length - 1) ? 0 : current[i + 1];

                // 更新规则
                next[i] = (left == right) ? 0 : 1;
            }
            // 更新到当前状态
            System.arraycopy(next, 0, current, 0, cell.length);
        }

        return current;
