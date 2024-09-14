
//variables for running teachable machine model
let classifier, video, div, textLabel;
let label = "Waiting for the model..."

//from the teachable machine website
let modelUrl = "https://teachablemachine.withgoogle.com/models/6EIN47W1H/"

//Load the model first and then run the code
function preload(){
  classifier = ml5.imageClassifier(modelUrl + 'model.json');
}

//this function runs only once at the begining 
function setup(){
  createCanvas(600,500);
  background(33,33,33);
  
  // Create the video
  video = createCapture(VIDEO, {flipped: true});
  video.size(240, 240); // make sure the size of video is roughly the same as during model training
  video.hide();

  textLabel = createP(label);
  
  // Start classifying
  classifier.classifyStart(video, gotResult);
}

//this function runs continously in the background
function draw(){

  textLabel.html(label);
  strokeWeight(0.8);
}

// When we get a result from the teachable machine model


function gotResult(results){
  label = results[0].label;
  if (label === "None") {
    background(33, 33, 33)
    fill(255, 255, 255); 
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Put a number card (0-9) close to the camera", width / 2, height / 2);
  }
    else if (label === "0") {
    background(33, 33, 33)
    fill(255, 255, 255);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("0", width / 2, height / 2);
  }
  else if (label === "1") {
    background(33, 33, 33)
    fill(255, 255, 0);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("1", width / 2, height / 2);
  }
  else if (label === "2") {
    background(33, 33, 33)
    fill(255, 105, 180);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("2", width / 2, height / 2);
  }
  else if (label === "3") {
    background(33, 33, 33)
    fill(135, 206, 235);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("3", width / 2, height / 2);
  }
  else if (label === "4") {
    background(33, 33, 33)
    fill(255, 165, 0);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("4", width / 2, height / 2);
  }
  else if (label === "5") {
    background(33, 33, 33)
    fill(75, 0, 130);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("5", width / 2, height / 2);
  }
  else if (label === "6") {
    background(33, 33, 33)
    fill(255, 182, 193);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("6", width / 2, height / 2);
  }
  else if (label === "7") {
    background(33, 33, 33)
    fill(216, 191, 216);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("7", width / 2, height / 2);
  }
  else if (label === "8") {
    background(33, 33, 33)
    fill(144, 238, 144);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("8", width / 2, height / 2);
  }
  else if (label === "9") {
    background(33, 33, 33)
    fill(0, 100, 0);
    textSize(200); //
    textAlign(CENTER, CENTER);
    text("9", width / 2, height / 2);
  }
}


