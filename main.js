noseX = 0;
noseY = 0;
function preload(){
    mustachemakaronie = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
canvaS = createCanvas(300,300);
canvaS.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("PoseNet Loaded");
}
function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(mustachemakaronie,noseX,noseY,30,30); 
}
function takesnap(){
save("filter.png");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose_X ="+result[0].pose.nose.x);
        console.log("nose_Y="+result[0].pose.nose.y);
       noseX = result[0].pose.nose.x -10;
       noseY = result[0].pose.nose.y;
    }
}