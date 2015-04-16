var UI_BLUE = 0;
var UI_GREEN = 1;
var UI_GREY = 2;
var UI_RED = 3;
var UI_YELLOW = 4;

var Button = function(color)
{
	var self = this;
	
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
	this.image.normal = document.createElement("img");
	this.image.hover = document.createElement("img");
	this.image.click = document.createElement("img");
	
	switch(color)
	{
		case(UI_BLUE):
		this.image.normal.src = "";
		this.image.hover.src = "";
		this.image.click.src = "";
		break;
		case(UI_GREEN):
		this.image.normal.src =  "";
		this.image.hover.src =  "";
		this.image.click.src = "";
		break;
		case(UI_GREY):
		this.image.normal.src =  "";
		this.image.hover.src =  "";
		this.image.click.src = "";
		break;
		case(UI_RED):
		this.image.normal.src =  "";
		this.image.hover.src =  "";
		this.image.click.src = "";
		break;
		case(UI_YELLOW):
		this.image.normal.src =  "";
		this.image.hover.src =  "";
		this.image.click.src = "";
		break;
	}
}