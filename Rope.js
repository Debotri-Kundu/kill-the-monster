class Rope{
    constructor(body1,pointB){
        var options={
            stiffness:0.04,
            
            bodyA:body1,
            pointB:pointB
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling)
    } 
    display() {
      var pointA=this.sling.bodyA.position
      var pointB=this.pointB
        strokeWeight(0)
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    } 
}