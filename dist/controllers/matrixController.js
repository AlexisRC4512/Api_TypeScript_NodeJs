"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMatrixStats = void 0;
const matrixService_1 = require("../services/matrixService");
const handleMatrixStats = (req, res) => {
    const matrices = req.body;
    if (!matrices || typeof matrices !== 'object') {
        res.status(400).send('Invalid input');
        return;
    }
    try {
        const results = (0, matrixService_1.getMatrixStatistics)(matrices);
        res.json(results);
    }
    catch (error) {
        res.status(500).send('Server error');
    }
};
exports.handleMatrixStats = handleMatrixStats;
