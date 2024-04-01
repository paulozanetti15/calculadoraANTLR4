// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalculadoraANTLRListener } from "./CalculadoraANTLRListener";
import { CalculadoraANTLRVisitor } from "./CalculadoraANTLRVisitor";


export class CalculadoraANTLRParser extends Parser {
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
	public static readonly RULE_arquivo = 0;
	public static readonly RULE_expressoes = 1;
	public static readonly RULE_expressao = 2;
	public static readonly RULE_expressao1 = 3;
	public static readonly RULE_operacao = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"arquivo", "expressoes", "expressao", "expressao1", "operacao",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'/'", "'^'", "'+'", "'*'", "'-'", "'RES'", "'MEM'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR", 
		"SUBTRAIR", "RES", "MEMORIA", "WS", "NUMERO",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculadoraANTLRParser._LITERAL_NAMES, CalculadoraANTLRParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculadoraANTLRParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CalculadoraANTLR.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculadoraANTLRParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculadoraANTLRParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalculadoraANTLRParser._ATN, this);
	}
	// @RuleVersion(0)
	public arquivo(): ArquivoContext {
		let _localctx: ArquivoContext = new ArquivoContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalculadoraANTLRParser.RULE_arquivo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.expressoes();
			this.state = 11;
			this.match(CalculadoraANTLRParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressoes(): ExpressoesContext {
		let _localctx: ExpressoesContext = new ExpressoesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalculadoraANTLRParser.RULE_expressoes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 13;
				this.expressao(0);
				}
				}
				this.state = 16;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalculadoraANTLRParser.ABRE) | (1 << CalculadoraANTLRParser.MEMORIA) | (1 << CalculadoraANTLRParser.NUMERO))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expressao(): ExpressaoContext;
	public expressao(_p: number): ExpressaoContext;
	// @RuleVersion(0)
	public expressao(_p?: number): ExpressaoContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressaoContext = new ExpressaoContext(this._ctx, _parentState);
		let _prevctx: ExpressaoContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CalculadoraANTLRParser.RULE_expressao, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 19;
				this.expressao1();
				}
				break;

			case 2:
				{
				this.state = 20;
				this.match(CalculadoraANTLRParser.NUMERO);
				this.state = 21;
				this.match(CalculadoraANTLRParser.RES);
				}
				break;

			case 3:
				{
				this.state = 22;
				this.match(CalculadoraANTLRParser.NUMERO);
				}
				break;

			case 4:
				{
				this.state = 23;
				this.match(CalculadoraANTLRParser.MEMORIA);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 34;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 32;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressaoContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalculadoraANTLRParser.RULE_expressao);
						this.state = 26;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 27;
						this.expressao(0);
						this.state = 28;
						this.operacao();
						}
						break;

					case 2:
						{
						_localctx = new ExpressaoContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalculadoraANTLRParser.RULE_expressao);
						this.state = 30;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 31;
						this.match(CalculadoraANTLRParser.MEMORIA);
						}
						break;
					}
					}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressao1(): Expressao1Context {
		let _localctx: Expressao1Context = new Expressao1Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalculadoraANTLRParser.RULE_expressao1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(CalculadoraANTLRParser.ABRE);
			this.state = 38;
			this.expressao(0);
			this.state = 39;
			this.match(CalculadoraANTLRParser.FECHA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operacao(): OperacaoContext {
		let _localctx: OperacaoContext = new OperacaoContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalculadoraANTLRParser.RULE_operacao);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalculadoraANTLRParser.DIVIDIR) | (1 << CalculadoraANTLRParser.POTENCIA) | (1 << CalculadoraANTLRParser.SOMAR) | (1 << CalculadoraANTLRParser.MULTIPLICAR) | (1 << CalculadoraANTLRParser.SUBTRAIR))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expressao_sempred(_localctx as ExpressaoContext, predIndex);
		}
		return true;
	}
	private expressao_sempred(_localctx: ExpressaoContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r.\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x06\x03\x11\n\x03\r\x03\x0E\x03\x12\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1B\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04#\n\x04\f\x04\x0E\x04&\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x02\x02\x03\x06\x07\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x03\x02\x05\t\x02.\x02\f\x03" +
		"\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06\x1A\x03\x02\x02\x02\b\'\x03\x02" +
		"\x02\x02\n+\x03\x02\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x07\x02\x02\x03" +
		"\x0E\x03\x03\x02\x02\x02\x0F\x11\x05\x06\x04\x02\x10\x0F\x03\x02\x02\x02" +
		"\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02" +
		"\x13\x05\x03\x02\x02\x02\x14\x15\b\x04\x01\x02\x15\x1B\x05\b\x05\x02\x16" +
		"\x17\x07\r\x02\x02\x17\x1B\x07\n\x02\x02\x18\x1B\x07\r\x02\x02\x19\x1B" +
		"\x07\v\x02\x02\x1A\x14\x03\x02\x02\x02\x1A\x16\x03\x02\x02\x02\x1A\x18" +
		"\x03\x02\x02\x02\x1A\x19\x03\x02\x02\x02\x1B$\x03\x02\x02\x02\x1C\x1D" +
		"\f\x07\x02\x02\x1D\x1E\x05\x06\x04\x02\x1E\x1F\x05\n\x06\x02\x1F#\x03" +
		"\x02\x02\x02 !\f\x06\x02\x02!#\x07\v\x02\x02\"\x1C\x03\x02\x02\x02\" " +
		"\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02" +
		"%\x07\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07\x03\x02\x02()\x05\x06\x04" +
		"\x02)*\x07\x04\x02\x02*\t\x03\x02\x02\x02+,\t\x02\x02\x02,\v\x03\x02\x02" +
		"\x02\x06\x12\x1A\"$";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculadoraANTLRParser.__ATN) {
			CalculadoraANTLRParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRParser._serializedATN));
		}

		return CalculadoraANTLRParser.__ATN;
	}

}

export class ArquivoContext extends ParserRuleContext {
	public expressoes(): ExpressoesContext {
		return this.getRuleContext(0, ExpressoesContext);
	}
	public EOF(): TerminalNode { return this.getToken(CalculadoraANTLRParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_arquivo; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterArquivo) {
			listener.enterArquivo(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitArquivo) {
			listener.exitArquivo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitArquivo) {
			return visitor.visitArquivo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressoesContext extends ParserRuleContext {
	public expressao(): ExpressaoContext[];
	public expressao(i: number): ExpressaoContext;
	public expressao(i?: number): ExpressaoContext | ExpressaoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressaoContext);
		} else {
			return this.getRuleContext(i, ExpressaoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_expressoes; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterExpressoes) {
			listener.enterExpressoes(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitExpressoes) {
			listener.exitExpressoes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitExpressoes) {
			return visitor.visitExpressoes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	public expressao1(): Expressao1Context | undefined {
		return this.tryGetRuleContext(0, Expressao1Context);
	}
	public expressao(): ExpressaoContext[];
	public expressao(i: number): ExpressaoContext;
	public expressao(i?: number): ExpressaoContext | ExpressaoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressaoContext);
		} else {
			return this.getRuleContext(i, ExpressaoContext);
		}
	}
	public operacao(): OperacaoContext | undefined {
		return this.tryGetRuleContext(0, OperacaoContext);
	}
	public MEMORIA(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.MEMORIA, 0); }
	public NUMERO(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.NUMERO, 0); }
	public RES(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.RES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_expressao; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterExpressao) {
			listener.enterExpressao(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitExpressao) {
			listener.exitExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitExpressao) {
			return visitor.visitExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expressao1Context extends ParserRuleContext {
	public ABRE(): TerminalNode { return this.getToken(CalculadoraANTLRParser.ABRE, 0); }
	public expressao(): ExpressaoContext {
		return this.getRuleContext(0, ExpressaoContext);
	}
	public FECHA(): TerminalNode { return this.getToken(CalculadoraANTLRParser.FECHA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_expressao1; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterExpressao1) {
			listener.enterExpressao1(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitExpressao1) {
			listener.exitExpressao1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitExpressao1) {
			return visitor.visitExpressao1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperacaoContext extends ParserRuleContext {
	public DIVIDIR(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.DIVIDIR, 0); }
	public POTENCIA(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.POTENCIA, 0); }
	public SOMAR(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.SOMAR, 0); }
	public MULTIPLICAR(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.MULTIPLICAR, 0); }
	public SUBTRAIR(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.SUBTRAIR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_operacao; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterOperacao) {
			listener.enterOperacao(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitOperacao) {
			listener.exitOperacao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitOperacao) {
			return visitor.visitOperacao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


