import { React } from 'react';
import Operations from './calculator';
import { keys } from '@laufire/utils/collection';
import context from '../core/context';

const Options = (operation) =>
	<option key={ operation } value={ operation }>
		{operation}
	</option>;

const Operator = () =>
	<select
		name="operator"
		onChange={ (evt) => context.actions.setOperator(evt.target.value) }
	>
		{keys(Operations).map(Options)};
	</select>;

export default Operator;
