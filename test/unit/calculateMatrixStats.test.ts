import calculateMatrixStats from "../../src/utils/matrixHelpers";


describe("calculateMatrixStats", () => {
    it("debería calcular estadísticas para matrices", () => {
        const matrices = {
            Q: [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ],
            R: [
                [5, 6, 7],
                [0, 8, 9],
                [0, 0, 10]
            ]
        };
        
        const result = calculateMatrixStats(matrices);

        expect(result).toEqual({
            max: 10,
            min: 0,
            average: 2.6666666666666665,
            totalSum: 48,
            isDiagonal: false
        });
    });

    it("debería manejar matrices vacías", () => {
        const matrices = {
            Q: [],
            R: []
        };

        const result = calculateMatrixStats(matrices);

        expect(result).toEqual({
            max: -Infinity,
            min: Infinity,
            average: NaN,
            totalSum: 0,
            isDiagonal: true
        });
    });
});