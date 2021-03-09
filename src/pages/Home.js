import React from 'react'
import { Link } from 'react-router-dom';
import c from '../images/c.jpg'

function Home() {
	return (
	<>
		<div className='home'>
			<div className='item'>
			<h1>Corona Virus - How much at risk are you?</h1>
			<img src= {c} width="500" height="300" />
			<br/>
			<Link to="/test"> Take our Test</Link>
			</div>

		</div>
		<div className='dashboard'>

		</div>
	</>
	)
}

export default Home;