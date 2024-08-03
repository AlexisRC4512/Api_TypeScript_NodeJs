"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const matrixRoutes_1 = __importDefault(require("./routes/matrixRoutes"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use('/matrix', matrixRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
exports.default = app;
