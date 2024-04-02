// Developed by: Julien Vinicius, Matheus Lucato, Paulo Zanetti

grammar CalculadoraANTLR;

//  *********** PARSER ***********

file : equations EOF;  // The starting point of the grammar, expects a series of equations followed by the end of the file

equations : equation+;  // Represents one or more equations

equation : LEFTPAREN expression RIGHTPAREN;  // An equation is enclosed in parentheses and contains an expression

expression : equation  // Represents an equation as an expression
        | expression expression operation  // Represents two expressions combined by a mathematical operation
        | expression MEM  // Represents an expression followed by a memory operation
        | MEM  // Represents a memory operation
        | NUMBER RES  // Represents a number followed by a result operation
        | NUMBER;  // Represents just a number

operation : DIV  // division operator
        | MULT  // multiplication operator
        | POW  // power operator
        | PLUS  // addition operator
        | MINUS;  // subtraction operator




//  *********** LEXER ***********



DIV : '/';  // division symbol
MULT : '*';  // multiplication symbol
MEM : 'MEM';  // "MEM" keyword
WS: [ \t\n\r\f]+ -> skip ;  // whitespace to be ignored
NUMBER : '0' .. '9'+ ('.' ('0'..'9')*)?;  // number, which can include a decimal part
MINUS : '-';  // minus symbol
LEFTPAREN : '(';  // left parenthesis symbol
RIGHTPAREN : ')';  // right parenthesis symbol
POW : '^';  // power symbol
PLUS : '+';  // plus symbol
RES : 'RES';  // "%" keyword
