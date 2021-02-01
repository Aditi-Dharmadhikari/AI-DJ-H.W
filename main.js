music_peter = "";
music_Harry = "";

function preload(){
    music_peter = loadSound("music2.mp3");
    music_Harry = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    
    video = createCapture();
    video.hide();  
}

function draw(){
    image(video, 0, 0, 600, 500);
}
