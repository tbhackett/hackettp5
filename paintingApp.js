
let dolphin

let lineBrushBool = false
let ellipseBrushBool = false
let imageBrushBool = false

async function setup(){
	createCanvas(windowWidth,windowHeight)
	background(255,255,255)
	 dolphin = await loadImage('/images/dolphin.gif')
	 imageMode(CENTER)
}

function draw(){
	if(lineBrushBool == true)
		lineBrush()
	if(ellipseBrushBool == true)
		ellipseBrush()
	if(imageBrushBool == true)
		imageBrush()
	}


function lineBrush(){
	stroke(random(252), random(252), 255)
	if(mouseIsPressed){
		line(pmouseX, pmouseY, mouseX, mouseY)
	}
}


function ellipseBrush(){
	if(mouseIsPressed){
		fill(82, 171, 255)
		ellipse(mouseX,mouseY,20,20)
	}
}


function imageBrush(){
	if(mouseIsPressed){
		image(dolphin, mouseX, mouseY, 150, 150)
	}
}

function keyPressed(){

	if(key === 'l'){
		lineBrushBool = true
		ellipseBrushBool = false
		imageBrushBool = false
	}

	if(key === 'e'){
		ellipseBrushBool = true
		lineBrushBool = false
		imageBrushBool = false
	}

	if(key === 'd'){
		imageBrushBool = true
		lineBrushBool = false
		ellipseBrushBool = false
	}

	if(key === 'c'){
		imageBrushBool = false
		lineBrushBool = false
		ellipseBrushBool = false
		background(255)
	}
}




