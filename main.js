music_peter = "";
music_Harry = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload(){
    music_peter = loadSound("music2.mp3");
    music_Harry = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    
    video = createCapture();
    video.hide();  

    posenet = ml5.poseNet(video , model_load);
    posenet.on('pose', gotPose);
}

function model_load(){
    console.log("PoseNet Loaded!!");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("right wrist x = " + rightWristX + " ;  right wrist y = " + rightWristY + " ;       left wrist x = " + leftWristX + " ;     left wrist y = " + leftWristY);
    }


}

function draw(){
    image(video , 0, 0, 600, 500);
}