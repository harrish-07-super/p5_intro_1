function preload(){
color="";
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,300);
img=createCapture(VIDEO);
img.hide();
}

function draw(){
    image(img,0,0,600,500);
    tint(color);
}

function filter_color(){
    color=document.getElementById("color").value;
}

function take_snapshot(){
    save("myimage.jpg");
}