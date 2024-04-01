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
	public static readonly ABRE = 1;
	public static readonly FECHA = 2;
	public static readonly DIVIDIR = 3;
	public static readonly POTENCIA = 4;
	public static readonly SOMAR = 5;
	public static readonly MULTIPLICAR = 6;
	public static readonly SUBTRAIR = 7;
	public static readonly RES = 8;
	public static readonly MEMORIA = 9;
	public static readonly WS = 10;
	public static readonly NUMERO = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR", "SUBTRAIR", 
		"RES", "MEMORIA", "WS", "NUMERO",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'/'", "'^'", "'+'", "'*'", "'-'", "'RES'", "'MEM'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR", 
		"SUBTRAIR", "RES", "MEMORIA", "WS", "NUMERO",
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculadoraANTLRLexer.__ATN) {
			CalculadoraANTLRLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRLexer._serializedATN));
		}

		return CalculadoraANTLRLexer.__ATN;
	}

}

