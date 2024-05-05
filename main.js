objects = [];
status ="";
video="";
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,480,380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (i =0; i <  object.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are" + object.length;
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, object[i].y +15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,object[i].y,objects[i].width,objects[i].height);
        }
    }
}
function gotResult(){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function start(){
    objectDetector= createCanvas(480,380);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
