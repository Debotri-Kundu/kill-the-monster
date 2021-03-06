class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            density:1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.radius=r
        this.image=loadImage("images/Superhero-01.png")
        World.add(world,this.body)
    } 
     display(){
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y)
     } 
}