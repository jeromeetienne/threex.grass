CameraKeyControls = function (player, domElement, THREE) {
    var scope = this;

    this.PLAYER_MOVE_SPEED = 0.2;
    this.PLAYER_LIFT_SPEED = 0.01;
    this.PLAYER_TURN_SPEED = 0.05;

    this.domElement = domElement !== undefined ? domElement : document;

    this.player_action = {
        moveUp: false,
        moveDown: false,
        moveForward: false,
        moveBack: false,
        turnLeft: false,
        turnRight: false,
        strafeLeft: false,
        strafeRight: false,
        lookUp: false,
        lookDown: false
    };

    this.onKeyDown = function (event) {
        console.log(event.keyCode)
        switch (event.keyCode) {
            case 87: /*W*/
            case 38 /*up arrow*/:
                scope.player_action.moveForward = true;
                break;
            case 68: /*D*/
            case 39 /*right arrow*/:
                scope.player_action.turnRight = true;
                break;
            case 65: /*A*/
            case 37 /*left arrow*/:
                scope.player_action.turnLeft = true;
                break;
            case 83: /*S*/
            case 40 /*down arrow*/:
                scope.player_action.moveBack = true;
                break;
            case 109 /*numpad -*/:
                scope.player_action.moveDown = true;
                break;
            case 107 /*numpad +*/:
                scope.player_action.moveUp = true;
                break;
            case 81 /*Q*/:
                scope.player_action.strafeLeft = true;
                break;
            case 69 /*E*/:
                scope.player_action.strafeRight = true;
                break;
            case 85 /*U*/:
                scope.player_action.lookUp = true;
                break;
            case 74 /*J*/:
                scope.player_action.lookDown = true;
                break;
        }
    };

    this.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 87: /*W*/
            case 38 /*up arrow*/:
                scope.player_action.moveForward = false;
                break;
            case 68: /*D*/
            case 39 /*right arrow*/:
                scope.player_action.turnRight = false;
                break;
            case 65: /*A*/
            case 37 /*left arrow*/:
                scope.player_action.turnLeft = false;
                break;
            case 83: /*S*/
            case 40 /*down arrow*/:
                scope.player_action.moveBack = false;
                break;
            case 109 /*numpad -*/:
                scope.player_action.moveDown = false;
                break;
            case 107 /*numpad +*/:
                scope.player_action.moveUp = false;
                break;
            case 81 /*Q*/:
                scope.player_action.strafeLeft = false;
                break;
            case 69 /*E*/:
                scope.player_action.strafeRight = false;
                break;
            case 85 /*U*/:
                scope.player_action.lookUp = false;
                break;
            case 74 /*J*/:
                scope.player_action.lookDown = false;
                break;
        }
    };

    this.updatePlayerPosition = function () {
        if (scope.player_action.moveUp) {
            player.position.y += this.PLAYER_LIFT_SPEED;
        }
        if (scope.player_action.moveDown) {
            player.position.y -= this.PLAYER_LIFT_SPEED;
        }
        if (scope.player_action.moveForward) {
            player.position.z -= Math.cos(player.rotation.y) * this.PLAYER_MOVE_SPEED;
            player.position.x -= Math.sin(player.rotation.y) * this.PLAYER_MOVE_SPEED;
        }
        if (scope.player_action.moveBack) {
            player.position.z += Math.cos(player.rotation.y) * this.PLAYER_MOVE_SPEED;
            player.position.x += Math.sin(player.rotation.y) * this.PLAYER_MOVE_SPEED;
        }
        if (scope.player_action.turnLeft) {
            player.rotation.y += this.PLAYER_TURN_SPEED;
        }
        if (scope.player_action.turnRight) {
            player.rotation.y -= this.PLAYER_TURN_SPEED;
        }
        if (scope.player_action.strafeLeft) {
            player.position.z += Math.cos(player.rotation.y - Math.PI / 2) * this.PLAYER_MOVE_SPEED;
            player.position.x += Math.sin(player.rotation.y - Math.PI / 2) * this.PLAYER_MOVE_SPEED;
        }
        if (scope.player_action.strafeRight) {
            player.position.z -= Math.cos(player.rotation.y - Math.PI / 2) * this.PLAYER_MOVE_SPEED;
            player.position.x -= Math.sin(player.rotation.y - Math.PI / 2) * this.PLAYER_MOVE_SPEED;
        }
        if (scope.player_action.lookUp) {
            //player.rotateX(0.02);
        }
        if (scope.player_action.lookDown) {
            //player.rotateX(-0.02);
        }
    };

    this.domElement.addEventListener("keydown", this.onKeyDown, false);
    this.domElement.addEventListener("keyup", this.onKeyUp, false);
};
