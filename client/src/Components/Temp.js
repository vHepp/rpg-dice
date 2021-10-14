import React, { useState} from 'react'
import '../Styles/Temp.css';

const Temp = ({id}) => {
	const [x, setX] = useState(0);
	const [adv, setAdv] = useState("flat"); /* 0 is flat, 1 is adv, 2 is dis*/
	const [rolled, setRolled] = useState('~~~~~~~~~');

	const roll = (sides) => {
		if (adv !== "flat"){
			let min, max;
			let r1 = Math.floor((Math.random()*sides)+1),
				r2 = Math.floor((Math.random()*sides)+1);
			
			if (r1 > r2){
				max = r1;
				min = r2;
			}
			else { /* if they are equal or r2 is greater, max - r2 */
				max = r2;
				min = r1;
			}
			setRolled(`max: ${max}, min: ${min}`)

			if (adv === "adv"){
				setX(max);
			}
			else{
				setX(min);
			}
		}
		else {
			let result = Math.floor((Math.random()*sides)+1);
			setRolled(`Rolled: ${result}`)
			setX(result);
		}
	}

	return (
		<div>
			<div>
				<h1>
					Result: {x}
				</h1>
				<h3>
					{rolled}
				</h3>
				<h2 id='modifiers'>
					Modifiers: {adv}
				</h2>
			</div>

			<div id='dice-buttons'>
				<button onClick= {() => roll(4)}> d4 </button>
				<button onClick= {() => roll(6)}> d6 </button>
				<button onClick= {() => roll(8)}> d8 </button>
				<button onClick= {() => roll(10)}> d10 </button>
				<button onClick= {() => roll(12)}> d12</button>
				<button onClick= {() => roll(20)}> d20 </button>
				<button onClick= {() => roll(100)}> d100 </button>
			</div>
			<div id='roll modifiers'>
				<button onClick = {() => setAdv('dis')}> Disadvantage </button>
				<button onClick = {() => setAdv('flat')}> Flat </button>
				<button onClick = {() => setAdv('adv')}> Advantage </button>
			</div>
		</div>
	)
}

export default Temp
