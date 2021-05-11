class BaseClass{

    //properties of the object are listed under constructor
    constructor(x,y,w,h,angle){
        var options = {
            restitution:0.8,
            friction:1,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body);
    }

    //function of the object
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS)
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER)
        //image(variable, x,y,w,h)
        image(this.image,0,0,this.w,this.h)
        pop();
    }
}

