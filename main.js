music_peter = "";
music_Harry = "";

status = "";

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
    canvas.center();
    video = createCapture(VIDEO);
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
    stroke("blue");
    fill("blue");
    get_status = music_Harry.isPlaying();

    get_status_2 = music_peter.isPlaying();    

    if(scoreleftwrist>0.2){
        circle(leftWristX, leftWristY, 20);
        music_peter.stop();

        if(get_status == false){
        music_Harry.play();
        document.getElementById("song").innerHTML = "Harry Potter";
        }
    }

    if(scorerightwrist>0.2){
        circle(rightWristX, rightWristY, 20);
        music_Harry.stop();

        if(get_status_2 == false){
        music_peter.play();
        document.getElementById("song").innerHTML = "Peter Pan";
        }
    }
}