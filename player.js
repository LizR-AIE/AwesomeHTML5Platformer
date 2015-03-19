var Player = function()
{
	this.image = document.createElement("img");
	
	// A Vector2 that represents the Players x and y
	this.position = new Vector2();
	this.position.set(9 * TILE, 0 * TILE);
	
	// A Vector2 that represents the Players width and height
	this.size = new Vector2();
	this.size.set(159, 163);
	
	this.offset = new Vector2();
	this.offset.set(-55, -87);
	
	this.velocity = new Vector2();
	
	this.falling = true;
	this.jumping = false;
		
	this.image.src = "hero.png";
};

Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var jump = false;
	
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
		left = true;
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
		right = true;
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
		jump = true;
	
	var wasLeft = this.velocity.x < 0;
	var wasRight = this.velocity.x > 0;
	var falling = this.falling;
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
	
	if(jump && !this.jumping && !falling)
	{
		ddy = ddy - JUMP;
		this.jumping = true;
	}
	
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
	
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
			this.falling = false;           		// no longer falling
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
	}
	else if (this.velocity.x < 0) 
	{
		if ((cell && !cellright) || (celldown && !celldiag && ny))  
		{
			this.position.x = tileToPixel(tx + 1); 	 // clamp the x position to avoid moving into the platform we just hit
			this.velocity.x = 0;          		 // stop horizontal velocity
		}
	}
};

Player.prototype.draw = function()
{
	context.save();
	
	context.translate(this.position.x, this.position.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.size.x/2, -this.size.y/2);
	
	context.restore();
}











