var canvas = document.getElementById("gameCanvas");
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

//--------------------
// Variables
//--------------------

// GLOBAL
var SCREEN_WIDTH 	= canvas.width;
var SCREEN_HEIGHT 	= canvas.height;

var STATE_SPLASH 	= 0;
var STATE_MENU 		= 1;
var STATE_HIGHSCORE = 2;
var STATE_GAME 		= 3;
var STATE_OVER 		= 4;

var gameState 		= STATE_SPLASH;

var keyboard 		= new Keyboard();

// SPLASH
var splashTimer = 0;
var splashInterval = 1;

// MENU

// HIGHSCORE
var HighScore = 0;

// GAME
var MAP = { tw: 60, th: 15 };
var TILE = 35;
var TILESET_TILE = TILE * 2;
var TILESET_PADDING = 2;
var TILESET_SPACING = 2;
var TILESET_COUNT_X = 14;
var TILESET_COUNT_Y = 14;

var LAYER_COUNT = 3;
var LAYER_BACKGOUND = 0;
var LAYER_PLATFORMS = 1;
var LAYER_LADDERS = 2;

var METER = TILE;
var GRAVITY = METER * 9.8 * 6;
var MAXDX = METER * 10;
var MAXDY = METER * 15;
var ACCEL = MAXDX * 2;
var FRICTION = MAXDX * 6;
var JUMP = METER * 1500;

var tileset = document.createElement("img");
tileset.src = "tileset.png";

var cells = [];

var player = new Player();

var score = 0;
var lives = 3;

var worldOffsetX =0;

// OVER


//--------------------
// Functions
//--------------------

function drawMap()
{
	var startX = -1;
	var maxTiles = Math.floor(SCREEN_WIDTH / TILE) + 2;
	var tileX = pixelToTile(player.position.x);
	var offsetX = TILE + Math.floor(player.position.x%TILE);

	startX = tileX - Math.floor(maxTiles / 2);

	if(startX < -1)
	{
		startX = 0;
		offsetX = 0;
	}
	if(startX > MAP.tw - maxTiles)
	{
		startX = MAP.tw - maxTiles + 1;
		offsetX = TILE;
	}
	worldOffsetX = startX * TILE + offsetX;

	for( var layerIdx=0; layerIdx < LAYER_COUNT; layerIdx++ )
	{
		for( var y = 0; y < level1.layers[layerIdx].height; y++ )
		{
			var idx = y * level1.layers[layerIdx].width + startX;
			for( var x = startX; x < startX + maxTiles; x++ )
			{
				if( level1.layers[layerIdx].data[idx] != 0 )
				{
					// the tiles in the Tiled map are base 1 (meaning a value of 0 means no tile),
					// so subtract one from the tileset id to get the correct tile
					var tileIndex = level1.layers[layerIdx].data[idx] - 1;
					var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) * (TILESET_TILE + TILESET_SPACING);
					var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_Y)) * (TILESET_TILE + TILESET_SPACING);
					context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, (x-startX)*TILE - offsetX, (y-1)*TILE, TILESET_TILE, TILESET_TILE);
				}
				idx++;
			}
		}
	}
}

function initialize() 
{
	for(var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++) 
	{ // initialize the collision map
		cells[layerIdx] = [];
		var idx = 0;
		for(var y = 0; y < level1.layers[layerIdx].height; y++) 
		{
			cells[layerIdx][y] = [];
			for(var x = 0; x < level1.layers[layerIdx].width; x++) 
			{
				if(level1.layers[layerIdx].data[idx] != 0) 
				{
					// for each tile we find in the layer data, we need to create 4 collisions
					// (because our collision squares are 35x35 but the tile in the
					// level are 70x70)
					cells[layerIdx][y][x] = 1;
					cells[layerIdx][y-1][x] = 1;
					cells[layerIdx][y-1][x+1] = 1;
					cells[layerIdx][y][x+1] = 1;
				}
				else if(cells[layerIdx][y][x] != 1) 
				{
					// if we haven't set this cell's value, then set it to 0 now
					cells[layerIdx][y][x] = 0;
				}
				idx++;
			}
		}
	}
}

function cellAtPixelCoord(layer, x,y)
{
	if(x<0 || x>SCREEN_WIDTH || y<0)
	return 1;
	// let the player drop of the bottom of the screen (this means death)
	if(y>SCREEN_HEIGHT)
	return 0;
	return cellAtTileCoord(layer, p2t(x), p2t(y));
};
function cellAtTileCoord(layer, tx, ty)
{
	if(tx<0 || tx>=MAP.tw || ty<0)
	return 1;
	// let the player drop of the bottom of the screen (this means death)
	if(ty>=MAP.th)
	return 0;
	return cells[layer][ty][tx];
};
function tileToPixel(tile)
{
	return tile * TILE;
};
function pixelToTile(pixel)
{
	return Math.floor(pixel/TILE);
};
function bound(value, min, max)
{
	if(value < min)
	return min;
	if(value > max)
	return max;
	return value;
}

function SplashUpdate(deltaTime)
{
	splashTimer += deltaTime;
	if(splashTimer >= splashInterval)
	{
		gameState = STATE_MENU;
		splashTimer = 0;
	}
}

function SplashDraw()
{
	context.fillStyle = "#000";		
	context.fillRect(50, 50, 50, 50);
}

function MenuUpdate(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_SPACE))
	{
		gameState = STATE_GAME;
	}
}

function MenuDraw()
{
	context.fillStyle = "#fff";		
	context.fillRect(50, 50, 50, 50);
}

function HighScoreUpdate(deltaTime)
{
	
}

function HighScoreDraw()
{
	
}

function GameUpdate(deltaTime)
{
	player.update(deltaTime);
	
	if(player.isDead)
		gameState = STATE_OVER;
}

function GameDraw()
{
	drawMap();				
	player.draw();
	
	context.fillStyle = "yellow";
	context.font="32px Arial";
	var scoreText = "Score: " + score;
	context.fillText(scoreText, SCREEN_WIDTH - 170, 35);
	
	//for(var i=0; i<lives; i++)
	//{
	//	context.drawImage(heartImage, 20 + ((heartImage.width+2)*i), 10);
	//}
}

function OverUpdate(deltaTime)
{
	
}

function OverDraw()
{
	context.fillStyle = "#f00";		
	context.fillRect(50, 50, 50, 50);
}

function run()
{
	context.fillStyle = "#ccc";		
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();

	switch(gameState)
	{
		case(STATE_SPLASH):
			SplashUpdate(deltaTime);
			SplashDraw();
			break;
		case(STATE_MENU):
			MenuUpdate(deltaTime);
			MenuDraw();
			break;
		case(STATE_HIGHSCORE):
			HighScoreUpdate(deltaTime);
			HighScoreDraw();
			break;
		case(STATE_GAME):
			GameUpdate(deltaTime);
			GameDraw();
			break;
		case(STATE_OVER):
			OverUpdate(deltaTime);
			OverDraw();
			break;
	};
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