var NinePatch = function(filename, cSize)
{
	this.image = document.createElement("img");
	this.image.src = filename;
	this.width = this.image.width;
	this.height = this.image.height;
	this.cornerSize = new Vector2();
	this.middleSize = new Vector2();
	this.cornerSize.set(cSize.x, cSize.y);
	this.middleSize.set(this.width - (this.cornerSize.x * 2), this.height - (this.cornerSize.y * 2));
	
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
		
	
}

NinePatch.prototype.calculate = function()
{
	// Top Left
	this.sourcePositions		[0].set(0, 0);
	this.sourceDimensions		[0].set(this.cornerSize.x, this.cornerSize.y);
	this.destinationPositions	[0].set(0, 0);
	this.destinationDimensions	[0].set((this.sourceDimensions[0].x / this.image.width) * this.width, (this.sourceDimensions[0].y / this.image.height) * this.height);
	
	// Top Middle
	this.sourcePositions		[1] = this.sourceDimensions[0];
	this.sourceDimensions		[1].set(this.image.width - (this.cornerSize.x * 2), this.cornerSize.y);
	this.destinationPositions	[1] = this.destinationDimensions[0];
	this.destinationDimensions	[1].set((this.sourceDimensions[1].x / this.image.width) * this.width, (this.sourceDimensions[1].y / this.image.height) * this.height);
	
	// Top Right
	
	// Middle Left
	
	// Middle Middle
	
	// Middle Right
	
	// Bottom Left
	
	// Bottom Middle
	
	// Bottom Right
}

NinePatch.prototype.draw = function(context, x, y)
{
	// img	Specifies the image, canvas, or video element to use	 
	// sx	Optional. The x coordinate where to start clipping	
	// sy	Optional. The y coordinate where to start clipping	
	// swidth	Optional. The width of the clipped image	
	// sheight	Optional. The height of the clipped image	
	// x	The x coordinate where to place the image on the canvas	
	// y	The y coordinate where to place the image on the canvas	
	// width	Optional. The width of the image to use (stretch or reduce the image)	
	// height	Optional. The height of the image to use (stretch or reduce the image)
	
	for(var i = 0; i < 2; i++)
	{
		context.drawImage(this.image, 
		this.sourcePositions[i].x,  	 this.sourcePositions[i].y, 
		this.sourceDimensions[i].x, 	 this.sourceDimensions[i].y,
		x + this.destinationPositions[i].x,  y + this.destinationPositions[i].y, 
		this.destinationDimensions[i].x, this.destinationDimensions[i].y);
	}
	
	// Top Left
	//context.drawImage(this.image, 
	//	0, 0, this.cornerSize.x, this.cornerSize.y,
	//	x, y, this.cornerSize.x, this.cornerSize.y);
			
}