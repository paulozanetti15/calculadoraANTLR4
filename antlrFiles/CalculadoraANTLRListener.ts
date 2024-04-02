// Generated from CalculadoraANTLR.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./CalculadoraANTLRParser";
import { EquationsContext } from "./CalculadoraANTLRParser";
import { EquationContext } from "./CalculadoraANTLRParser";
import { ExpressionContext } from "./CalculadoraANTLRParser";
import { OperationContext } from "./CalculadoraANTLRParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculadoraANTLRParser`.
 */
export interface CalculadoraANTLRListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.equations`.
	 * @param ctx the parse tree
	 */
	enterEquations?: (ctx: EquationsContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.equations`.
	 * @param ctx the parse tree
	 */
	exitEquations?: (ctx: EquationsContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalculadoraANTLRParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `CalculadoraANTLRParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;
}

