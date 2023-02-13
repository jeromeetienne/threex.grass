/* global THREE */

var THREEx = THREEx || {};

THREEx.baseUrl = "../";

THREEx.createGrassTufts = function (positions, scene, materialData) {

    let object3d, object3d2;

    // create the initial geometry
    var geometry = new THREE.PlaneGeometry(1, 1, 1);
    
    // normalizeNormals() and computeVertexNormals() maybe?
    // no longer have direct access to normals -KellyCode 13/2/23
    // 
    // Tweak the normal for better lighting
    // - normals from http://http.developer.nvidia.com/GPUGems/gpugems_ch07.html
    // - normals inspired from http://simonschreibt.de/gat/airborn-trees/
    //    geometry.faces.forEach(function (face) {
    //        face.vertexNormals.forEach(function (normal) {
    //            normal.set(0.0, 1.0, 0.0).normalize();
    //        });
    //    });

    // build the material
    var material = new THREE.MeshPhongMaterial(materialData);

    // using a group instead of a geometry or mesh to merge
    let mergeGroup = new THREE.Group();

    for (var i = 0; i < positions.length; i++) {
        var position = positions[i];
        var baseAngle = Math.PI * 2 * Math.random();

        var nPlanes = 2;

        for (var j = 0; j < nPlanes; j++) {
            var angle = baseAngle + j * Math.PI / nPlanes;

            // First plane
            object3d = new THREE.Mesh(geometry, material);
            object3d.rotateY(angle);
            object3d.position.copy(position);
            object3d.updateMatrix();
            mergeGroup.add(object3d);

            // The other side of the plane
            object3d2 = new THREE.Mesh(geometry, material);
            object3d2.rotateY(angle + Math.PI);
            object3d2.position.copy(position);
            object3d2.updateMatrix();
            mergeGroup.add(object3d);
        }
    }

    // create the mesh
    scene.add(mergeGroup);
};


