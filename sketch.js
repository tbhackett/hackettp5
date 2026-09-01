let dolphin


async function setup() {
  createCanvas(windowWidth, windowHeight);

 dolphin = await loadImage('/images/dolphin.gif')
 imageMode(CENTER)
}

function draw() {
  background(176, 217, 255);
      //Water
  fill(49, 86, 173)
  noStroke()
  rect(0,100,windowWidth,windowHeight)
 //Sun
      fill(255, 255, 176)  
  ellipse(100, 50, 50, 50)
  noStroke()
//Fish body
  fill(255, 177, 110)
  ellipse(200,200,200,100) 
  //Fish tail
  triangle(50,150,110,200,50,250)
  //Fish eye
  fill(255,255,255)
  ellipse(250,180,25,25)
  //Fish pupil
  fill(0,0,0)
  ellipse(250,180,15,15)
  //Fin
  stroke(0,0,0)
  strokeWeight(2)
  line(200,210,180,210)
  line(190,220,180,210)
  //Mouth
  line(300,200,275,200)
  //Seaweed
  stroke(0, 181, 36)
  line(390,400,370,360)
  line(370,360,390,320)
  line(390,320,370,260)
  line(370,260,390,200)
  line(300,400,320,380)
  line(320,380,300,360)
  line(300,360,320,340)
  line(320,340,300,320)
  //image
  image(dolphin,windowWidth/2,windowHeight/2,300,400)
 //Animation
  if(keyIsPressed==true){
    fill(212, 254, 255)
    stroke(132, 205, 207)
    ellipse(305,200,10,10)
    ellipse(315,180,15,15)
    ellipse(310,160,20,20)
     //baby fish
  }
  if(mouseIsPressed==true){
    fill(255, 177, 110)
    noStroke()
    ellipse(200,320,100,50)
    fill(0,0,0)
    stroke(255,255,255)
    ellipse(220,315,10,10)
    stroke(0,0,0)
    line(249,320,235,320)
    line(190,330,180,320)
  line(190,320,180,320)
  }
}