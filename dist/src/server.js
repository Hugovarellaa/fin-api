"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PORT = 3333;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World! ok');
});
app.listen(PORT, function () { return console.log("listening on port ".concat(PORT)); });
