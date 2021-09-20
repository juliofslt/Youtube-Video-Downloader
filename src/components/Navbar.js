import {useState, useEffect} from 'react'

const Navbar = () => {

	const [status, setStatus] = useState([])

	useEffect( () => {

		const wakeUpDyno = async () => {
		//   const request = await fetch('http://localhost:5000/')
		  const request = await fetch('https://yt-dwnld-api.herokuapp.com/')
		  return request
		}
	  
		const appStatus = async () => {
			const response = await wakeUpDyno()
			if(response.status === 200){
				setStatus(1)
			}
			else{
				setStatus(0)
			}
		}
	
		appStatus()
	
	  }, [])

	return (
		<div className='navbar' >
			<div className="navbar-container">
				<h1 className='navbar-header'>Youtube Video Downloader</h1>
				<div className='navbar-status'>
					<h4>App Status:</h4>
					{
						status ? <p className='navbar-success'>Service available 🚀</p>
						:
						<p className='navbar-failure'>Beep Boop – Something's not working 🤖</p>
					}
				</div>
			</div>
		</div>
	)
}

export default Navbar
