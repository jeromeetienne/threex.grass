
Update 13/2/2023
1. Update to latest THREE r147 (last revision before forced module use)
2. Camera controls added for easier looking around
3. Organization mostly for readability
4. geometry.merge (no longer available) replaced with group.add (easy peasy)

threex.grass
===================

threex.grass is a three.js extension which provides fast grass tufts. 
It has [tweaked normals](http://simonschreibt.de/gat/airborn-trees/) for better lighting,
and a [merged geometry](http://learningthreejs.com/blog/2011/10/05/performance-merging-geometry/)
to better performance.
It is loosely based on 
["Rendering Countless Blades of Waving Grass" GPUGem](http://http.developer.nvidia.com/GPUGems/gpugems_ch07.html).


Show Don't Tell
===============
* [examples/demo.html](http://jeromeetienne.github.io/threex.grass/examples/demo.html)
\[[view source](https://github.com/jeromeetienne/threex.grass/blob/master/examples/demo.html)\] :
It shows a demo of how to use this game extension
* [examples/basic.html](http://jeromeetienne.github.io/threex.grass/examples/basic.html)
\[[view source](https://github.com/jeromeetienne/threex.grass/blob/master/examples/basic.html)\] :
It shows the most basic usage.

How To Install It
=================

You can install it via script tag

```html
<script src='threex.grass.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install threex.grass
```

How To Use It
=============

To create a full grass, first you determine the positions of each grass tufts you want
and put that in a array. Like this.

```javascript
var positions	= []
positions.push(new THREE.Vector3(-1,0,0))
positions.push(new THREE.Vector3(+1,0,0))
```

So you got one tuft on the left at (-1,0,0)
and another on the right at (+1,0,0). 
Now let's create a mesh with a tufts at each of those positions.


```javascript
var mesh	= new THREEx.createGrassTufts(positions)
scene.add(mesh)
```

You are done! 

References and Credits
======================
* thanks a lot to [bai](http://baicoianu.com/) on irc for the textures and the helps during the tunning
* ["Rendering Grass in Real Time with Dynamic Lighting"](http://www.kevinboulanger.net/grass.html)
* ["Rendering Countless Blades of Waving Grass" GPUGem](http://http.developer.nvidia.com/GPUGems/gpugems_ch07.html)
* ["Procedural grass rendering"](http://outerra.blogspot.fr/2012/05/procedural-grass-rendering.html)
* ["Airborn – Trees" post](http://simonschreibt.de/gat/airborn-trees/) for normal tweaking

## TODO
* make a demo with minecraft walking in it, with daynight cycle and later swarm
* make a version which use THREE.ParticlesSystem. it is fast and may work well when the grass is far.
  * CON: use gl-pointsize so very limited size on screen
  * CON: particle arent lite. one could set a color per particle to simulate ligthing.
    if middle of the day, use white. if the night, use grey. something like that
  * PRO: likely faster
