class DustbinIMG{
    constructor(){
        this.body = Bodies.rectangle(600,480,200,200);
        this.width = 300;
        this.height = 200;
        this.image = loadImage("dustbin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}