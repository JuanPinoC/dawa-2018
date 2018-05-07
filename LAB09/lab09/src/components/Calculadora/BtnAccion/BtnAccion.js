import React from 'react';

import classes from './BtnAccion.css';

const btnAccion = (props) => (
	<td className={classes.BtnAccion}>
		<h1>{props.val.toString()}</h1>
	</td>
)

export default btnAccion;