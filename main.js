noseX=0;
noseY=0;

function takesave(){
    save('mynosefilterimg');
}


function preload(){
    clownnose = loadImage('clownnose-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    //access the live webcam
    video = createCapture(VIDEO);
    video.size(300, 300);
    //it should hide the live webcam so that it dont
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x - " + noseX);
        console.log("nose y - " + noseY);

        
    }
}

function draw(){
    image(video, 0, 0, 300, 300) 
    
    //stroke(255, 0, 0);
    //fill(255, 0, 0);
    image(clownnose, noseX, noseY, 30, 30);
}
