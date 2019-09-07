import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

import './App.css';

function App() {
	
  return (
<div className="App">
<header className="App-header" id="App-header">
	<div className="main">
		<p className="foot" id="foot">
			Design & Digital by ©Jarosław Janiak WFiIS UŁ
		</p>
		<div id="page">
			<div id="nav_2">
				<p id="title">IPHONE 4S 8GB CZARNY</p>
			</div>
			
			<div id="iphone-images">
				<img className="iphone-image" id="iphone-image1" src={img1}  
				alt="iphone image" width="150" height="150"/>
				
				<img className="iphone-image" id="iphone-image2" src={img2}  
				alt="iphone image" width="150" height="150"/>
				
				<img className="iphone-image" id="iphone-image3" src={img3}  
				alt="iphone image" width="150" height="150"/>
			</div>		

		</div>

		<div className="clear"></div>
		
		<div id="iphone-expended-image-cont">
			<img id="iphone-expended-image" src={img3} alt="iphone" />
		</div>
		
	</div>
	
	  <div className="clear"></div>
</header>
</div>
  );
}


export default App;
