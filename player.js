














var Player = function()
{
	this.image = document.createElement("img");
	
	// A Vector2 that represents the Players x and y
	this.position = new Vector2();
	this.startPosition = new Vector2();
	
	this.startPosition.set(canvas.width/2, canvas.height/2);
	this.position = this.startPosition; 
	
	// A Vector2 that represents the Players width and height
	this.size = new Vector2();
	this.size.set(159, 163);
		
	this.image.src = "hero.png";
};

Player.prototype.update = function(deltaTime)
{
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











