<<<<<<< HEAD
<<<<<<< HEAD
//var LEFT 	= 0;
//var RIGHT 	= 1;

var ANIM_CLIMB = 0;
var ANIM_COLLECT = 1;
var ANIM_DEFEATED = 2;
var ANIM_FIRE = 3;
var ANIM_HURT = 4;
var ANIM_IDLE = 5;
var ANIM_JUMP_FIRE = 6;
var ANIM_JUMP_TOSS = 7;
var ANIM_JUMP = 8;
var ANIM_RUN = 9;
var ANIM_TOSS = 10;
var ANIM_WALK_FIRE = 11;
var ANIM_WALK_FIRE_DOWN = 12;
var ANIM_WALK_LOWER = 13;
var ANIM_WALK_TOSS = 14;
var ANIM_WALK = 15;
var ANIM_MAX = 16;

//var ANIM_IDLE_LEFT 		= 0;
//var ANIM_JUMP_LEFT 		= 1;
//var ANIM_WALK_LEFT 		= 2;
//var ANIM_SHOOT_LEFT 	= 3;
//var ANIM_CLIMB 			= 4;
//var ANIM_IDLE_RIGHT 	= 5;
//var ANIM_JUMP_RIGHT 	= 6;
//var ANIM_WALK_RIGHT 	= 7;
//var ANIM_SHOOT_RIGHT 	= 8;
//var ANIM_MAX 			= 9;
=======
=======


>>>>>>> parent of 715da26... Can move the player around and jump













<<<<<<< HEAD

>>>>>>> parent of 715da26... Can move the player around and jump

=======
>>>>>>> parent of 715da26... Can move the player around and jump
var Player = function()
{
	this.sprite = new Sprite("hero.png");
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [0,1,2,3,4,5,6,7,8,9,10]); //ANIM_CLIMB = 0;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [11,12,13,14,15,16,17]); //ANIM_COLLECT = 1;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [18,19,20,21,22,23,24]); //ANIM_DEFEATED = 2;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [25,26,27,28,29]); //ANIM_FIRE = 3;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [30,31,32,33,34,35]); //ANIM_HURT = 4;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [36,37,38,39,40,41,42,43]); //ANIM_IDLE = 5;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [44,45,46,47,48]); //ANIM_JUMP_FIRE = 6;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [49,50,51,52,53,54,55,56,57]); //ANIM_JUMP_TOSS = 7;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [58,59,60,61,62]); //ANIM_JUMP = 8;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [63,64,65,66,67,68,69]); //ANIM_RUN = 9;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [70,71,72,73,74,75,76,77,78]); //ANIM_TOSS = 10;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [79,80,81,82,83,84,85,86,87,88,89,90,91,92]); //ANIM_WALK_FIRE = 11;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [93,94,95,96,97,98,99,100,101,102,103,104,105,106]); //ANIM_WALK_FIRE_DOWN = 12;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [107,108,109,110,111,112,113,114,115,116,117,118,119,120]); //ANIM_WALK_LOWER = 13;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [121,122,123,124,125,126,127,128,129,130,131,132,133,134]); //ANIM_WALK_TOSS = 14;
	this.sprite.buildAnimation(19, 8, 330, 252, 0.05, [135,146,137,138,139,140,141,142,143,144,145,146,147,148]); //ANIM_WALK = 15;
	
<<<<<<< HEAD
<<<<<<< HEAD
	//this.sprite = new Sprite("ChuckNorris.png");
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [0, 1, 2, 3, 4, 5, 6, 7]);  									// IDLE_LEFT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [8, 9, 10, 11, 12]);  										// JUMP_LEFT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);  	// WALK_LEFT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);  	// SHOOT_LEFT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);  				// CLIMB
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [52, 53, 54, 55, 56, 57, 58, 59]);  							// IDLE_RIGHT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [60, 61, 62, 63, 64]);  										// JUMP_RIGHT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]);  	// WALK_RIGHT
	//this.sprite.buildAnimation(12, 8, 165, 126, 0.05, [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92]);  	// SHOOT_RIGHT
	
	// A Vector2 that represents the Players width and height
	this.size = new Vector2();
	this.size.set(330, 252);
	
	for(var i=0; i<ANIM_MAX; i++)
	{
		this.sprite.setAnimationOffset(i, -(this.size.x/2 - TILESET_TILE/2), -(this.size.y/2 - TILESET_TILE));
	}
	
	// A Vector2 that represents the Players x and y
	this.position = new Vector2();
	this.position.set(2 * TILE, 9 * TILE);
	// Holds the speed in a direction
	this.velocity = new Vector2();
	
	this.shootTimer = 0;
	this.shootInterval = 0.5;
	//this.direction = RIGHT;
	
	this.jumping 	= false;
	this.running 	= false;
	this.looting 	= false;
	this.throwing 	= false;
	this.shooting 	= false;
	this.climbing	= false;
	this.hurt		= false;
	this.dead		= false;
=======
	// A Vector2 that represents the Players x and y
	this.position = new Vector2();
	this.startPosition = new Vector2();
	
	this.startPosition.set(canvas.width/2, canvas.height/2);
	this.position = this.startPosition; 
	
	// A Vector2 that represents the Players width and height
	this.size = new Vector2();
=======
	// A Vector2 that represents the Players x and y
	this.position = new Vector2();
	this.startPosition = new Vector2();
	
	this.startPosition.set(canvas.width/2, canvas.height/2);
	this.position = this.startPosition; 
	
	// A Vector2 that represents the Players width and height
	this.size = new Vector2();
>>>>>>> parent of 715da26... Can move the player around and jump
	this.size.set(159, 163);
		
	this.image.src = "hero.png";
>>>>>>> parent of 715da26... Can move the player around and jump
};

Player.prototype.update = function(deltaTime)
{
<<<<<<< HEAD
<<<<<<< HEAD
	//-----------------------------
	// ANIMATIONS	
	//-----------------------------
	if(this.running)
	{
		if(this.sprite.currentAnimation != ANIM_RUN)
		{
			this.sprite.setAnimation(ANIM_RUN);
		}
	}
	else if(this.jumping)
	{
		var frame = this.sprite.currentFrame;
		if(this.shooting)
		{
			if(this.sprite.currentAnimation != ANIM_JUMP_FIRE)
			{				
				this.sprite.setAnimation(ANIM_JUMP_FIRE);
			}
		}
		else if(this.throwing)
		{
			if(this.sprite.currentAnimation != ANIM_JUMP_TOSS)
			{
				this.sprite.setAnimation(ANIM_JUMP_TOSS);
			}
		}
		else
		{
			if(this.sprite.currentAnimation != ANIM_JUMP)
			{
				this.sprite.setAnimation(ANIM_JUMP);
			}
		}
		this.sprite.currentFrame = frame;
	}
	else if(this.looting)
	{
		if(this.sprite.currentAnimation != ANIM_COLLECT)
		{
			this.looting = false;
			this.sprite.setAnimation(ANIM_COLLECT);
		}
	}
	else if(this.climbing)
	{
		if(this.sprite.currentAnimation != ANIM_CLIMB)
		{
			this.sprite.setAnimation(ANIM_CLIMB);
		}
	}
	else if(this.shooting)
	{
		if(this.velocity.x == 0)
		{
			if(this.sprite.currentAnimation != ANIM_FIRE)
			{
				this.sprite.setAnimation(ANIM_FIRE);
			}
		}
		else
		{
			if(this.sprite.currentAnimation != ANIM_WALK_FIRE)
			{
				this.sprite.setAnimation(ANIM_WALK_FIRE);
			}
		}
	}
	else if(this.throwing)
	{
		if(this.velocity.x == 0)
		{
			if(this.sprite.currentAnimation != ANIM_TOSS)
			{
				this.sprite.setAnimation(ANIM_TOSS);
			}
		}
		else
		{
			if(this.sprite.currentAnimation != ANIM_WALK_TOSS)
			{
				this.sprite.setAnimation(ANIM_WALK_TOSS);
			}
		}
	}
	else if(this.hurt)
	{
		if(this.sprite.currentAnimation != ANIM_HURT)
		{
			this.sprite.setAnimation(ANIM_HURT);
		}
	}
	else if(this.dead)
	{
		if(this.sprite.currentAnimation != ANIM_DEFEATED)
		{
			this.sprite.setAnimation(ANIM_DEFEATED);
		}
	}
	else if(this.velocity.x != 0)
	{
		if(this.sprite.currentAnimation != ANIM_WALK)
		{
			this.sprite.setAnimation(ANIM_WALK);
		}
	}
	else
	{
		if(this.sprite.currentAnimation != ANIM_IDLE)
		{
			this.sprite.setAnimation(ANIM_IDLE);
		}
	}
	// Update the animation
	this.sprite.update(deltaTime);
	//-----------------------------
	// END ANIMATIONS
	//-----------------------------
	
	// Get keyboard input
	var left = keyboard.isKeyDown(keyboard.KEY_LEFT);
	var right = keyboard.isKeyDown(keyboard.KEY_RIGHT);
	var up = keyboard.isKeyDown(keyboard.KEY_UP);
	var down = keyboard.isKeyDown(keyboard.KEY_DOWN);
	var jump = keyboard.isKeyDown(keyboard.KEY_UP);
	var shoot = keyboard.isKeyDown(keyboard.KEY_SPACE);
	var loot = keyboard.isKeyDown(keyboard.KEY_Z);
	var toss = keyboard.isKeyDown(keyboard.KEY_X);
	var walk = keyboard.isKeyDown(keyboard.KEY_SHIFT);
	
	//if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) 
	//{
	//	left = true;
	//	//this.direction = LEFT;
	//	if(	this.sprite.currentAnimation != ANIM_WALK_LEFT && !this.jumping)
	//	{
	//		this.sprite.setAnimation(ANIM_WALK_LEFT);
	//	}
	//	else if(this.jumping)
	//	{
	//		this.sprite.setAnimation(ANIM_JUMP_LEFT);
	//	}
	//}
	//else if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) 
	//{
	//	right = true;
	//	this.direction = RIGHT;
	//	if(	this.sprite.currentAnimation != ANIM_WALK_RIGHT && !this.jumping)
	//	{
	//		this.sprite.setAnimation(ANIM_WALK_RIGHT);
	//	}
	//	else if(this.jumping)
	//	{
	//		this.sprite.setAnimation(ANIM_JUMP_RIGHT);
	//	}
	//}
	//else 
	//{
	//	if(this.jumping == false && this.falling == false)
	//	{
	//		if(this.direction == LEFT)
	//		{
	//			if(this.sprite.currentAnimation != ANIM_IDLE_LEFT)
	//				this.sprite.setAnimation(ANIM_IDLE_LEFT);
	//		}
	//		else
	//		{
	//			if(this.sprite.currentAnimation != ANIM_IDLE_RIGHT)
	//				this.sprite.setAnimation(ANIM_IDLE_RIGHT);
	//		}
	//	}
	//}
	
	var wasLeft = this.velocity.x < 0;
	var wasRight = this.velocity.x > 0;
	var ddx = 0;
	var ddy = GRAVITY;
	
	if(left)
		ddx = ddx - ACCEL;
	else if (wasLeft)
		ddx = ddx + FRICTION;
	
	if(right)
		ddx = ddx + ACCEL;
	else if(wasRight)
		ddx = ddx - FRICTION;
		
	if(jump && !this.jumping && !this.climbing && !this.looting && !this.running && !this.hurt && !this.dead)
=======
	if(typeof(this.rotation) == "undefined")
>>>>>>> parent of 715da26... Can move the player around and jump
	{
		this.rotation = 0;
	}
<<<<<<< HEAD
		
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	
	this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -MAXDX, MAXDX);
	this.velocity.y = bound(this.velocity.y + (deltaTime * ddy), -MAXDY, MAXDY);
	
	if ((wasLeft && (this.velocity.x > 0)) ||
		(wasRight && (this.velocity.x < 0)))
	{
		this.velocity.x = 0;
	}
	
	var tx = pixelToTile(this.position.x);
	var ty = pixelToTile(this.position.y);
	var nx = (this.position.x)%TILE;
	var ny = (this.position.y)%TILE;
	
	var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
	var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
    var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
    var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
	
	// If the player has vertical velocity, then check to see if they have hit a platform below 
	// or above, in which case, stop their vertical velocity, and clamp their y position:   
	if (this.velocity.y > 0)
	{
		if ((celldown && !cell) || (celldiag && !cellright && nx))  
		{
			this.position.y = tileToPixel(ty);      	// clamp the y position to avoid falling into platform below
			this.velocity.y = 0;            		// stop downward velocity
			this.jumping = false;           	// (or jumping)
			ny = 0;                         		// no longer overlaps the cells below
		}
	}
	else if (this.velocity.y < 0)
	{
		if ((cell && !celldown) || (cellright && !celldiag && nx))  
		{
			this.position.y = tileToPixel(ty + 1);  	// clamp the y position to avoid jumping into platform above
			this.velocity.y = 0;            		// stop upward velocity
			cell = celldown;               	 	// player is no longer really in that cell, we clamped them to the cell below 
			cellright = celldiag;         	  	// (ditto)
			ny = 0;                         		// player no longer overlaps the cells below
		}       
	}
	if (this.velocity.x > 0) 
	{
		if ((cellright && !cell) || (celldiag  && !celldown && ny)) 
		{
			this.position.x = tileToPixel(tx);     	// clamp the x position to avoid moving into the platform we just hit
			this.velocity.x = 0;            		// stop horizontal velocity
		}
=======
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation -= deltaTime;
>>>>>>> parent of 715da26... Can move the player around and jump
	}
	else
	{
<<<<<<< HEAD
		if ((cell && !cellright) || (celldown && !celldiag && ny))
		{
			this.position.x = tileToPixel(tx + 1); 	 // clamp the x position to avoid moving into the platform we just hit
			this.velocity.x = 0;          		 // stop horizontal velocity
		}
=======
		this.rotation += deltaTime;
>>>>>>> parent of 715da26... Can move the player around and jump
=======
	if(typeof(this.rotation) == "undefined")
	{
		this.rotation = 0;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation -= deltaTime;
	}
	else
	{
		this.rotation += deltaTime;
>>>>>>> parent of 715da26... Can move the player around and jump
	}
	
};

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
}











