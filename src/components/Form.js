import {useState} from 'react'
import DownloadOptions from './DownloadOptions'

const Form = () => {

	const [videourl, setVideourl] = useState('')
	const [videoTitle, setVideoTitle] = useState('')
	const [videoQuality, setVideoQuality] = useState([])
	const [videoThumbnail, setVideoThumbnail] = useState('')

	// Search youtube video
	const onSubmit = async (e) => {
		e.preventDefault()

		const request = async () => {
			const response = await fetch(`https://yt-dwnld-api.herokuapp.com/video-information?url=${videourl}`)
			const jsonResponse = await response.json()

			return jsonResponse
		}

		const regex = /(www\.)?youtube\.com\//gi
		
		if(regex.test(videourl)){
			const response = await request()
			
			setVideoTitle(response.videoTitle)
			setVideoThumbnail(response.videoInfo.thumbnail.url)
			setVideoQuality(response.videoInfo.videosWithAudio)
			console.log(response)
			
		}
		else{
			alert("Please check Youtube URL and try again")
		}
	}

	// Reset states and stop render results
	const deleteResults = () => {
		setVideoTitle('')
		setVideoQuality([])
		setVideoThumbnail('')
		setVideourl('')
	}

	// Download Video
	const onClick = async (itag) => {
		window.open(`https://yt-dwnld-api.herokuapp.com/video-download?url=${videourl}&itag=${itag}`)
	}

	return (
		<div className='downloader-container'>
			<form className='form' onSubmit={onSubmit}>
				<div className='form-header'>
					<label htmlFor=""><h2>Youtube Video URL</h2></label>
				</div>

				<div className='form-input'>
					<input className='input text' type="text" placeholder='www.youtube.com/...' value={videourl} onChange={ (e) => setVideourl(e.target.value)} />
					<input className='input button' type="submit" value="Search" />
				</div>
			</form>

			{videoQuality.length !== 0 ? 
			<DownloadOptions download={onClick} deleteResults ={deleteResults} videoTitle={videoTitle} videoQuality={videoQuality} videoThumbnail={videoThumbnail} />
			:
			''
			}
		</div>
	)
}

export default Form
