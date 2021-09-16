function setup(){
    video= createCapture(VIDEO);
    video.size(500, 500);
    canvas= createCanvas(500, 500);
    canvas.position(560, 150);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
noseX=0;
noseY=0;
LWX=0;
RWX=0;
Diff=0;

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(result){
if(result.length>0){
    console.log(result);
}
}