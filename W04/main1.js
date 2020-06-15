function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
        [ -1,  1, 1 ], // v4
        [ -1, -1, 1 ], // v0
        [  1, -1, 1 ], // v1
	[  1,  1, 1 ], // v5
	[  1, -1,  -1 ], // v2
	[  1,  1,  -1 ], // v6
	[ -1, -1,  -1 ], // v3
	[ -1,  1,  -1 ] // v7
	
    ];

    var faces = [
        [ 0, 1, 2 ], // f0
	[ 0, 2, 3 ], // f1
	[ 3, 2, 4 ], // f2
	[ 3, 4, 5 ], // f3
	[ 5, 4, 6 ], // f4
	[ 5, 6, 7 ], // f5
	[ 7, 6, 1 ], // f6
	[ 7, 1, 0 ], // f7
	[ 7, 0, 3 ], // f8
	[ 7, 3, 5 ], // f9
	[ 1, 6, 2 ], // f10
	[ 2, 6, 4 ] // f11
	
    ];


    var geometry = new THREE.Geometry();
    var material = new THREE.MeshLambertMaterial();
    
    var nvertices = vertices.length;
    for (var i=0; i<nvertices; i++)
    {
	var v = new THREE.Vector3().fromArray( vertices[i] );
	geometry.vertices.push(v);
    }

    var nfaces = faces.length;
    for (var i=0; i<nfaces; i++)
    {
	var id = faces[i];
	var f = new THREE.Face3( id[0], id[1], id[2] );
	geometry.faces.push( f );

    }
    
    //    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    for(var i=0; i<nfaces; i++)
    {
	geometry.faces[i].color = new THREE.Color( 1, 1, 1 );
    }

    geometry.computeFaceNormals();
    //material.side = THREE.BackSide;
    //material.side = THREE.DoubleSide;

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.004;
        cube.rotation.y += 0.004;
        renderer.render( scene, camera );
    }
}
