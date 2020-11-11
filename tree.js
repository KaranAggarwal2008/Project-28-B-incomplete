class tree
{
    //accept argments
	constructor(x,y)
	{
        //x and y position
		this.x=x;
        this.y=y;
        //width, height and thikness
		this.dustbinWidth=450;
		this.dustbinHeight=600;
        this.wallThickness=10;
        

		//loadImage
        this.image=loadImage("images/tree.png");
        
        //create bodies
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
        

		//add to world
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
        //shortcut
            var posBottom=this.bottomBody.position;
            //push
            push()
            //transalate
            translate(posBottom.x, posBottom.y+10);
            //image
			imageMode(CENTER);
            image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
            //pop
			pop()
			
	}

}