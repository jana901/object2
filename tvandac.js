status="";
img='';
object=[];
function preload(){
img=loadImage("tv and ac.jpeg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status=Detecting objects";
}

function draw(){
    if(status!=""){
        image(img,0,0,640,420);
        for(i=0;i<object.length;i++){
           percent=Math.floor(object[i].confidence*100);
           fill("#FF0000");
         text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
         noFill();
       stroke("FF0000"); 
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
         
        }
    }
}

function modelLoaded(){
status=true;
objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
function back(){
    window.location.assign("index.html");
}
