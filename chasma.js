noseX=0;
noseY=0;
function preload(){
    moustache=loadImage("https://i.postimg.cc/SRfd4y0N/images.png");
}
function home(){
    window.location="index.html"
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-50;
        console.log("noseX="+noseX);
        noseY=results[0].pose.nose.y-75;
        console.log("noseY="+noseY);
    }
    
}
function modelLoaded(){
    console.log("pooos nat is inisolized");
}
function draw(){
image(video,0,0,300,300)
image(moustache,noseX,noseY,100,100)
}
function take_snapshot(){
    save("Extremo_Funnyo.png");
}
