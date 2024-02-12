//complete this code
class Rectangle {
	constrctor(width, height)
	{
		this.width=width;
		this.height=height;
	}
	getWidth(){
		return this.width;
	}
	getheight(){
		return this.height;
	}
	getArea(){
	 return this.height*this.width;

	}
	
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)

	}
	getArea(){
		return this.side*this.side;
	}
	getPerimeter(){
		return 4*getWidth();
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
