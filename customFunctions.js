
let sheep
let fence
let stars

let xPos
let yPos

let xSpeed = 10
let ySpeed = 10

async function setup(){
	createCanvas(windowWidth,windowHeight)
	background(161, 222, 255)
	 sheep = await loadImage('/images/sheep.png')
	 fence = await loadImage('/images/fence.png')
	 stars = await loadImage('/images/stars.webp')
 imageMode(CENTER)

 xPos = windowWidth/2
	yPos = windowHeight/2
}

function draw(){

//night
		if (mouseIsPressed == true){
		background(31, 37, 79)
		fill(194, 255, 236)
		ellipse(100,50,50,50)
		fill(48, 110, 64)
noStroke()
rect(0,400,windowWidth,windowHeight)
image(stars, windowWidth/2,windowHeight/2,windowWidth,windowHeight)
	}
		else
//grass
background(161, 222, 255)
fill(48, 110, 64)
noStroke()
rect(0,400,windowWidth,windowHeight)

//sun
fill(233, 255, 156)
ellipse(100,50,50,50)

//imagesheep
image(sheep,xPos,yPos,150,150)
xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth-50 || xPos <= 50){
		xSpeed = xSpeed * -1

	}

	if(yPos >= windowHeight-250 || yPos <= 50){
		ySpeed = ySpeed * -1
	}

//imagefence
image(fence,windowWidth/2,(windowHeight/2)+100,250,250)


		
	}








