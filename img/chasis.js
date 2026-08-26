(function(window) {
Símbolo_3_instancia_1 = function() {
	this.initialize();
}
Símbolo_3_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["chasis.png"], frames: [[0,0,201,144,0,-149.25,0]]});
var Símbolo_3_instancia_1_p = Símbolo_3_instancia_1.prototype = new createjs.Sprite();
Símbolo_3_instancia_1_p.Sprite_initialize = Símbolo_3_instancia_1_p.initialize;
Símbolo_3_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_3_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_3_instancia_1 = Símbolo_3_instancia_1;
}(window));

