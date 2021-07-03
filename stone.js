class stone
{
	constructor(x,y,h,w)
	{
		var options={
			isStatic:false,
			restitution:3.1,
			friction:0,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.h = h 
		this.w = w 

		this.image=loadImage("stone.jpg");
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
		var groundPos=this.body.position;		
		push()
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER)
		//strokeWeight(4);
		fill(128,128,128)
		rect(0,0,this.w, this.h);
		pop()
		
	}

}
