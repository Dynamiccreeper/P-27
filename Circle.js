class Circle{

    constructor(bodyA,body2)
    {

    
        var options = {
    
            bodyA: bodyA,
            bodyB:body2,
            stiffness:0.4,
            length:300
    //        pointB:{x:this.offsetX,y:this.offsetY}
        
        
        }
    
        this.circle = Constraint.create(options);
        World.add(world,this.circle);
    }
    
    display(){
    var pointA=this.circle.bodyA.position;
    var pointB=this.circle.bodyB.position;
    
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    
    
    }
}
