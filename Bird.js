class Bird extends BaseClass{

    //properties of the object are listed under constructor
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png")
    }

    //function of the object
    display(){
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        
        super.display();
    }
}

