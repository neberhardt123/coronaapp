import React from 'react'

function Home() {
	return (
		<div className='home'>
			<h1>Please Enter your information</h1>
			<div> Enter your age...
				<br/>
				<input type="text" placeholder="Type age here..." />
				<button>Add</button>
			</div>
		</div>
	)
}

export default Home;