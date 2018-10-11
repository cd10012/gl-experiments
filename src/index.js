import * as THREE from 'three';

import { add } from './tools.rs';

console.log(add(2,3));

function init() {

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.IcosahedronGeometry(2.0, 0);
  var material = new THREE.MeshNormalMaterial( { wireframe: true, wireframeLinewidth: 5 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    renderer.render( scene, camera );
  };

  animate();
}

init();
