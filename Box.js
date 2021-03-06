class Box{
    constructor(x,y){
        var options={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        this.width=70
        this.height=70
        World.add(world,this.body)
    } 
     display(){
         push()
         translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle)
         rectMode(CENTER)
         strokeWeight(4)
         stroke("orange")
         fill("red")
         rect(0,0,this.width,this.height)
         pop()
     } 
}