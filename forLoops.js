


function setup(){
	createCanvas(windowWidth,windowHeight)

	for(let i=0; i<windowWidth; i=i+10){
		line(i, 0, i, windowHeight)
	}
	for(let i=0; i<windowHeight; i=i+10){
		line(0, i, windowWidth, i)
		for(let i = 0; i<100; i++){
		noStroke()
		fill(255)
		ellipse(random(windowWidth),random(windowHeight), 3, 3)
}

}
function draw(){
	for(let i = 0; i<100; i++){
		noStroke()
		fill(random(2), random(20), random(250))
		ellipse(random(windowWidth),random(windowHeight), 10, 10)
	}
	fill(255)
ellipse(windowWidth/2,windowHeight/2, 200, 200)
}