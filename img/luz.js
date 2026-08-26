(function(window) {
Símbolo_4_instancia_1 = function() {
	this.initialize();
}
Símbolo_4_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["luz.png"], frames: [[0,0,50,52,0,0,0],[50,0,50,52,0,0,0]]});
var Símbolo_4_instancia_1_p = Símbolo_4_instancia_1.prototype = new createjs.Sprite();
Símbolo_4_instancia_1_p.Sprite_initialize = Símbolo_4_instancia_1_p.initialize;
Símbolo_4_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_4_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_4_instancia_1 = Símbolo_4_instancia_1;
}(window));

