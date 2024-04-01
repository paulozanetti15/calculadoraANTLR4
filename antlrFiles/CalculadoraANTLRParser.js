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
exports.OperacaoContext = exports.Expressao1Context = exports.ExpressaoContext = exports.ExpressoesContext = exports.ArquivoContext = exports.CalculadoraANTLRParser = void 0;
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
    arquivo() {
        let _localctx = new ArquivoContext(this._ctx, this.state);
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
    expressoes() {
        let _localctx = new ExpressoesContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CalculadoraANTLRParser.RULE_expressoes);
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
    expressao(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressaoContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 4;
        this.enterRecursionRule(_localctx, 4, CalculadoraANTLRParser.RULE_expressao, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 32;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
    expressao1() {
        let _localctx = new Expressao1Context(this._ctx, this.state);
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
    operacao() {
        let _localctx = new OperacaoContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CalculadoraANTLRParser.RULE_operacao);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalculadoraANTLRParser.DIVIDIR) | (1 << CalculadoraANTLRParser.POTENCIA) | (1 << CalculadoraANTLRParser.SOMAR) | (1 << CalculadoraANTLRParser.MULTIPLICAR) | (1 << CalculadoraANTLRParser.SUBTRAIR))) !== 0))) {
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
            case 2:
                return this.expressao_sempred(_localctx, predIndex);
        }
        return true;
    }
    expressao_sempred(_localctx, predIndex) {
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
CalculadoraANTLRParser.ABRE = 1;
CalculadoraANTLRParser.FECHA = 2;
CalculadoraANTLRParser.DIVIDIR = 3;
CalculadoraANTLRParser.POTENCIA = 4;
CalculadoraANTLRParser.SOMAR = 5;
CalculadoraANTLRParser.MULTIPLICAR = 6;
CalculadoraANTLRParser.SUBTRAIR = 7;
CalculadoraANTLRParser.RES = 8;
CalculadoraANTLRParser.MEMORIA = 9;
CalculadoraANTLRParser.WS = 10;
CalculadoraANTLRParser.NUMERO = 11;
CalculadoraANTLRParser.RULE_arquivo = 0;
CalculadoraANTLRParser.RULE_expressoes = 1;
CalculadoraANTLRParser.RULE_expressao = 2;
CalculadoraANTLRParser.RULE_expressao1 = 3;
CalculadoraANTLRParser.RULE_operacao = 4;
// tslint:disable:no-trailing-whitespace
CalculadoraANTLRParser.ruleNames = [
    "arquivo", "expressoes", "expressao", "expressao1", "operacao",
];
CalculadoraANTLRParser._LITERAL_NAMES = [
    undefined, "'('", "')'", "'/'", "'^'", "'+'", "'*'", "'-'", "'RES'", "'MEM'",
];
CalculadoraANTLRParser._SYMBOLIC_NAMES = [
    undefined, "ABRE", "FECHA", "DIVIDIR", "POTENCIA", "SOMAR", "MULTIPLICAR",
    "SUBTRAIR", "RES", "MEMORIA", "WS", "NUMERO",
];
CalculadoraANTLRParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CalculadoraANTLRParser._LITERAL_NAMES, CalculadoraANTLRParser._SYMBOLIC_NAMES, []);
CalculadoraANTLRParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r.\x04\x02\t" +
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
class ArquivoContext extends ParserRuleContext_1.ParserRuleContext {
    expressoes() {
        return this.getRuleContext(0, ExpressoesContext);
    }
    EOF() { return this.getToken(CalculadoraANTLRParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_arquivo; }
    // @Override
    enterRule(listener) {
        if (listener.enterArquivo) {
            listener.enterArquivo(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArquivo) {
            listener.exitArquivo(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArquivo) {
            return visitor.visitArquivo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArquivoContext = ArquivoContext;
class ExpressoesContext extends ParserRuleContext_1.ParserRuleContext {
    expressao(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }
        else {
            return this.getRuleContext(i, ExpressaoContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_expressoes; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressoes) {
            listener.enterExpressoes(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressoes) {
            listener.exitExpressoes(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressoes) {
            return visitor.visitExpressoes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressoesContext = ExpressoesContext;
class ExpressaoContext extends ParserRuleContext_1.ParserRuleContext {
    expressao1() {
        return this.tryGetRuleContext(0, Expressao1Context);
    }
    expressao(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressaoContext);
        }
        else {
            return this.getRuleContext(i, ExpressaoContext);
        }
    }
    operacao() {
        return this.tryGetRuleContext(0, OperacaoContext);
    }
    MEMORIA() { return this.tryGetToken(CalculadoraANTLRParser.MEMORIA, 0); }
    NUMERO() { return this.tryGetToken(CalculadoraANTLRParser.NUMERO, 0); }
    RES() { return this.tryGetToken(CalculadoraANTLRParser.RES, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_expressao; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressao) {
            listener.enterExpressao(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressao) {
            listener.exitExpressao(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressao) {
            return visitor.visitExpressao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressaoContext = ExpressaoContext;
class Expressao1Context extends ParserRuleContext_1.ParserRuleContext {
    ABRE() { return this.getToken(CalculadoraANTLRParser.ABRE, 0); }
    expressao() {
        return this.getRuleContext(0, ExpressaoContext);
    }
    FECHA() { return this.getToken(CalculadoraANTLRParser.FECHA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_expressao1; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressao1) {
            listener.enterExpressao1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressao1) {
            listener.exitExpressao1(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressao1) {
            return visitor.visitExpressao1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Expressao1Context = Expressao1Context;
class OperacaoContext extends ParserRuleContext_1.ParserRuleContext {
    DIVIDIR() { return this.tryGetToken(CalculadoraANTLRParser.DIVIDIR, 0); }
    POTENCIA() { return this.tryGetToken(CalculadoraANTLRParser.POTENCIA, 0); }
    SOMAR() { return this.tryGetToken(CalculadoraANTLRParser.SOMAR, 0); }
    MULTIPLICAR() { return this.tryGetToken(CalculadoraANTLRParser.MULTIPLICAR, 0); }
    SUBTRAIR() { return this.tryGetToken(CalculadoraANTLRParser.SUBTRAIR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CalculadoraANTLRParser.RULE_operacao; }
    // @Override
    enterRule(listener) {
        if (listener.enterOperacao) {
            listener.enterOperacao(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOperacao) {
            listener.exitOperacao(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperacao) {
            return visitor.visitOperacao(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperacaoContext = OperacaoContext;
