import { React } from 'react';
import context from '../core/context';

const InputOne = () =>
	<input
		value={ context.state.operandOne }
		onChange={ (evt) => context.actions.setInputOne(evt.target.value) }
	/>;

export default InputOne;
