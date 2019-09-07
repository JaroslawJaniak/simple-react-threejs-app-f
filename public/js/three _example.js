const mScene = () => {
			var scene = new THREE.Scene();
			scene.background= new THREE.Color("rgb(20, 20, 20)");
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.05, 500 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight/2 );
			document.body.appendChild( renderer.domElement );
			
			// load a texture, set wrap mode to repeat
			var texture = new THREE.TextureLoader().load( "textures/ultra_hd_abstract_4.jpg" );
			//texture.wrapS = THREE.RepeatWrapping;
			//texture.wrapT = THREE.RepeatWrapping;
			//texture.repeat.set( 4, 4 );

			var geometry = new THREE.BoxGeometry( 0.5, 1, 0.5 );
			//var material = new THREE.MeshBasicMaterial( { color: 0x992211 } );
			var material = new THREE.MeshBasicMaterial( { map: texture } );
			material.side = THREE.DoubleSide;
			
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 4;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
}