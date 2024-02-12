//complete this code
class Rectangle {
	constrctor(width: number, height: number)
	{
		this.width=width;
		this.height=height;
	}
	getWidth(width){
		return this.width;
	}
	getheight(height){
		return this.height;
	}
	getArea(){
		let area= height*width;
		return area;
	}
	
}

class Square extends Rectangle {
	constructor(side: number){
		this.number=number;
		
	}
	getArea(){
		return side*side;
	}
	getPerimeter(){
		return 4*side;
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
