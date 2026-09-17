let xPos
let yPos
let sheep
let zzz

let xSpeed = 2
let ySpeed = 2

let score = 0

let mouseDist

let ballSize = 50

let menuScreenBool = true
let startGameBool = false
let winGameBool = false


async function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	sheep = await loadImage('/images/sheep.png')
	imageMode(CENTER)
	zzz = await loadImage('/images/zzz.png')

}


function draw(){

	if(menuScreenBool == true){
		menuScreen()
	}
	if(startGameBool == true){
	startGame()
}
if(winGameBool == true){
	winGame()
	}
	noCursor()
image(zzz, mouseX, mouseY, 30, 30)
}

function menuScreen(){
	background(random(0))
	fill(255)
	textSize(20)
	text('Welcome to Sheep Tag! Press the mouse to get started!', 10, 100)
	if(mouseIsPressed){
		menuScreenBool = false
		startGameBool = true
	}
}

function startGame(){
background(0)
fill(255)
textSize(20)
text('Tag the sheep with your mouse! Your score is ' + score + ' points', 10, 30)

	image(sheep, xPos, yPos, ballSize, ballSize)

	mouseDist = dist(mouseX, mouseY, xPos, yPos)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth- ballSize/2 || xPos <= ballSize/2){
		xSpeed = xSpeed * -1
		fill(random(255),random(255),random(255))
	}

	if(yPos >= windowHeight- ballSize/2 || yPos <= ballSize/2){
		ySpeed = ySpeed * -1
		fill(random(255),random(255),random(255))
	}

	if(mouseDist < ballSize/2){
		score ++

		xPos = random(ballSize/2, windowWidth - ballSize/2)
		yPos = random(ballSize/2, windowHeight - ballSize/2)

		xSpeed = xSpeed * 1.2
		ySpeed = ySpeed * 1.2
	}

	if(score == 15){
		startGameBool = false
		winGameBool = true
	}
}


function winGame(){
	background(random(0))
	fill(255)
	textSize(20)
	text('You Win!', 10, 100)
}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}