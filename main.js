leftwristX=0;
rightwristX=0;
difference=0;
noseX=0;
noseY=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,120);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function draw(){
    background("#34d8eb");
    document.getElementById("square_size").innerHTML="width and height of the square is ="+difference+"px";
    fill("#198515");
    stroke("#cf0606");
    square(noseX,noseY,difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;

        difference=floor(leftwristX-rightwristX);
    }
}