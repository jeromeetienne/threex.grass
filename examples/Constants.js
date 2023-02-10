class SceneConstants
{
    constructor(THREE) {
        this.THREE = THREE;
        
        // player
        this.PLAYER_MOVE_SPEED = 0.2;
        this.PLAYER_TURN_SPEED = 0.05;
        this.PLAYER_HEIGHT = 100;
        this.CAMERA_LR_D = 50;
        this.CAMERA_UD_D = 1;
        this.RAYCASTER_HEIGHT = 1000;
        
        // console, screen or none
        this.SHOW_LOADING_PROGRESS = 'screen';

        // CONSTANTS
        // multiplier for the terrain height to exagerate or smooth
        this.TERRAIN_HEIGHT_MOD = 2;
        // raycaster direction
        this.DOWN_VECTOR = new THREE.Vector3(0, -1, 0);
        // no trees if less than 10000
        this.GROUND_SIZE = 10000;
        // for the falling snow top
        this.SKY_HEIGHT = 3000;
        // moon things
        this.MOON_SCALE = 1000;
        this.MOON_POS = new THREE.Vector3(-this.GROUND_SIZE * 2, (this.GROUND_SIZE * 2) / 2, 0);
        this.MOONLIGHT_POS = new THREE.Vector3(-this.GROUND_SIZE, this.GROUND_SIZE / 2, 0);

        // The three stats box thing
        this.SHOW_STATS = false;

        // how many
        this.DEER_COUNT = 50;
        this.SNOWFLAKES = 50000;
        this.TREE_COUNT = 100;
        this.TREE_SINK = 100;
        this.TREE_SCALE = 20;

        this.CAMERA_FOV = 75;
        this.CAMERA_ASPECT = window.innerWidth / window.innerHeight;
        this.CAMERA_NEAR = 0.1;
        this.CAMERA_FAR = this.GROUND_SIZE * 5;

        this.LIGHT_SPECS = {
            ALIGHT_COLOR: 0x666666,
            DLIGHT_COLOR: 0x455767,
            DLIGHT_POS: this.MOONLIGHT_POS,
            DLIGHT_CAST: true,
            DLIGHT_SHADOW_TR: 5000,
            DLIGHT_SHADOW_BL: -5000,
            DLIGHT_SHADOW_MAPSIZE: 2048,
            DLIGHT_SHADOW_NEAR: 0.5,
            DLIGHT_SHADOW_FAR: this.GROUND_SIZE * 2
        };

        this.SKY_SPECS = {
            SKY_PATH: "assets/skyboxes/forest/",
            SKY_IMAGES: ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"]
        };
    }
}
