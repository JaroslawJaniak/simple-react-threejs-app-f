//React-App-ThreeJSv1
//Jarosław_Janiak_WFIS_2019

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

document.getElementById("iphone-image1").addEventListener("click", changeCont);

document.getElementById("iphone-image2").addEventListener("click", changeCont2);

document.getElementById("iphone-image3").addEventListener("click", changeCont3);

function changeCont() {
	var item = document.getElementById("iphone-image1");
	var target = document.getElementById("iphone-expended-image");
	
	target.src = item.src;
}

function changeCont2() {
	var item = document.getElementById("iphone-image2");
	var target = document.getElementById("iphone-expended-image");
	
	target.src = item.src;
}

function changeCont3() {
	var item = document.getElementById("iphone-image3");
	var target = document.getElementById("iphone-expended-image");
	
	target.src = item.src;
}


