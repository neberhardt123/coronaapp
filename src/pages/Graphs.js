import React from 'react'
import {inputButtons} from '../components/inputButtons'
import {Button} from '../components/Button.js'

function Graphs() {
	//const [button, setButton] = useState(true);

	//const handleClick = () => setClick(!click);
	return (
		<div className='home'>
			<div className='item'> 
			<h1>Please Enter your information</h1>
				{inputButtons.map((item) => {
				return (
					<>
					{item.title}
					<br/>
					<input type={item.type} width={item.width} className={item.cName} placeholder={item.place} />
					<br/>
					</>
					);
				})}
				<Button buttonStyle='btn--outline'>Go</Button>
			</div>

		</div>
	)
}

export default Graphs;