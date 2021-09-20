import QualityList from "./QualityList"

const DownloadOptions = ( {videoTitle, videoQuality, videoThumbnail, deleteResults, download} ) => {
	return (
		<div className="download-options">
			<div className='options-title'>
				<h2 className='video-title header'>Video Title <button onClick={ () => deleteResults()} className='button input'>x</button> </h2>
				<p className='video-title'>{videoTitle}</p>
			</div>
			<div className='options-details'>
				<img className='video-image' src={videoThumbnail} alt="video thumbnail" />
				<div className="quality-details">
					<h3>Quality</h3>
					<QualityList download={download} className='video-options' videoDetails={videoQuality} />
				</div>
			</div>
		</div>
	)
}

export default DownloadOptions
