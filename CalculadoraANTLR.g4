// Developed by: Julien Vinicius ; Matheus Lucato ; Paulo Zanetti

grammar CalculadoraANTLR;

arquivo : expressoes EOF; // A file consists of expressions followed by the end of file marker.

expressoes : expressao+; // Expressions is composed of one or more expressions.

expressao : expressao1  // An expression can be of type expression1
          | expressao expressao operacao // Or it can be composed of two expressions and an operation.
          | expressao MEMORIA // Or it can be a memory reference.
          | NUMERO RES // Or it can be a number followed by RES.
          | NUMERO // Or it can be just a number.
          | MEMORIA; // Or it can be just a memory reference.

expressao1 : ABRE expressao FECHA; // An expression1 is an expression enclosed in parentheses.

operacao : DIVIDIR  // Operation can be division
         | POTENCIA // Or exponentiation
         | SOMAR    // Or addition
         | MULTIPLICAR // Or multiplication
         | SUBTRAIR; // Or subtraction

ABRE : '('; // Token for opening parenthesis
FECHA : ')'; // Token for closing parenthesis
DIVIDIR : '/'; // Token for division
POTENCIA : '^'; // Token for exponentiation
SOMAR : '+'; // Token for addition
MULTIPLICAR : '*'; // Token for multiplication
SUBTRAIR : '-'; // Token for subtraction
RES : 'RES'; // Token for memory result
MEMORIA : 'MEM'; // Token for memory
WS: [ \t\n\r\f]+ -> skip ; // Whitespace rule to skip spaces, tabs, newlines, etc.
NUMERO : '0' .. '9'+ ('.' ('0'..'9')*)?; // Rule for matching numbers, including decimals.
