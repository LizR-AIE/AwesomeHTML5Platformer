var UI_BLUE = 0;
var UI_GREEN = 1;
var UI_GREY = 2;
var UI_RED = 3;
var UI_YELLOW = 4;

var STATE_NORMAL = 0;
var STATE_HOVER = 1;
var STATE_CLICKED = 2;

var Button = function(color)
{
	
	
	//this.normal.onmouseenter 	= function(evt){ this.state = STATE_HOVER; }
	//this.hover.onmouseout 		= function(evt){ this.state = STATE_NORMAL; }
	//this.hover.onmousedown 		= function(evt){ this.state = STATE_CLICKED; }
	//this.click.onmouseup 		= function(evt){ console.log("clicked"); }
	
	//this.addEventListener("onmousedown",this.onMouseEnter);
	//console.log(this.onmouseenter);
	this.x = 50;
	this.y = 50;
	this.width = 500;
	this.height = 800;
	
	this.color = color;	
	this.state = STATE_HOVER;
	
	this.normal = new NinePatch("./uipack/PNG/blue_button07.png", 10, 10, this.width, this.height)
	this.hover   = new NinePatch("./uipack/PNG/blue_button09.png", 10, 10, this.width, this.height)
	this.click   = new NinePatch("./uipack/PNG/blue_button10.png", 10, 10, this.width, this.height)
	
	//switch(this.color)
	//{
	//	case(UI_BLUE):
	//	{
	//		this.normal = new NinePatch("./uipack/PNG/blue_button07.png", 10, 10, this.width, this.height)
	//		this.hover = new NinePatch("./uipack/PNG/blue_button09.png", 10, 10, this.width, this.height)
	//		this.click = new NinePatch("./uipack/PNG/blue_button10.png", 10, 10, this.width, this.height)
	//	}
	//	break;
	//	case(UI_GREEN):
	//		this.normal = new NinePatch("./uipack/PNG/green_button07.png", 10, 10, this.width, this.height);
	//		this.hover  = new NinePatch("./uipack/PNG/green_button09.png", 10, 10, this.width, this.height);
	//		this.click  = new NinePatch("./uipack/PNG/green_button10.png", 10, 10, this.width, this.height);
	//	break;
	//	case(UI_GREY):
	//		this.normal = new NinePatch("./uipack/PNG/grey_button07.png", 10, 10, this.width, this.height);
	//		this.hover  = new NinePatch("./uipack/PNG/grey_button09.png", 10, 10, this.width, this.height);
	//		this.click  = new NinePatch("./uipack/PNG/grey_button10.png", 10, 10, this.width, this.height);
	//	break;
	//	case(UI_RED):
	//		this.normal = new NinePatch("./uipack/PNG/red_button07.png", 10, 10, this.width, this.height);
	//		this.hover  = new NinePatch("./uipack/PNG/red_button09.png", 10, 10, this.width, this.height);
	//		this.click  = new NinePatch("./uipack/PNG/red_button10.png", 10, 10, this.width, this.height);
	//	break;
	//	case(UI_YELLOW):
	//		this.normal = new NinePatch("./uipack/PNG/yellow_button07.png", 10, 10, this.width, this.height);
	//		this.hover  = new NinePatch("./uipack/PNG/yellow_button09.png", 10, 10, this.width, this.height);
	//		this.click  = new NinePatch("./uipack/PNG/yellow_button10.png", 10, 10, this.width, this.height);
	//	break;
	//}
	
	var self = this;
	
	this.normal.image.addEventListener('mouseenter', self.onMouseEnter() , true);
	this.hover.image.addEventListener('mouseout', self.onMouseOut(), true);
	this.hover.image.addEventListener('mousedown', self.onMouseDown() , true);
	this.click.image.addEventListener('mouseup',  self.onMouseUp() , true);
}

Button.prototype.onMouseEnter = function()
{
	console.log("hover");
	this.state = STATE_HOVER;
}

Button.prototype.onMouseOut = function()
{
	this.state = STATE_NORMAL;
}

Button.prototype.onMouseDown = function()
{
	this.state = STATE_CLICKED;
}

Button.prototype.onMouseUp = function()
{
	
}

Button.prototype.update = function(deltaTime)
{
	
}

Button.prototype.draw = function()
{
	switch(this.state)
	{
		case(STATE_NORMAL):
			this.normal.draw(this.x, this.y);
		break;
		case(STATE_HOVER):
			this.hover.draw(this.x, this.y);
		break;
		case(STATE_CLICKED):
			this.click.draw(this.x, this.y + 4);
		break;
	}
}

Button.prototype.onLoaded = function()
{
	this.normal.onLoaded();
	this.hover.onLoaded();
	this.click.onLoaded();
}