#include <stdio.h>

int main() {
    // Declare a 4D array
    int array[2][3][4][5];

    // Initialize the 4D array with some values
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 4; k++) {
                for (int l = 0; l < 5; l++) {
                    array[i][j][k][l] = i + j + k + l;
                }
            }
        }
    }

    // Print the values of the 4D array
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 4; k++) {
                for (int l = 0; l < 5; l++) {
                    printf("array[%d][%d][%d][%d] = %d\n", i, j, k, l, array[i][j][k][l]);
                }
            }
        }
    }

    return 0;
}
