var a,b;
 function setup() {
  createCanvas(800,400);
 a=createSprite(200, 200, 50, 80);
 a.debug=true;
 b=createSprite(400,200,80,20); 
     b.debug=true;
      a.shapeColor="green";
       b.shapeColor="green";
       }
        function draw()
         { background(0,0,0);
           a.x= World.mouseX;
            a.y= World.mouseY;
             if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.heigth/2+b.heigth/2 && b.y-a.y<a.heigth+b.heigth/2){
                a.shapeColor="red";
                 b.shapeColor="red";
                 } 
                 else
                 { a.shapeColor="green";
                  b.shapeColor="green"; 
                }
                 drawSprites(); }
