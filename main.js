canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


images=[
"surface_2.jpg",
"surface_3.jpg",
"rover_shot.jpg",
"rover_shot_2.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);



rover_width=100;
rover_height=90;

background_image=images[random_number];
console.log("background_image"+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;

function Add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
     up();
     console.log("up");
    }
    if(keypressed=="39"){
    right();
        console.log("right");
       }
       if(keypressed=="37"){
        left();
        console.log("left");
       }
       if(keypressed=="40"){
        down();
        console.log("down");
       }
}
function up(){
   if(rover_y>=0){
       rover_y= rover_y-10;
       console.log("When up arrow key is pressed, x="+rover_x+"y="+rover_y);
       uploadbackground();
       uploadrover();
   } 
}
function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log("When down arrow key is pressed, x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    } 
 }
 function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log("When left arrow key is pressed, x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    } 
 }
 function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("When right arrow key is pressed, x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    } 
 }
 
