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
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
	this.color = color;	
	this.state = STATE_NORMAL;
	
	this.normal = new NinePatch("./uipack/PNG/blue_button06.png", new Vector2(10, 10));
}

Button.prototype.draw = function(context)
{
	switch(this.state)
	{
		case(STATE_NORMAL):
		this.normal.draw(context, this.x, this.y);
		break;
	}
}