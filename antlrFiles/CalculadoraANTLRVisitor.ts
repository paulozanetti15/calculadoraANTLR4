// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ArquivoContext } from "./CalculadoraANTLRParser";
import { ExpressoesContext } from "./CalculadoraANTLRParser";
import { ExpressaoContext } from "./CalculadoraANTLRParser";
import { Expressao1Context } from "./CalculadoraANTLRParser";
import { OperacaoContext } from "./CalculadoraANTLRParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculadoraANTLRParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculadoraANTLRVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.arquivo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArquivo?: (ctx: ArquivoContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.expressoes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressoes?: (ctx: ExpressoesContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.expressao1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao1?: (ctx: Expressao1Context) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.operacao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperacao?: (ctx: OperacaoContext) => Result;
}

