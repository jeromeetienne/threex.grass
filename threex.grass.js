/* global THREE */

var THREEx = THREEx || {};

THREEx.createGrassTufts = function (positions, scene) {

    let object3d, object3d2;
    const group = new THREE.Group();
    // create the initial geometry
    var geometry = new THREE.PlaneGeometry(1, 1, 1);

    //geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, geometry.height / 2, 0));


    // Tweat the normal for better lighting
    // - normals from http://http.developer.nvidia.com/GPUGems/gpugems_ch07.html
    // - normals inspired from http://simonschreibt.de/gat/airborn-trees/
//    geometry.faces.forEach(function (face) {
//        face.vertexNormals.forEach(function (normal) {
//            normal.set(0.0, 1.0, 0.0).normalize();
//        });
//    });

    // load the texture
    var textureUrl = THREEx.createGrassTufts.baseUrl + 'images/grass01.png';

    var texture = textureLoader.load(textureUrl);

    // build the material
    var material = new THREE.MeshPhongMaterial({
        map: texture,
        color: 'grey',
        emissive: 'darkgreen',
        alphaTest: 0.7
    });

    // create each tuft and merge their geometry for performance
    var mergedGeo = new THREE.Geometry();

    for (var i = 0; i < positions.length; i++) {
        var position = positions[i];
        var baseAngle = Math.PI * 2 * Math.random();

        var nPlanes = 2;

        for (var j = 0; j < nPlanes; j++) {
            var angle = baseAngle + j * Math.PI / nPlanes;

            //const geometry = new THREE.PlaneGeometry(1, 1, 1);

            // First plane
            object3d = new THREE.Mesh(geometry, material);
            object3d.rotateY(angle);
            object3d.position.copy(position);
            object3d.updateMatrix();
            group.add(object3d);
            mergedGeo.merge(object3d.geometry, object3d.matrix);

            // The other side of the plane
            // - impossible to use ```side : THREE.BothSide``` as 
            //   it would mess up the normals
            object3d2 = new THREE.Mesh(geometry, material);
            object3d2.rotateY(angle + Math.PI);
            object3d2.position.copy(position);
            object3d2.updateMatrix();
            group.add(object3d2)
            mergedGeo.merge(object3d2.geometry, object3d2.matrix);
        }
    }

    // create the mesh
    var mesh = new THREE.Mesh(mergedGeo, material);
    //group.geometry.groupsNeedUpdate = true;
    return mesh;
};

THREEx.createGrassTufts.baseUrl = "../";


