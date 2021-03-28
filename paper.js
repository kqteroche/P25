class Paper { 
    constructor(x, y) { 
        var options = { 
        'isStatic':false,
        restitution:0.4,
        friction:0.5, 
        density:1.2 
    }

    this.paper = loadImage('paper.png');
    
        this.radius = 70; 
        this.body = Bodies.circle(x, y, 17, options);
            
        World.add(world, this.body);
               }
             
 display(){
     //image(this.paper,  160, 620, 60,50);

    var pos =this.body.position;
    var angle = this.body.angle;
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("pink"); 

        fill("pink"); 
        image(this.paper, 0, -45, this.radius, this.radius);
        pop(); 
    }
             };