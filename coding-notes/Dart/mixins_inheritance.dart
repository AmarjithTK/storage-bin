// Dart Mixins

Mixin WillFly{

	void Fly(){
	
		println("through air")
		
	}

}

Mixin willFriction{

	void Friction(){
	
		println("through road")
	
	}

}



class Vehicle(){


 	void move(){
 
		println("this is moving object");
	
	}


}


class Boat extends Vehicle{

	@override
	void move(){
	
		super.move()
		println("through water")
	
	}
	
}	

class Airplane extends Vehicle with WillFly{
	
	@override
	void move(){
		
		super.move()
		Fly();	
		
	}

}

class HoverCraft with WillFly,WillFriction{

}

HoverCraft().WillFly()


class SuperCar extends Vehicle with WillFly,WillFriction {

	@override
	void move(){
	
		super.move()
		
	}


}

SuperCar().WillFriction()




