import calculateMatrixStats from "../utils/matrixHelpers";

/**
 * Calcula las estadísticas de un conjunto de matrices.
 * 
 * @param matrices - Un objeto donde las claves son nombres de matrices y los valores son matrices en formato de array 2D
 * @returns Un objeto con las estadísticas calculadas (máximo, mínimo, promedio, suma total, y si alguna matriz es diagonal)
 */
export const getMatrixStatistics = (matrices: any): any => {
    return calculateMatrixStats(matrices);
};