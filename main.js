leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreRigthWrist=0;
scoreLeftWrist=0;
song="";
function preload(){
    song=loadSound("mary_on_a_cross.mp3");
}
function play(){
    song.play();
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}