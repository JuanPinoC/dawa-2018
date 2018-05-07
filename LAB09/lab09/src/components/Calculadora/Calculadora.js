import React, {Component} from 'react';

import classes from './Calculadora.css';

import BtnNumero from './BtnNumero/BtnNumero';

export default class Calculadora extends Component{
	state = {
		cont: this.props.valor
	}
	disminuirHandler = () => {
		this.setState({
			cont: this.state.cont - 1
		});
	}

	render(){
		return (
		<center>
			<div className={classes.Calculadora}>
				<h1 className={classes.Pantalla}>texto</h1>
				<div className={classes.Teclado}>
					<tr>
						<BtnNumero val={7}/>
						<BtnNumero val={8}/>
						<BtnNumero val={9}/>
					</tr>
					<tr>
						<BtnNumero val={4}/>
						<BtnNumero val={5}/>
						<BtnNumero val={6}/>
					</tr>
					<tr>
						<BtnNumero val={1}/>
						<BtnNumero val={2}/>
						<BtnNumero val={3}/>
					</tr>
				</div>
			</div>
		</center>
		)
	}
}