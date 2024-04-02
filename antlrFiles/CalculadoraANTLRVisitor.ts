// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./CalculadoraANTLRParser";
import { EquationsContext } from "./CalculadoraANTLRParser";
import { EquationContext } from "./CalculadoraANTLRParser";
import { ExpressionContext } from "./CalculadoraANTLRParser";
import { OperationContext } from "./CalculadoraANTLRParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculadoraANTLRParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculadoraANTLRVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.equations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquations?: (ctx: EquationsContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculadoraANTLRParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;
}

