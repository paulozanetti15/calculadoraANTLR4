// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalculadoraANTLRLexer extends Lexer {
	public static readonly DIV = 1;
	public static readonly MULT = 2;
	public static readonly MEM = 3;
	public static readonly WS = 4;
	public static readonly NUMBER = 5;
	public static readonly MINUS = 6;
	public static readonly LEFTPAREN = 7;
	public static readonly RIGHTPAREN = 8;
	public static readonly POW = 9;
	public static readonly PLUS = 10;
	public static readonly RES = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN", "RIGHTPAREN", 
		"POW", "PLUS", "RES",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'", "'*'", "'MEM'", undefined, undefined, "'-'", "'('", 
		"')'", "'^'", "'+'", "'RES'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN", 
		"RIGHTPAREN", "POW", "PLUS", "RES",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculadoraANTLRLexer._LITERAL_NAMES, CalculadoraANTLRLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculadoraANTLRLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalculadoraANTLRLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CalculadoraANTLR.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculadoraANTLRLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculadoraANTLRLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalculadoraANTLRLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalculadoraANTLRLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rD\b\x01\x04" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculadoraANTLRLexer.__ATN) {
			CalculadoraANTLRLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRLexer._serializedATN));
		}

		return CalculadoraANTLRLexer.__ATN;
	}

}

