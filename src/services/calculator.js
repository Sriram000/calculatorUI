import Operations from 'calculator';

const calculator = {
	calc: ({ state: { operator, operandOne, operandTwo }}) =>
		Operations[operator](operandOne, operandTwo),
};

export default calculator;
