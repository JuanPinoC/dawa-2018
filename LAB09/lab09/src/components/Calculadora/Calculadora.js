import React, {Component} from 'react';

import classes from './Calculadora.css';

import Btn from './Btn/Btn.js';

export default class Calculadora extends Component{

	state = {
		pantallita: ""
	}

	limpiar = () =>{
		this.setState({
			pantallita: ""
		});
	}

	comprobar = (e) => {
		let ops = ["+","-","x","/","%"];
		let arr = this.state.pantallita.split("");
		arr.push(e);

		//comprobar que no empiece con un simbolo
		if(ops.includes(arr[0])) return false;

		//comprobar si hay dos simbolos seguidos
		if(ops.includes(arr[arr.length-2]) && ops.includes(arr[arr.length-1])) return false;

		//comprobar si hay un punto despues de un simbolo
		if(ops.includes(arr[arr.length-2]) && (arr[arr.length-1]===".")) return false;

		//comprobar si hay un punto antes de un numero
		if(arr[0]===".")return false;

		//comprobar si hay varios puntos
		if((arr[arr.length-2]===".") && (arr[arr.length-1]===".")) return false;

		//comprobar si hay 2 puntos en un numero
		if(false) return false;

		return true;
	}

	comprobarResolver = () => {
		let ops = ["+","-","x","/","%"];
		let arr = this.state.pantallita.split("");

		if(ops.includes(arr[arr.length-1])) return false;

		return true;
	}

	resolver = () => {
		if(!this.comprobarResolver()) return;

		let ops1 = ["x","/","%"];
		let ops2 = ["+","-"];
		
		let str = this.state.pantallita.split("+").join(" ");
		str=str.split("-").join(" ");
		str=str.split("x").join(" ");
		str=str.split("/").join(" ");
		str=str.split("%").join(" ");

		let nums = str.split(" ");
		let t = 1;
		
		for(let i=0; i< str.length; i++){
			if(str[i]===" "){
				nums.splice(t, 0,this.state.pantallita[i]);
				t=t+2;
			}
		}

		console.log(nums);

		for(let i=0; i< nums.length;i++){
			if(ops1.includes(nums[i])){
				switch(nums[i]){
					case "x":nums.splice(i-1,3,parseFloat(nums[i-1])*parseFloat(nums[i+1]));break;
					case "/":nums.splice(i-1,3,parseFloat(nums[i-1])/parseFloat(nums[i+1]));break;
					case "%":nums.splice(i-1,3,parseFloat(nums[i-1])%parseFloat(nums[i+1]));break;
				}
				i = i-1;
			}
		}
		
		for(let i=0; i< nums.length;i++){
			if(ops2.includes(nums[i])){
				switch(nums[i]){
					case "+":nums.splice(i-1,3,parseFloat(nums[i-1])+parseFloat(nums[i+1]));break;
					case "-":nums.splice(i-1,3,parseFloat(nums[i-1])-parseFloat(nums[i+1]));break;
				}
				i = i-1;
			}
		}

		this.setState({
			pantallita: nums[0] + ""
		});
	}

	addElementHandler = (e) => {
		if(e.target.id === 'c'){
				this.limpiar();
		}else if(this.comprobar(e.target.id)){
			if(e.target.id === '='){
				this.resolver();
			}else{
				this.setState({
					pantallita: this.state.pantallita + e.target.id
				});
			}
		}
	}

	render(){
		return (
		<center>
			<div className={classes.Calculadora}>
				<h1 className={classes.Pantalla}>{this.state.pantallita}</h1>
				<div className={classes.Teclado} onClick={this.addElementHandler}>

					<tr>
						<Btn val={7}/><Btn val={8}/><Btn val={9}/><Btn val={"c"}/><Btn val={"+"}/><Btn val={"x"}/>
					</tr>
					<tr>
						<Btn val={4}/><Btn val={5}/><Btn val={6}/><Btn val={"="}/><Btn val={"-"}/><Btn val={"/"}/>
					</tr>
					<tr>
						<Btn val={1}/><Btn val={2}/><Btn val={3}/><Btn val={0}/><Btn val={"%"}/><Btn val={"."}/>
					</tr>

				</div>
			</div>
		</center>
		)
	}
}