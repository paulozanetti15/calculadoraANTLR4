// Developers -> Julien Vinicius, Matheus Lucato, Paulo Zanetti

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { CalculadoraANTLRParser } from "./antlrFiles/CalculadoraANTLRParser";
import { CalculadoraANTLRLexer } from "./antlrFiles/CalculadoraANTLRLexer";
import * as fs from "fs";

// This variable read my input file
const code = fs.readFileSync("test1.txt", "utf8");

const inputStream = CharStreams.fromString(code);

// this variable will generate lexer
const lexer = new CalculadoraANTLRLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);

// this variable will generate parser
const parser = new CalculadoraANTLRParser(tokenStream);

// print the output
console.log(parser.file().toStringTree());