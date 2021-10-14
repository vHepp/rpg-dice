import React from 'react'
import { useState } from 'react'

const Die = () => {
	const [size, setSize] = useState(6);
	const [value , setValue] = useState(0);

	const roll = () => {
		let x = (Math.random() * size) + 1;

	}

	
	return (
		<div>
			
		</div>
	)
}

export default Die
