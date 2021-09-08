const setInputOne = ({ data }) => ({
	operandOne: Number(data),
});

const setInputTwo = ({ data }) => ({
	operandTwo: Number(data),
});

const setOperator = ({ data }) => ({
	operator: data,
});

const actions = {
	setInputOne,
	setInputTwo,
	setOperator,
};

export default actions;
