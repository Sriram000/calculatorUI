import { React } from 'react';
import context from '../core/context';

const InputTwo = () =>
	<input
		value={ context.state.operandTwo }
		onChange={ (evt) => context.actions.setInputTwo(evt.target.value) }
	/>;

export default InputTwo;
