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
exports.OperationContext = exports.ExpressionContext = exports.EquationContext = exports.EquationsContext = exports.FileContext = exports.CalculadoraANTLRParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CalculadoraANTLRParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return CalculadoraANTLRParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "CalculadoraANTLR.g4"; }
    // @Override
    get ruleNames() { return CalculadoraANTLRParser.ruleNames; }
    // @Override
    get serializedATN() { return CalculadoraANTLRParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CalculadoraANTLRParser._ATN, this);
    }
    // @RuleVersion(0)
    file() {
        let _localctx = new FileContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    equations() {
        let _localctx = new EquationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CalculadoraANTLRParser.RULE_equations);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    equation() {
        let _localctx = new EquationContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 6;
        this.enterRecursionRule(_localctx, 6, CalculadoraANTLRParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 28;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 36;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    operation() {
        let _localctx = new OperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CalculadoraANTLRParser.RULE_operation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalculadoraANTLRParser.DIV) | (1 << CalculadoraANTLRParser.MULT) | (1 << CalculadoraANTLRParser.MINUS) | (1 << CalculadoraANTLRParser.POW) | (1 << CalculadoraANTLRParser.PLUS))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 3:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
        }
        return true;
    }
    static get _ATN() {
        if (!CalculadoraANTLRParser.__ATN) {
            CalculadoraANTLRParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CalculadoraANTLRParser._serializedATN));
        }
        return CalculadoraANTLRParser.__ATN;
    }
}
exports.CalculadoraANTLRParser = CalculadoraANTLRParser;
CalculadoraANTLRParser.DIV = 1;
CalculadoraANTLRParser.MULT = 2;
CalculadoraANTLRParser.MEM = 3;
CalculadoraANTLRParser.WS = 4;
CalculadoraANTLRParser.NUMBER = 5;
CalculadoraANTLRParser.MINUS = 6;
CalculadoraANTLRParser.LEFTPAREN = 7;
CalculadoraANTLRParser.RIGHTPAREN = 8;
CalculadoraANTLRParser.POW = 9;
CalculadoraANTLRParser.PLUS = 10;
CalculadoraANTLRParser.RES = 11;
CalculadoraANTLRParser.RULE_file = 0;
CalculadoraANTLRParser.RULE_equations = 1;
CalculadoraANTLRParser.RULE_equation = 2;
CalculadoraANTLRParser.RULE_expression = 3;
CalculadoraANTLRParser.RULE_operation = 4;
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRParser.ruleNames = [
    "file", "equations", "equation", "expression", "operation",
];
CalculadoraANTLRParser._LITERAL_NAMES = [
    undefined, "'/'", "'*'", "'MEM'", undefined, undefined, "'-'", "'('",
    "')'", "'^'", "'+'", "'RES'",
];
CalculadoraANTLRParser._SYMBOLIC_NAMES = [
    undefined, "DIV", "MULT", "MEM", "WS", "NUMBER", "MINUS", "LEFTPAREN",
    "RIGHTPAREN", "POW", "PLUS", "RES",
];
CalculadoraANTLRParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CalculadoraANTLRParser._LITERAL_NAMES, CalculadoraANTLRParser._SYMBOLIC_NAMES, []);
CalculadoraANTLRParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r.\x04\x02\t" +
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
class FileContext extends ParserRuleContext_1.ParserRuleContext {
    equations() {
        return this.getRuleContext(0, EquationsContext);
    }
    EOF() { return this.getToken(CalculadoraANTLRParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_file; }
    // @Override
    enterRule(listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FileContext = FileContext;
class EquationsContext extends ParserRuleContext_1.ParserRuleContext {
    equation(i) {
        if (i === undefined) {
            return this.getRuleContexts(EquationContext);
        }
        else {
            return this.getRuleContext(i, EquationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_equations; }
    // @Override
    enterRule(listener) {
        if (listener.enterEquations) {
            listener.enterEquations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEquations) {
            listener.exitEquations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEquations) {
            return visitor.visitEquations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EquationsContext = EquationsContext;
class EquationContext extends ParserRuleContext_1.ParserRuleContext {
    LEFTPAREN() { return this.getToken(CalculadoraANTLRParser.LEFTPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RIGHTPAREN() { return this.getToken(CalculadoraANTLRParser.RIGHTPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_equation; }
    // @Override
    enterRule(listener) {
        if (listener.enterEquation) {
            listener.enterEquation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEquation) {
            listener.exitEquation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEquation) {
            return visitor.visitEquation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EquationContext = EquationContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    equation() {
        return this.tryGetRuleContext(0, EquationContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    operation() {
        return this.tryGetRuleContext(0, OperationContext);
    }
    MEM() { return this.tryGetToken(CalculadoraANTLRParser.MEM, 0); }
    NUMBER() { return this.tryGetToken(CalculadoraANTLRParser.NUMBER, 0); }
    RES() { return this.tryGetToken(CalculadoraANTLRParser.RES, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class OperationContext extends ParserRuleContext_1.ParserRuleContext {
    DIV() { return this.tryGetToken(CalculadoraANTLRParser.DIV, 0); }
    MULT() { return this.tryGetToken(CalculadoraANTLRParser.MULT, 0); }
    POW() { return this.tryGetToken(CalculadoraANTLRParser.POW, 0); }
    PLUS() { return this.tryGetToken(CalculadoraANTLRParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(CalculadoraANTLRParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_operation; }
    // @Override
    enterRule(listener) {
        if (listener.enterOperation) {
            listener.enterOperation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOperation) {
            listener.exitOperation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperation) {
            return visitor.visitOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperationContext = OperationContext;
