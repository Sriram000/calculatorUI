import { React } from 'react';
import context from '../core/context';
import calculator from '../services/calculator';

const Result = () => <div>{ calculator.calc(context) }</div>;

export default Result;
