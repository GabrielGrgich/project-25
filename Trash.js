
class trash {

    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            restitution: 0.8
            
        }

     this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.Image = loadImage("sprites/dustbingreen.png");
    }
    display () {
    var pos = this.body.position;
    var angle =  this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    image(this.Image,0,0,120,100);
    pop();
    
        }
    }