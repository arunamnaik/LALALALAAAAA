screen_width = 0;
screen_height = 0;
apple="";
speak_data="";
to_number="";
draw_apple="";
statuss="";
x=0;
y=0;

function preload(){
    apple = loadImage("Apple-10.jpg");
    
to_number= Number(content);

if(Number.isInteger(to_number)){
    draw_apple = "set";
}
else{
    document.getElementById('status').innerHTML="Integer not recognized.";
}
}

function setup(){
    screen_width= window.innerWidth;
    screen_height= window.innerHeight;
    canvas = createCanvas(screen_width,screen_height-150);
    canvas.position(0-150);
}

function draw(){
    if(draw_apple == set){
        for(i=1 <= to_number; i+1;){
            x=Math.floor(Math.random() * 700);
            y=Math.floor(Math.random() * 400);
            image(apple,x,y,70,70)
            document.getElementById('status').innerHTML=to_number+"apples";
        }
    }
}


