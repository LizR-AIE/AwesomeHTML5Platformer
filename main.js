var canvas = document.getElementById("gameCanvas");
canvas.width = document.body.clientWidth - 16;
canvas.height = document.body.clientHeight - 16;
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var LAYER_COUNT = 2;
var LAYER_BACKGROUND = 0;
var LAYER_PLATFORMS = 1;

var MAP = [ tw = 60, th = 20 ];
var TILE = 21;
var TILESET_TILE = TILE;
var TILESET_PADDING = 2;
var TILESET_SPACING = 2;
var TILESET_COUNT_X = [];

TILESET_COUNT_X[0] = 11;
TILESET_COUNT_X[1] = 30;

var METER = TILE/2;
var GRAVITY = METER * 9.8 * 6;
var MAXDX = METER * 10;
var MAXDY = METER * 23;
var ACCEL = MAXDX * 2;
var FRICTION = MAXDX * 6;
var JUMP = METER * 1600;

var score = 0;
var lives = 3;

var player = new Player();
var keyboard = new Keyboard();

var tileSets = [];
for(var tileSetIndex = 0; tileSetIndex < level1.tilesets.length; tileSetIndex++)
{
	tileSets[tileSetIndex] = document.createElement("img");
	tileSets[tileSetIndex].src = level1.tilesets[tileSetIndex].image;
}

var heart = document.createElement("img");
heart.src = "heart.png";

var cells = [];
function initialize()
{
	for(var layerIndex = 0; layerIndex < LAYER_COUNT; layerIndex++)
	{
		cells[layerIndex] = [];
		var index = 0;
				
		for(var y = 0; y < level1.layers[layerIndex].height; y++)
		{
			cells[layerIndex][y] = [];
			for(var x = 0; x < level1.layers[layerIndex].width; x++)
			{
				if(level1.layers[layerIndex].data[index] != 0)
				{
					cells[layerIndex][y][x] = 1;
				}
				else
				{
					cells[layerIndex][y][x] = 0;
				}
				index++;
			}
		}
	}
}

function cellAtPixelCoord(layer, x, y)
{
	if(x < 0 || x > SCREEN_WIDTH || y < 0)
		return 1;
	if(y > SCREEN_HEIGHT)
		return 0;
	return cellAtTileCoord(layer, pixelTotile(x), pixelTotile(y));
}

function cellAtTileCoord(layer, tx, ty)
{
	if(tx < 0 || tx >= MAP.tw || ty < 0)
		return 1;
	if(ty >= MAP.th)
		return 0;
	return cells[layer][ty][tx];
}

function tileToPixel(tile)
{
	return tile * TILE;
}

function pixelToTile(pixel)
{
	return Math.floor(pixel/TILE);
}

function bound(value, min, max)
{
	if(value < min)
		return min;
	if(value > max)
		return max;
	return value;
}

function drawMap()
{
	for(var layerIndex = 0; layerIndex < LAYER_COUNT; layerIndex++)
	{
		var index = 0;
		for(var y = 0; y < level1.layers[layerIndex].height; y++)
		{
			for(var x = 0; x < level1.layers[layerIndex].width; x++)
			{
				if(level1.layers[layerIndex].data[index] != 0)
				{
					
					if(layerIndex == LAYER_BACKGROUND)
					{
						var tileIndex = level1.layers[layerIndex].data[index] - level1.tilesets[0].firstgid;
						var sx = (tileIndex % TILESET_COUNT_X[0]) * (TILESET_TILE);
						var sy = (Math.floor(tileIndex / TILESET_COUNT_X[0])) * (TILESET_TILE);
						context.drawImage(tileSets[0], sx, sy, TILESET_TILE, TILESET_TILE, x*TILE, y*TILE, TILESET_TILE, TILESET_TILE);
					}
					else
					{
						var tileIndex = level1.layers[layerIndex].data[index] - level1.tilesets[1].firstgid;
						var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X[1]) * (TILESET_TILE + TILESET_SPACING);
						var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_X[1])) * (TILESET_TILE + TILESET_SPACING);
						context.drawImage(tileSets[1], sx, sy, TILESET_TILE, TILESET_TILE, x*TILE, y*TILE, TILESET_TILE, TILESET_TILE);
					}
				}
				index++;
			}
		}
	}
}

function run()
{
	context.fillStyle = "#ccc";		
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
				
	// Update code goes here
	player.update(deltaTime);	
	
	drawMap();
	
	// Draw code goes here				
	player.draw();
	
	context.fillStyle = "yellow";
	context.font = "32px Arial";
	var scoreText = "Score: " + score;
	context.fillText(scoreText, SCREEN_WIDTH - 170, 52);
	
	for(var i = 0; i < lives; i++)
	{
		context.drawImage(heart, 20 + (heart.width + 2) * i, 10);
	}
	
	// update the frame counter 
	//fpsTime += deltaTime;
	//fpsCount++;
	//if(fpsTime >= 1)
	//{
	//	fpsTime -= 1;
	//	fps = fpsCount;
	//	fpsCount = 0;
	//}		
	//	
	//// draw the FPS
	//context.fillStyle = "#f00";
	//context.font="14px Arial";
	//context.fillText("FPS: " + fps, 5, 20, 100);
}

initialize();
//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);