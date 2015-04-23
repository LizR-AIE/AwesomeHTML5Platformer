var NinePatch = function(filename, cSizeX, cSizeY, width, height)
{
	this.image = document.createElement("img");
	this.image.src = filename;
	this.width = width;
	this.height = height;
	this.cornerSize = new Vector2();
	this.middleSize = new Vector2();
	this.cornerSize.set(cSizeX, cSizeY);
	this.middleSize.set(this.image.width - (this.cornerSize.x * 2), this.image.height - (this.cornerSize.y * 2));
	
	this.sourcePositions  		= [];
	this.sourceDimensions 		= [];
	this.destinationPositions 	= [];
	this.destinationDimensions 	= [];
	
	for(var i = 0; i < 9; i++)
	{
		this.sourcePositions[i] 		= new Vector2();
		this.sourceDimensions[i] 		= new Vector2();
		this.destinationPositions[i] 	= new Vector2();
		this.destinationDimensions[i]	= new Vector2();
	}
	
	this.calculate = function()
	{
		this.middleSize.set(this.image.width - (this.cornerSize.x * 2), this.image.height - (this.cornerSize.y * 2));
		
		// Top Left
		this.sourcePositions		[0].set(0, 0);
		this.sourceDimensions		[0].set(this.cornerSize.x, this.cornerSize.y);
		this.destinationPositions	[0].set(0, 0);
		this.destinationDimensions	[0].set(this.sourceDimensions[0].x, this.sourceDimensions[0].y);
		
		// Top Middle
		this.sourcePositions		[1].set(this.sourceDimensions[0].x, 0);
		this.sourceDimensions		[1].set(this.middleSize.x, this.cornerSize.y);
		this.destinationPositions	[1].set(this.destinationPositions[0].x + this.destinationDimensions[0].x, 0);
		this.destinationDimensions	[1].set(this.width - (this.cornerSize.x*2), this.sourceDimensions[1].y);
		
		// Top Right
		this.sourcePositions		[2].set(this.sourcePositions[1].x + this.sourceDimensions[1].x, 0);
		this.sourceDimensions		[2].set(this.cornerSize.x, this.cornerSize.y);
		this.destinationPositions	[2].set(this.destinationPositions[1].x + this.destinationDimensions[1].x, 0);
		this.destinationDimensions	[2].set(this.cornerSize.x, this.cornerSize.y);
		
		// Middle Left
		this.sourcePositions		[3].set(0, this.cornerSize.y);
		this.sourceDimensions		[3].set(this.cornerSize.x, this.middleSize.y);
		this.destinationPositions	[3].set(0, this.destinationPositions[0].y + this.destinationDimensions[0].y);
		this.destinationDimensions	[3].set(this.cornerSize.x, this.height - (this.cornerSize.y*2));
		
		// Middle Middle
		this.sourcePositions		[4].set(this.cornerSize.x, this.cornerSize.y);
		this.sourceDimensions		[4].set(this.middleSize.x, this.middleSize.y);
		this.destinationPositions	[4].set(this.destinationPositions[0].x + this.destinationDimensions[0].x, this.destinationPositions[0].y + this.destinationDimensions[0].y);
		this.destinationDimensions	[4].set(this.width - (this.cornerSize.x*2), this.height - (this.cornerSize.y*2));
		
		// Middle Right
		this.sourcePositions		[5].set(this.cornerSize.x + this.middleSize.x, this.cornerSize.y);
		this.sourceDimensions		[5].set(this.cornerSize.x, this.middleSize.y);
		this.destinationPositions	[5].set(this.destinationPositions[4].x + this.destinationDimensions[4].x, this.destinationPositions[2].y + this.destinationDimensions[2].y);
		this.destinationDimensions	[5].set(this.cornerSize.x, this.height - (this.cornerSize.y*2));
		
		// Bottom Left
		this.sourcePositions		[6].set(0, this.sourcePositions[3].y + this.sourceDimensions[3].y);
		this.sourceDimensions		[6].set(this.cornerSize.x, this.cornerSize.y);
		this.destinationPositions	[6].set(0, this.destinationPositions[3].y + this.destinationDimensions[3].y);
		this.destinationDimensions	[6].set(this.cornerSize.x, this.cornerSize.y);
		
		// Bottom Middle
		this.sourcePositions		[7].set(this.cornerSize.x, this.cornerSize.y + this.middleSize.y);
		this.sourceDimensions		[7].set(this.middleSize.x, this.cornerSize.y);
		this.destinationPositions	[7].set(this.destinationPositions[6].x + this.destinationDimensions[6].x, this.destinationPositions[4].y + this.destinationDimensions[4].y);
		this.destinationDimensions	[7].set(this.width - (this.cornerSize.x*2), this.cornerSize.y);
		
		// Bottom Right
		this.sourcePositions		[8].set(this.cornerSize.x + this.middleSize.x, this.cornerSize.y + this.middleSize.y);
		this.sourceDimensions		[8].set(this.cornerSize.x, this.cornerSize.y);
		this.destinationPositions	[8].set(this.destinationPositions[4].x + this.destinationDimensions[4].x, this.destinationPositions[4].y + this.destinationDimensions[4].y);
		this.destinationDimensions	[8].set(this.cornerSize.x, this.cornerSize.y);
	}
	
	this.onLoaded = function()
	{
		this.calculate();
	}
}

NinePatch.prototype.draw = function(x, y)
{
	// Specifies the image, canvas, or video element to use	 
	// Optional. The x coordinate where to start clipping	
	// Optional. The y coordinate where to start clipping	
	// Optional. The width of the clipped image	
	// Optional. The height of the clipped image	
	// The x coordinate where to place the image on the canvas	
	// The y coordinate where to place the image on the canvas	
	// Optional. The width of the image to use (stretch or reduce the image)	
	// Optional. The height of the image to use (stretch or reduce the image)
		
	for(var i = 0; i < 9; i++)
	{
		context.drawImage(this.image, 
			this.sourcePositions[i].x,  	 	this.sourcePositions[i].y, 
			this.sourceDimensions[i].x, 	 	this.sourceDimensions[i].y,
			this.destinationPositions[i].x + x, this.destinationPositions[i].y + y, 
			this.destinationDimensions[i].x, 	this.destinationDimensions[i].y);
	}			
}