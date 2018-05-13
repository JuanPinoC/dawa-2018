import React, {Component} from 'react';
import classes from './Btn.css';

export default class btn extends Component{

	state = {
		val: this.props.val,
		tipo: (typeof this.props.val === 'string')? classes.BtnOperacion:classes.BtnNumero
	}

	render(){
		return(
		<td className={[classes.Btn, this.state.tipo].join(' ')} id={this.state.val}>	
			<h1 id={this.state.val}>{this.state.val}</h1>
		</td>)
	}
}