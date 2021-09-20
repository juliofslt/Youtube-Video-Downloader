const QualityList = ( {videoDetails, download} ) => {
	
	return (
		<div className='select-wrapper'>
			<select id='select' className='input'>
				{videoDetails.map( item => (
					<option key={videoDetails.indexOf(item)} value={item.itag}>{`${item.container} - ${item.qualityLabel}`}</option>
				))}
			</select>
			<button onClick={() => download(document.getElementById('select').value)} className='input button'>Download</button>
		</div>
	)
}

export default QualityList
