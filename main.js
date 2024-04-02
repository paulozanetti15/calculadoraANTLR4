"use strict";
// Developers -> Julien Vinicius, Matheus Lucato, Paulo Zanetti
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const CalculadoraANTLRParser_1 = require("./antlrFiles/CalculadoraANTLRParser");
const CalculadoraANTLRLexer_1 = require("./antlrFiles/CalculadoraANTLRLexer");
const fs = __importStar(require("fs"));
// This variable read my input file
const code = fs.readFileSync("test1.txt", "utf8");
const inputStream = antlr4ts_1.CharStreams.fromString(code);
// this variable will generate lexer
const lexer = new CalculadoraANTLRLexer_1.CalculadoraANTLRLexer(inputStream);
const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
// this variable will generate parser
const parser = new CalculadoraANTLRParser_1.CalculadoraANTLRParser(tokenStream);
// print the output
console.log(parser.file().toStringTree());
