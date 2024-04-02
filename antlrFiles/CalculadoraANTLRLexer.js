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
CalculadoraANTLRLexer.DIV = 1;
CalculadoraANTLRLexer.MULT = 2;
CalculadoraANTLRLexer.MEM = 3;
CalculadoraANTLRLexer.WS = 4;
CalculadoraANTLRLexer.NUMBER = 5;
CalculadoraANTLRLexer.MINUS = 6;
CalculadoraANTLRLexer.LEFTPAREN = 7;
CalculadoraANTLRLexer.RIGHTPAREN = 8;
CalculadoraANTLRLexer.POW = 9;
CalculadoraANTLRLexer.PLUS = 10;
CalculadoraANTLRLexer.RES = 11;
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRLexer.modeNames = [
    "DEFAULT_MODE",
];
CalculadoraANTLRLexer.ruleNames = [
    "DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN", "RIGHTPAREN",
    "POW", "PLUS", "RES",
];
CalculadoraANTLRLexer._LITERAL_NAMES = [
    undefined, "'/'", "'*'", "'MEM'", undefined, undefined, "'-'", "'('",
    "')'", "'^'", "'+'", "'RES'",
];
CalculadoraANTLRLexer._SYMBOLIC_NAMES = [
    undefined, "DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN",
    "RIGHTPAREN", "POW", "PLUS", "RES",
];
CalculadoraANTLRLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CalculadoraANTLRLexer._LITERAL_NAMES, CalculadoraANTLRLexer._SYMBOLIC_NAMES, []);
CalculadoraANTLRLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rD\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
    "\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x06\x05#" +
    "\n\x05\r\x05\x0E\x05$\x03\x05\x03\x05\x03\x06\x06\x06*\n\x06\r\x06\x0E" +
    "\x06+\x03\x06\x03\x06\x07\x060\n\x06\f\x06\x0E\x063\v\x06\x05\x065\n\x06" +
    "\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f" +
    "\x03\f\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
    "\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
    "\x02\r\x03\x02\x03\x05\x02\v\f\x0E\x0F\"\"\x02G\x02\x03\x03\x02\x02\x02" +
    "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
    "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
    "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
    "\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1B\x03\x02\x02\x02\x07" +
    "\x1D\x03\x02\x02\x02\t\"\x03\x02\x02\x02\v)\x03\x02\x02\x02\r6\x03\x02" +
    "\x02\x02\x0F8\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13<\x03\x02\x02\x02" +
    "\x15>\x03\x02\x02\x02\x17@\x03\x02\x02\x02\x19\x1A\x071\x02\x02\x1A\x04" +
    "\x03\x02\x02\x02\x1B\x1C\x07,\x02\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E" +
    "\x07O\x02\x02\x1E\x1F\x07G\x02\x02\x1F \x07O\x02\x02 \b\x03\x02\x02\x02" +
    "!#\t\x02\x02\x02\"!\x03\x02\x02\x02#$\x03\x02\x02\x02$\"\x03\x02\x02\x02" +
    "$%\x03\x02\x02\x02%&\x03\x02\x02\x02&\'\b\x05\x02\x02\'\n\x03\x02\x02" +
    "\x02(*\x042;\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02" +
    "+,\x03\x02\x02\x02,4\x03\x02\x02\x02-1\x070\x02\x02.0\x042;\x02/.\x03" +
    "\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0225\x03" +
    "\x02\x02\x0231\x03\x02\x02\x024-\x03\x02\x02\x0245\x03\x02\x02\x025\f" +
    "\x03\x02\x02\x0267\x07/\x02\x027\x0E\x03\x02\x02\x0289\x07*\x02\x029\x10" +
    "\x03\x02\x02\x02:;\x07+\x02\x02;\x12\x03\x02\x02\x02<=\x07`\x02\x02=\x14" +
    "\x03\x02\x02\x02>?\x07-\x02\x02?\x16\x03\x02\x02\x02@A\x07T\x02\x02AB" +
    "\x07G\x02\x02BC\x07U\x02\x02C\x18\x03\x02\x02\x02\x07\x02$+14\x03\b\x02" +
    "\x02";
