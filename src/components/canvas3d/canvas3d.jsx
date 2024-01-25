import React from 'react'
import { render } from 'react-dom';
import {Scene, PerspectiveCamera,WebGLRenderer, BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js';

const threeJS = () => {
  if ( WebGL.isWebGLAvailable() ) {
    const scene = new Scene();
    const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const box = new BoxGeometry();
    const material = new MeshBasicMaterial( { color: '#008000' } );
    const cube = new Mesh( box, material );
    scene.add( cube );
    camera.position.z = 5;
    const renderer = new WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    window.onload = () => {
      document.querySelector('#canvas').appendChild(renderer.domElement)
    }
    
    renderer.render( scene, camera );
    function animate() {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    
      renderer.render( scene, camera );
    }
    animate();
  
  } else {
  
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );
  
  }
}
const Canvas3d = () => {

    threeJS()

  return (
    <div id='canvas' style={{width: '100%',height:'100%'}}></div>
  )
}

export default Canvas3d