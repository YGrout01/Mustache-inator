noseX = 0;
noseY = 0;
function preload(){
clownnose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
}
function draw(){
image(video,0,0,400,300);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clownnose,noseX,noseY,80,60);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function take_snapshot(){
    save('MyWeirdPicBruh.png');
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-37.5;
    noseY = results[0].pose.nose.y-22.5;


}
}