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
	public static readonly RULE_file = 0;
	public static readonly RULE_equations = 1;
	public static readonly RULE_equation = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_operation = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "equations", "equation", "expression", "operation",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'/'", "'*'", "'MEM'", undefined, undefined, "'-'", "'('", 
		"')'", "'^'", "'+'", "'RES'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN", 
		"RIGHTPAREN", "POW", "PLUS", "RES",
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
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalculadoraANTLRParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.equations();
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
	public equations(): EquationsContext {
		let _localctx: EquationsContext = new EquationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalculadoraANTLRParser.RULE_equations);
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
				this.equation();
				}
				}
				this.state = 16;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CalculadoraANTLRParser.LEFTPAREN);
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
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalculadoraANTLRParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(CalculadoraANTLRParser.LEFTPAREN);
			this.state = 19;
			this.expression(0);
			this.state = 20;
			this.match(CalculadoraANTLRParser.RIGHTPAREN);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, CalculadoraANTLRParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 23;
				this.equation();
				}
				break;

			case 2:
				{
				this.state = 24;
				this.match(CalculadoraANTLRParser.MEM);
				}
				break;

			case 3:
				{
				this.state = 25;
				this.match(CalculadoraANTLRParser.NUMBER);
				this.state = 26;
				this.match(CalculadoraANTLRParser.RES);
				}
				break;

			case 4:
				{
				this.state = 27;
				this.match(CalculadoraANTLRParser.NUMBER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalculadoraANTLRParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 31;
						this.expression(0);
						this.state = 32;
						this.operation();
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CalculadoraANTLRParser.RULE_expression);
						this.state = 34;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 35;
						this.match(CalculadoraANTLRParser.MEM);
						}
						break;
					}
					}
				}
				this.state = 40;
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
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalculadoraANTLRParser.RULE_operation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalculadoraANTLRParser.DIV) | (1 << CalculadoraANTLRParser.MULT) | (1 << CalculadoraANTLRParser.MINUS) | (1 << CalculadoraANTLRParser.POW) | (1 << CalculadoraANTLRParser.PLUS))) !== 0))) {
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
		case 3:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"\x1F\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\'\n" +
		"\x05\f\x05\x0E\x05*\v\x05\x03\x06\x03\x06\x03\x06\x02\x02\x03\b\x07\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x05\x02\x03\x04\b\b\v\f\x02." +
		"\x02\f\x03\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06\x14\x03\x02\x02\x02" +
		"\b\x1E\x03\x02\x02\x02\n+\x03\x02\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x07" +
		"\x02\x02\x03\x0E\x03\x03\x02\x02\x02\x0F\x11\x05\x06\x04\x02\x10\x0F\x03" +
		"\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03" +
		"\x02\x02\x02\x13\x05\x03\x02\x02\x02\x14\x15\x07\t\x02\x02\x15\x16\x05" +
		"\b\x05\x02\x16\x17\x07\n\x02\x02\x17\x07\x03\x02\x02\x02\x18\x19\b\x05" +
		"\x01\x02\x19\x1F\x05\x06\x04\x02\x1A\x1F\x07\x05\x02\x02\x1B\x1C\x07\x07" +
		"\x02\x02\x1C\x1F\x07\r\x02\x02\x1D\x1F\x07\x07\x02\x02\x1E\x18\x03\x02" +
		"\x02\x02\x1E\x1A\x03\x02\x02\x02\x1E\x1B\x03\x02\x02\x02\x1E\x1D\x03\x02" +
		"\x02\x02\x1F(\x03\x02\x02\x02 !\f\x07\x02\x02!\"\x05\b\x05\x02\"#\x05" +
		"\n\x06\x02#\'\x03\x02\x02\x02$%\f\x06\x02\x02%\'\x07\x05\x02\x02& \x03" +
		"\x02\x02\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()" +
		"\x03\x02\x02\x02)\t\x03\x02\x02\x02*(\x03\x02\x02\x02+,\t\x02\x02\x02" +
		",\v\x03\x02\x02\x02\x06\x12\x1E&(";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculadoraANTLRParser.__ATN) {
			CalculadoraANTLRParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRParser._serializedATN));
		}

		return CalculadoraANTLRParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public equations(): EquationsContext {
		return this.getRuleContext(0, EquationsContext);
	}
	public EOF(): TerminalNode { return this.getToken(CalculadoraANTLRParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_file; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationsContext extends ParserRuleContext {
	public equation(): EquationContext[];
	public equation(i: number): EquationContext;
	public equation(i?: number): EquationContext | EquationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EquationContext);
		} else {
			return this.getRuleContext(i, EquationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_equations; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterEquations) {
			listener.enterEquations(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitEquations) {
			listener.exitEquations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitEquations) {
			return visitor.visitEquations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquationContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(CalculadoraANTLRParser.LEFTPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RIGHTPAREN(): TerminalNode { return this.getToken(CalculadoraANTLRParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_equation; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitEquation) {
			return visitor.visitEquation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public equation(): EquationContext | undefined {
		return this.tryGetRuleContext(0, EquationContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	public MEM(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.MEM, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.NUMBER, 0); }
	public RES(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.RES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_expression; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.DIV, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.MULT, 0); }
	public POW(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.POW, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CalculadoraANTLRParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculadoraANTLRParser.RULE_operation; }
	// @Override
	public enterRule(listener: CalculadoraANTLRListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculadoraANTLRListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculadoraANTLRVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


