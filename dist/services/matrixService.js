"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatrixStatistics = void 0;
const matrixHelpers_1 = __importDefault(require("../utils/matrixHelpers"));
const getMatrixStatistics = (matrices) => {
    return (0, matrixHelpers_1.default)(matrices);
};
exports.getMatrixStatistics = getMatrixStatistics;
