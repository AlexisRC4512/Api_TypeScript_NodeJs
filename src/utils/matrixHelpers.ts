/**
 * Calcula las estadísticas de un conjunto de matrices.
 * 
 * @param matrices - Un objeto donde las claves son nombres de matrices y los valores son matrices en formato de array 2D
 * @returns Un objeto con las estadísticas calculadas (máximo, mínimo, promedio, suma total, y si alguna matriz es diagonal)
 */
function calculateMatrixStats(matrices: any): any {
    const flattenedValues: number[] = [];
    let isDiagonal = true;

    for (const key in matrices) {
        const matrix = matrices[key];
        if (matrix.length === 0) continue;

        const numRows = matrix.length;
        const numCols = matrix[0].length;

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (i !== j && matrix[i][j] !== 0) {
                    isDiagonal = false;
                }
                flattenedValues.push(matrix[i][j]);
            }
        }
    }

    const max = Math.max(...flattenedValues);
    const min = Math.min(...flattenedValues);
    const sum = flattenedValues.reduce((acc, val) => acc + val, 0);
    const avg = sum / flattenedValues.length;

    return {
        max,
        min,
        average: avg,
        totalSum: sum,
        isDiagonal
    };
}

export default calculateMatrixStats;