//this variable is assigned to the canvas on the html page.
var canvas = document.querySelector('canvas');
//The canvas is then given its width and height properties to the same as the size of the viewport.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//the variable c is then used for the 2d aspect of the page. 
var c = canvas.getContext('2d');

//we create a class for our 2 img that allows us 
class btc
{
    //constructor holds the objects that gets passed through so that it can use it.
    constructor(x,y,f,z,radius)
    {   
    this.x = x;
    this.y = y;
    this.f = f;
    this.z = z;
    this.radius = radius;
    }
    //this is where the values to store the design of the btc is.
    draw()
    {
    c.beginPath(); 
    c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
    c.fillStyle = "rgb(255,153,0)";
    c.fill();
    c.font = '70px serif';
    c.fillStyle = 'rgb(255,255,255)';
    c.fillText("₿",this.x-22,this.y+22,200);
    c.closePath();
    }
    //this function makes sure that the drawing doesnt go beyond the canvas height and width. it also controlls the drection of the image based on the if statement.
    update()
    {
    if (this.x + this.radius > innerWidth || 
        this.x - this.radius < 0)
    {
      this.f = -this.f;
    }
    
    if (this.y + this.radius > innerHeight || 
        this.y - this.radius < 0)
    {
      this.z = -this.z;      
    }
      this.x +=this.f;
      this.y +=this.z;
      this.draw();
    }
}
      
//the array where each indicidual btc is stored.
var btcArray = [];
//the function will create 50 random attributed btc with the same radius. each individual btc is pushed into the array as a btc and will be used to pass the values to the class btc
function ran()
{
    btcArray = [];
    for (i = 0; i<50; i++)
        {
            var x = Math.random()*(innerWidth - radius *2)+ radius;
            var y = Math.random()*(innerHeight - radius *2)+radius;
            var f = (Math.random()-0.5)*8;
            var z = (Math.random()-0.5)*8;
            var radius = 50;
            btcArray.push(new btc(x,y,f,z,radius))
        }
}
ran();
//function used to run on a loop    
function repeat()
{
    //line used to repeat what is in the function
    requestAnimationFrame(repeat);
    //this line will clear the canvas so that it looks like the image is moving rather than being redrawn
    c.clearRect(0, 0, canvas.width, canvas.height);
    //for loop to redraw the properties of each of the 50 btc.
    for (i = 0; i<btcArray.length; i++)
        {
            btcArray[i].update();
        }
    
}
//used to call the repeat function.
repeat();