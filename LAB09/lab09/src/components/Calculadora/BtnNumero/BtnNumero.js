import React from 'react';

import classes from './BtnNumero.css';

const btnNumero = (props) => (
	<td className={classes.BtnNumero}>
		<h1>{props.val.toString()}</h1>
	</td>
)

export default btnNumero;