import { React } from 'react';
import InputOne from './inputOne';
import InputTwo from './inputTwo';
import Operator from './operator';
import Result from './result';

const Calculator = () =>
	<div>
		{InputOne()} {InputTwo()} {Operator()} {Result()}
	</div>;

export default Calculator;
