class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
        this.image = loadImage("dustbingreen.png");
    }

    display(){
        var dustbinpos = this.body.position;

        push()
        translate(dustbinpos.x,dustbinpos.y);
        rectMode(CENTER);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}