var canvas = document.getElementById("canvas");

var manifest = {
	"images": {
		"logo": "http://warpzonelouisville.com/img/warp-zone.png",
    "waves": "http://warpzonelouisville.com/img/waves.png"
	},
	"sounds": {
	
	},
	"fonts": {},
	"animations": {}
};

var game = new Splat.Game(canvas, manifest);
game.scenes.add("title", new Splat.Scene(canvas, function() {
  this.waves = new Splat.AnimatedEntity(-400, 0, 800, 100, game.images.get("waves"), 0,0);
  this.waves.vx = .04;
  
}, function(elapsedMilis) {
  if((this.waves.x + this.waves.width/2) > canvas.width){
    this.waves.x = -this.waves.width/2; 
  }
  this.waves.move(elapsedMilis);
 
}, function(context) {
  context.fillColor ="black";
	context.fillRect(0, 0, canvas.width, canvas.height);
	this.waves.draw(context);
  context.drawImage(game.images.get("logo"), 0, 0);
 
}));

game.scenes.switchTo("loading"); //going to title scene
