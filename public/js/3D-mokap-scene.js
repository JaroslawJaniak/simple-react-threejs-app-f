var scene = new THREE.Scene();
			scene.background= new THREE.Color("rgb(20, 20, 20)");
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.05, 500 );

			var renderer = new THREE.WebGLRenderer();
			var renderer = new THREE.WebGLRenderer({
				alpha: true // remove canvas' bg color
			});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
var dae, // graphic
	loader = new THREE.ColladaLoader(); // loader
	
function loadCollada( collada ) {
	dae = collada.scene;
	scene.add(dae);
}

loader.load( 'http://myurl.com/file/iphone6.dae', loadCollada);