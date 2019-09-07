const myFunction = () => {
	
//jQeury_part
		$(document).ready(function(){
		
		let isRotate = true;
		if(isRotate == true){$("#intro").css("color", "orange");}
			
		  $("#hide").click(function(){
			$("img").css("visibility", "hidden");
			$("img").css("animation-play-state", "paused");
			isRotate = false;
			if(isRotate == false){$("#intro").css("color", "red");}
		  });
		  
		  $("#show").click(function(){
			$("img").css("visibility", "visible");
			$("img").css("animation-play-state", "running");
			isRotate = true;
			if(isRotate == true){$("#intro").css("color", "green");}
		  });
		  
		  
		  $("#start").click(function(){
			$("img").css("animation-play-state", "running");
			isRotate = true;
			if(isRotate == true){$("#intro").css("color", "green");}
		  });
		  $("#stop").click(function(){
			$("img").css("animation-play-state", "paused");
			isRotate = false;
			if(isRotate == false){$("#intro").css("color", "red");}
		  });
		  
		  
		  
		  $(".cont-logo").click(function(){
			$("img").css("animation-play-state", "paused");
			isRotate = false;
		  });
		  
		  
		  $(".cont-logo").dblclick(function(){
			$("img").css("animation-play-state", "running");
			isRotate = true;
		  });
		  		
		});

	
//ThreeJS_part
			var scene = new THREE.Scene();
			scene.background = new THREE.Color("#202020");
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.05, 500 );

			var renderer = new THREE.WebGLRenderer();
			var renderer = new THREE.WebGLRenderer({
				alpha: true 
			});
			
			var isShown = false;
			console.log("isShown: " + isShown);
			document.getElementById("react-info").addEventListener("click", function(){
				if(isShown == false){
				open3D_model();
				}
				else{
				close3D_model();
				}
			});
			
			function open3D_model(){
				renderer.domElement.style.display = "block";
				document.getElementById("react-info").innerHTML = "Click here to hide 3D iPhone model";
				document.getElementById("App-header").style.opacity="0.7";
				document.getElementById("App-header").style.filter= "blur(8px)";
				isShown = true;
				console.log("display: " + renderer.domElement.style.display);
				console.log(renderer.domElement.style.display == "block");
			}
			
			function close3D_model(){
				renderer.domElement.style.display = "none";
				document.getElementById("react-info").innerHTML = "Click here to show 3D iPhone model";
				document.getElementById("App-header").style.opacity="1";
				document.getElementById("App-header").style.filter= "blur(0px)";
				document.body.removeEventListener("click", close3D_model);
				isShown = false;			
			}
			
			if(renderer.domElement.style.display == "block"){
				document.body.addEventListener("click", close3D_model);
			}
			
				
			renderer.setSize( window.innerWidth, window.innerHeight, true );
			renderer.domElement.style.position = 'absolute';
			renderer.domElement.style.top = "100px";
			renderer.domElement.style.display = "none";
			
			renderer.domElement.style.border = "thick solid #ffffff";
			renderer.domElement.style.boxShadow =  "-10px 16px 20px 0 black";
			renderer.domElement.style.width = "140vmin";
			renderer.domElement.style.height = "64vmin";
			renderer.domElement.style.marginBottom = "5%";
			renderer.domElement.addEventListener("mouseover", function(){
				controls.noZoom = false;
				controls.rotateSpeed = 3.0;
				document.body.removeEventListener("click", close3D_model);
			});
			renderer.domElement.addEventListener("mouseout", function(){
				controls.noZoom = true;
				controls.rotateSpeed = 0.0;
				document.body.addEventListener("click", close3D_model);
				
			});
			
			console.log("Renderer.info: " + renderer.info);
			console.log("Canvas.width: " + window.innerWidth);
            console.log("Canvas.height: " + window.innerHeight);
			
			document.body.appendChild( renderer.domElement );
			
			// load a texture, set wrap mode to repeat
			var texture = new THREE.TextureLoader().load( "textures/ultra_hd_abstract_C.jpg" );
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
			
			// Trackball Controller
			var controls = new THREE.TrackballControls( camera );
			controls.rotateSpeed = 0.0;
			controls.zoomSpeed = 1.0;
			controls.panSpeed = 0.5;
			controls.noZoom = true;
			controls.noPan = true;
			controls.staticMoving = false;
			controls.dynamicDampingFactor = 0.2;
			
			// Lighting
			var iphone_color  = '#FAFAFA',
			ambientLight  = new THREE.AmbientLight( '#EEEEEE' ),
			hemiLight     = new THREE.HemisphereLight( iphone_color, iphone_color, 0 ),
			light         = new THREE.PointLight( iphone_color, 1, 100 );

			hemiLight.position.set( 0, 50, 0 );
			light.position.set( 0, 20, 10 );

			scene.add( ambientLight );
			scene.add( hemiLight );
			scene.add( light )

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { map: texture } );
			material.side = THREE.DoubleSide;
			
			var cube = new THREE.Mesh( geometry, material );
			var cube2 = new THREE.Mesh( geometry, material );
			cube.position.set(-1, 0, -1);
			cube2.position.set(1, 0, 1);
			
			//scene.add( cube );
			//scene.add( cube2 );
			
			//Object Loader
			loader = new THREE.ColladaLoader();
			
			var dae;
				
			loader.load( "IPhone4Gs_5.dae", function ( collada ) {
					dae = collada.scene;
					dae.position.set(0.8, -1.4, 0.6);
					dae.scale.set(1,1,1);
					scene.add(dae);
				});
			
			
			var axisHelper = new THREE.AxisHelper( 1. );
			//scene.add( axisHelper );

			camera.position.x = 4;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				//dae.rotation.x += 0.005;
				//dae.rotation.z += 0.005;
				//axisHelper.rotation.z += 0.005;
				
				cube2.rotation.x -= 0.01;
				cube2.rotation.y += 0.01;
				
				controls.update();

				renderer.render( scene, camera );
			};

			animate();
}