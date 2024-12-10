哦空培训支持

public static int[] stateOfCells(int[] cell, int days) {
    int cell_size = cell.length;
    int[] answer = new int[days * cell_size];
    int index = 0;

    for (int day = 0; day < days; day++) {
        int[] newCell = cell.clone(); // 创建一个新数组来存储下一代的状态

        for (int i = 0; i < cell_size; i++) {
            int liveNeighbors = countLiveNeighbors(cell, i);

            if (cell[i] == 1 && (liveNeighbors == 2 || liveNeighbors == 3)) {
                newCell[i] = 1; // 活细胞，且邻居数量为2或3，保持存活
            } else if (cell[i] == 0 && liveNeighbors == 3) {
                newCell[i] = 1; // 死细胞，且邻居数量为3，变为活细胞
            } else {
                newCell[i] = 0; // 其他情况，细胞死亡或保持死亡
            }
        }

        cell = newCell; // 更新细胞状态为下一代

        for (int i = 0; i < cell_size; i++) {
            answer[index++] = cell[i];
        }
    }

    return answer;
}

private static int countLiveNeighbors(int[] cell, int index) {
    int cell_size = cell.length;
    int liveNeighbors = 0;

    // 检查当前细胞的邻居
    for (int i = -1; i <= 1; i++) {
        for (int j = -1; j <= 1; j++) {
            int x = (index + i + cell_size) % cell_size;
            int y = (index / cell_size + j) % cell_size;
            liveNeighbors += cell[x * cell_size + y];
        }
    }

    // 减去当前细胞本身，因为它不应该被计算在内
    liveNeighbors -= cell[index];

    return liveNeighbors;
}
