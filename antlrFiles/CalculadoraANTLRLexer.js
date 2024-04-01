"use strict";
// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.CalculadoraANTLRLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CalculadoraANTLRLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return CalculadoraANTLRLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(CalculadoraANTLRLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "CalculadoraANTLR.g4"; }
    // @Override
    get ruleNames() { return CalculadoraANTLRLexer.ruleNames; }
    // @Override
    get serializedATN() { return CalculadoraANTLRLexer._serializedATN; }
    // @Override
    get channelNames() { return CalculadoraANTLRLexer.channelNames; }
    // @Override
    get modeNames() { return CalculadoraANTLRLexer.modeNames; }
    static get _ATN() {
        if (!CalculadoraANTLRLexer.__ATN) {
            CalculadoraANTLRLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRLexer._serializedATN));
        }
        return CalculadoraANTLRLexer.__ATN;
    }
}
exports.CalculadoraANTLRLexer = CalculadoraANTLRLexer;
CalculadoraANTLRLexer.ABRE = 1;
CalculadoraANTLRLexer.FECHA = 2;
CalculadoraANTLRLexer.DIVIDIR = 3;
CalculadoraANTLRLexer.POTENCIA = 4;
CalculadoraANTLRLexer.SOMAR = 5;
CalculadoraANTLRLexer.MULTIPLICAR = 6;
CalculadoraANTLRLexer.SUBTRAIR = 7;
CalculadoraANTLRLexer.RES = 8;
CalculadoraANTLRLexer.MEMORIA = 9;
CalculadoraANTLRLexer.WS = 10;
CalculadoraANTLRLexer.NUMERO = 11;
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRLexer.modeNames = [
    "DEFAULT_MODE",
];
CalculadoraANTLRLexer.ruleNames = [
    "ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR", "SUBTRAIR",
    "RES", "MEMORIA", "WS", "NUMERO",
];
CalculadoraANTLRLexer._LITERAL_NAMES = [
    undefined, "'('", "')'", "'/'", "'^'", "'+'", "'*'", "'-'", "'RES'", "'MEM'",
];
CalculadoraANTLRLexer._SYMBOLIC_NAMES = [
    undefined, "ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR",
    "SUBTRAIR", "RES", "MEMORIA", "WS", "NUMERO",
];
CalculadoraANTLRLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CalculadoraANTLRLexer._LITERAL_NAMES, CalculadoraANTLRLexer._SYMBOLIC_NAMES, []);
CalculadoraANTLRLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rD\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
    "\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
    "\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
    "\n\x03\v\x06\v1\n\v\r\v\x0E\v2\x03\v\x03\v\x03\f\x06\f8\n\f\r\f\x0E\f" +
    "9\x03\f\x03\f\x07\f>\n\f\f\f\x0E\fA\v\f\x05\fC\n\f\x02\x02\x02\r\x03\x02" +
    "\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11" +
    "\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\x03\x05\x02\v\f\x0E\x0F\"" +
    "\"\x02G\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
    "\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
    "\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
    "\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02" +
    "\x02\x05\x1B\x03\x02\x02\x02\x07\x1D\x03\x02\x02\x02\t\x1F\x03\x02\x02" +
    "\x02\v!\x03\x02\x02\x02\r#\x03\x02\x02\x02\x0F%\x03\x02\x02\x02\x11\'" +
    "\x03\x02\x02\x02\x13+\x03\x02\x02\x02\x150\x03\x02\x02\x02\x177\x03\x02" +
    "\x02\x02\x19\x1A\x07*\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07+\x02" +
    "\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E\x071\x02\x02\x1E\b\x03\x02\x02\x02" +
    "\x1F \x07`\x02\x02 \n\x03\x02\x02\x02!\"\x07-\x02\x02\"\f\x03\x02\x02" +
    "\x02#$\x07,\x02\x02$\x0E\x03\x02\x02\x02%&\x07/\x02\x02&\x10\x03\x02\x02" +
    "\x02\'(\x07T\x02\x02()\x07G\x02\x02)*\x07U\x02\x02*\x12\x03\x02\x02\x02" +
    "+,\x07O\x02\x02,-\x07G\x02\x02-.\x07O\x02\x02.\x14\x03\x02\x02\x02/1\t" +
    "\x02\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x0223\x03" +
    "\x02\x02\x0234\x03\x02\x02\x0245\b\v\x02\x025\x16\x03\x02\x02\x0268\x04" +
    "2;\x0276\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02" +
    "\x02\x02:B\x03\x02\x02\x02;?\x070\x02\x02<>\x042;\x02=<\x03\x02\x02\x02" +
    ">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@C\x03\x02\x02\x02" +
    "A?\x03\x02\x02\x02B;\x03\x02\x02\x02BC\x03\x02\x02\x02C\x18\x03\x02\x02" +
    "\x02\x07\x0229?B\x03\b\x02\x02";
