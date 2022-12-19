
noseX = 0;
noseY = 0;

function preload(){
 clown_nose = loadImage("https://i.postimg.cc/mZw1kNnq/clown-nose-removebg-preview.png"); 
 glasses = loadImage("https://i.postimg.cc/SQTQHZ3y/glasses-removebg-preview.png");
}


function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(clown_nose, noseX - 20, noseY - 10, 45, 30);
    image(glasses, noseX - 57, noseY - 50, 125, 50);
}

function take_snapshot(){
    save('filersROCK.png');
}

function modelLoaded(){
    console.log("PoseNet has been initialized and the fun may begun!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }

}