// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ArquivoContext } from "./CalculadoraANTLRParser";
import { ExpressoesContext } from "./CalculadoraANTLRParser";
import { ExpressaoContext } from "./CalculadoraANTLRParser";
import { Expressao1Context } from "./CalculadoraANTLRParser";
import { OperacaoContext } from "./CalculadoraANTLRParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculadoraANTLRParser`.
 */
export interface CalculadoraANTLRListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.arquivo`.
	 * @param ctx the parse tree
	 */
	enterArquivo?: (ctx: ArquivoContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.arquivo`.
	 * @param ctx the parse tree
	 */
	exitArquivo?: (ctx: ArquivoContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.expressoes`.
	 * @param ctx the parse tree
	 */
	enterExpressoes?: (ctx: ExpressoesContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.expressoes`.
	 * @param ctx the parse tree
	 */
	exitExpressoes?: (ctx: ExpressoesContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.expressao`.
	 * @param ctx the parse tree
	 */
	enterExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.expressao`.
	 * @param ctx the parse tree
	 */
	exitExpressao?: (ctx: ExpressaoContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.expressao1`.
	 * @param ctx the parse tree
	 */
	enterExpressao1?: (ctx: Expressao1Context) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.expressao1`.
	 * @param ctx the parse tree
	 */
	exitExpressao1?: (ctx: Expressao1Context) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.operacao`.
	 * @param ctx the parse tree
	 */
	enterOperacao?: (ctx: OperacaoContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.operacao`.
	 * @param ctx the parse tree
	 */
	exitOperacao?: (ctx: OperacaoContext) => void;
}

