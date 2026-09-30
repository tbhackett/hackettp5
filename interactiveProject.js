
let bull
let bear

let p1
let p2

let button
let p1button
let p2button
let next
let finish
let start
let title

let nvidia
let microsoft
let nasdaq
let meta

let p1y1
let p1y2
let p1y3
let p1y4
let p1y5

let p2y1
let p2y2
let p2y3
let p2y4
let p2y5

let apple
let spotify
let chevron
let intel

let win
let lose

let startScreenBool = true
let instructionsBool = false
let menuScreenBool = false
let winGameBool = false
let loseGameBool = false

let startBullBool = false
let startBearBool = false

let portfolio1Bool = false
let portfolio2Bool = false

let nvidia1Bool = false
let nasdaq1Bool = false
let meta1Bool = false
let microsoft1Bool = false

let apple2Bool = false
let spotify2Bool = false
let chevron2Bool = false
let intel2Bool = false

let year11Bool = false
let year12Bool = false
let year13Bool = false
let year14Bool = false
let year15Bool = false

let year21Bool = false
let year22Bool = false
let year23Bool = false
let year24Bool = false
let year25Bool = false

let money = 10000
let nvidiastock = 1
let metastock = 1
let nasdaqstock = 1
let microsoftstock = 1

let applestock = 1
let spotifystock = 1
let chevronstock = 1
let intelstock = 1

let year = 0

let stocks1 = [
  {name: "Nvidia", price: 126, shares: 0},
  {name: "Nasdaq", price: 98, shares: 0},
  {name: "Meta", price: 482, shares: 0},
  {name: "Microsoft", price: 413, shares: 0}
];

let stocks2 = [
  {name: "Chevron", price: 168, shares: 0},
  {name: "Apple", price: 227, shares: 0},
  {name: "Intel", price: 36, shares: 0},
  {name: "Spotify", price: 289, shares: 0}
]

async function setup(){
	createCanvas(windowWidth,windowHeight)
	bull = await loadImage('images/bull.png')
	bear = await loadImage('images/bear.png')

	p1 = await loadImage('images/p1.png')
	p2 = await loadImage('images/p2.png')

	button = await loadImage('images/button.png')
	p1button = await loadImage('images/p1button.png')
	p2button = await loadImage('images/p2button.png')
	next = await loadImage('images/next.png')
	finish = await loadImage('images/finish.png')
	start = await loadImage('images/start.png')
	title = await loadImage('images/title.png')

nvidia = await loadImage('images/nvidia.png')
nasdaq = await loadImage('images/nasdaq.png')
meta = await loadImage('images/meta.png')
microsoft = await loadImage('images/microsoft.png')

p1y1 = await loadImage('images/p1years/p1y1.png')
p1y2 = await loadImage('images/p1years/p1y2.png')
p1y3 = await loadImage('images/p1years/p1y3.png')
p1y4 = await loadImage('images/p1years/p1y4.png')
p1y5 = await loadImage('images/p1years/p1y5.png')

apple = await loadImage('images/apple.png')
spotify = await loadImage('images/spotify.png')
chevron = await loadImage('images/chevron.png')
intel = await loadImage('images/intel.png')

p2y1 = await loadImage('images/p2years/p2y1.png')
p2y2 = await loadImage('images/p2years/p2y2.png')
p2y3 = await loadImage('images/p2years/p2y3.png')
p2y4 = await loadImage('images/p2years/p2y4.png')
p2y5 = await loadImage('images/p2years/p2y5.png')

win = await loadImage('images/win.gif')
lose = await loadImage('images/lose.gif')
	
	imageMode(CENTER)
}

function draw(){

	if(startScreenBool == true){
		startScreen()
	}

	if(instructionsBool == true){
		instructions()
	}

	if(menuScreenBool == true){
		menuScreen()
	}

	if(startBullBool == true){
		startBull()
}

	if(portfolio1Bool == true){
		portfolio1()
	}

	if(startBearBool == true){
		startBear()
	}

	if(portfolio2Bool == true){
		portfolio2()
	}


	if(winGameBool == true){
		winGame()
	}

	if(nvidia1Bool == true){
		nvidia1()
	}

	if(nasdaq1Bool == true){
		nasdaq1()
	}

	if(meta1Bool == true){
		meta1()
	}

	if(microsoft1Bool == true){
		microsoft1()
	}

	if(apple2Bool == true){
		apple2()
	}

	if(spotify2Bool == true){
		spotify2()
	}

	if(chevron2Bool == true){
		chevron2()
	}

	if(intel2Bool == true){
		intel2()
	}

	if(year11Bool == true){
		year11()
	}

	if(year12Bool == true){
		year12()
	}

	if(year13Bool == true){
		year13()
	}

	if(year14Bool == true){
		year14()
	}

	if(year15Bool == true){
		year15()
	}
	if(year21Bool == true){
		year21()
	}

	if(year22Bool == true){
		year22()
	}

	if(year23Bool == true){
		year23()
	}

	if(year24Bool == true){
		year24()
	}

	if(year25Bool == true){
		year25()
	}
	if(winGameBool == true){
		winGame()
	}
	if(loseGameBool == true){
		loseGame()
	}
}

function mousePressed() {

if(startScreenBool == true){
		if(mouseX >= windowWidth/2 - 200 &&
			mouseX <= windowWidth/2 + 200 &&
			mouseY >= windowHeight/2 + 100 &&
			mouseY <= windowWidth/2 + 300){

			startScreenBool = false
			instructionsBool = true
			return
		}

	}
	if(instructionsBool == true){
		if(mouseX >= windowWidth/2 - 200 &&
			mouseX <= windowWidth/2 + 200 &&
			mouseY >= windowHeight/2 + 100 &&
			mouseY <= windowWidth/2 + 300){

			instructionsBool = false
			menuScreenBool = true
			return
		}

	}

  if (menuScreenBool == true){

  let bullX = windowWidth / 2 - 225;
  let bearX = windowWidth / 2 + 225;
  let imageY = windowHeight / 2;

  let clickedBull =
    mouseX >= bullX - 150 && mouseX <= bullX + 150 &&
    mouseY >= imageY - 125 && mouseY <= imageY + 125;

  let clickedBear =
    mouseX >= bearX - 150 && mouseX <= bearX + 150 &&
    mouseY >= imageY - 125 && mouseY <= imageY + 125;


  if (clickedBull) {
    menuScreenBool = false;
    startBullBool = true;
    startBearBool = false;
  } else if (clickedBear) {
    menuScreenBool = false;
    startBearBool = true;
    startBullBool = false;
  }
}

  if(portfolio1Bool == true){
  	//meta button
  	if(mouseX >= windowWidth/2 - 400 && mouseX <= windowWidth/2 - 210 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		meta1Bool = true
  	}
  	//nvidia button
  	if(mouseX >= windowWidth/2 - 200 && mouseX <= windowWidth/2 - 10 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		nvidia1Bool = true
  	}
  		//microsoft button
  	if(mouseX >= windowWidth/2 && mouseX <= windowWidth/2 + 190 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		microsoft1Bool = true
  	}
  		//nasdaq button
  	if(mouseX >= windowWidth/2 + 200 && mouseX <= windowWidth/2 + 390 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		nasdaq1Bool = true
  	}
  }

  if(portfolio2Bool == true){
  	//apple button
  	if(mouseX >= windowWidth/2 - 400 && mouseX <= windowWidth/2 - 210 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		apple2Bool = true
  	}
  	//spotify button
  	if(mouseX >= windowWidth/2 - 200 && mouseX <= windowWidth/2 - 10 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		spotify2Bool = true
  	}
  		//chevron button
  	if(mouseX >= windowWidth/2 && mouseX <= windowWidth/2 + 190 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		chevron2Bool = true
  	}
  		//intel button
  	if(mouseX >= windowWidth/2 + 200 && mouseX <= windowWidth/2 + 390 &&
  		mouseY >= windowHeight/2 - 105 && mouseY <= windowHeight/2 + 105){

  		portfolio1Bool = false;
  		intel2Bool = true
  	}
  }

  	//buy button meta
  if(meta1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 482
  		metastock = metastock + 1

  	}
  }
// sell button meta
  if(meta1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 482
  	metastock = metastock - 1

  	}
  }

  //buy button nvidia
  if(nvidia1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 126
  		nvidiastock = nvidiastock + 1
  	}
  }
// sell button nvidia
  if(nvidia1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 126
  		nvidiastock = nvidiastock - 1
  	}
  }

  //buy button nasdaq
  if(nasdaq1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 98
  		nasdaqstock = nasdaqstock + 1
  	}
  }
// sell button nasdaq
  if(nasdaq1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 98
  		nasdaqstock = nasdaqstock - 1

  	}
  }

  //buy button microsoft
  if(microsoft1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 413
  		microsoftstock = microsoftstock + 1
  	}
  }
// sell button microsoft
  if(microsoft1Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 413
  		microsoftstock = microsoftstock - 1
  	}
  }

  //buy button apple
  if(apple2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 227
  		applestock = applestock + 1
  	}
  }
// sell button apple
  if(apple2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 227
  		applestock = applestock - 1
  	}
  }
  //buy button spotify
  if(spotify2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 289
  		spotifystock = spotifystock + 1
  	}
  }
// sell button spotify
  if(spotify2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 289
  		spotifystock = spotifystock - 1
  	}
  }
  //buy button chevron
  if(chevron2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 168
  		chevronstock = chevronstock + 1
  	}
  }
// sell button chevron
  if(chevron2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 168
  		chevronstock = chevronstock - 1
  	}
  }

  //buy button intel
  if(intel2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 - 100 &&
  		mouseY <= windowHeight/2 ){

  		money = money - 36
  		intelstock = intelstock + 1
  	}
  }
// sell button intel
  if(intel2Bool == true){
  	if(mouseX >= windowWidth/6 - 100 && 
  		mouseX <= windowWidth/6 + 100 &&
  		mouseY >= windowHeight/2 &&
  		mouseY <= windowHeight/2 + 100){

  		money = money + 36
  		intelstock = intelstock - 1
  	}
  }

  if(meta1Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		meta1Bool = false
  		nvidia1Bool = true
  		return
  	}
  }

  if(nvidia1Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		nvidia1Bool = false
  		nasdaq1Bool = true
  		return
  	}
  }

  if(nasdaq1Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		nasdaq1Bool = false
  		microsoft1Bool = true
  		return
  	}
  }
  if(microsoft1Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		microsoft1Bool = false
  		year11Bool = true
  		return
  	}
  }

  if(apple2Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		apple2Bool = false
  		spotify2Bool = true
  		return
  	}
  }

  if(spotify2Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		spotify2Bool = false
  		chevron2Bool = true
  		return
  	}
  }
  if(chevron2Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		chevron2Bool = false
  		intel2Bool = true
  		return
  	}
  }
  if(intel2Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 + 200 &&
  		mouseY <= windowHeight/2 + 300){

  		intel2Bool = false
  		year21Bool = true
  		return
  	}
  }
  //win game
  if(year15Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 - 50 &&
  		mouseY <= windowHeight/2 + 50 &&
  		money >= 10000){

  		year15Bool = false
  		winGameBool = true
  	}
  }
  if(year25Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 - 50 &&
  		mouseY <= windowHeight/2 + 50 &&
  		money >= 10000){

  		year25Bool = false
  		winGameBool = true
  	}
  }
  //lose game
  if(year15Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 - 50 &&
  		mouseY <= windowHeight/2 + 50 &&
  		money < 10000){

  		year15Bool = false
  		loseGameBool = true
  	}
  }
  if(year25Bool == true){
  	if(mouseX >= windowWidth/2 - 150 &&
  		mouseX <= windowWidth/2 + 150 &&
  		mouseY >= windowHeight/2 - 50 &&
  		mouseY <= windowHeight/2 + 50 &&
  		money < 10000){

  		year25Bool = false
  		loseGameBool = true
  	}
  }
}

function keyPressed(){
	if(startBullBool == true){
if(key === '1'){
	portfolio1Bool = true
	startBullBool = false
	startBearBool = false
	winGameBool = false
	portfolio2Bool = false
}
if(key === '2'){
portfolio2Bool = true
	startBullBool = false
	startBearBool = false
	winGameBool = false
	portfolio1Bool = false
}
	}
	if(startBearBool == true){
if(key === '1'){
	portfolio1Bool = true
	startBullBool = false
	startBearBool = false
	winGameBool = false
	portfolio2Bool = false
}
if(key === '2'){
portfolio2Bool = true
	startBullBool = false
	startBearBool = false
	winGameBool = false
	portfolio1Bool = false
}
	}
	//p1 clicks
	if(year11Bool == true){
		if(key === ' '){
			year12Bool = true
			year11Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year12Bool == true){
		if(key === ' '){
			year13Bool = true
			year12Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year13Bool == true){
		if(key === ' '){
			year14Bool = true
			year13Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year14Bool == true){
		if(key === ' '){
			year15Bool = true
			year14Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	//p2 clicks
	if(year21Bool == true){
		if(key === ' '){
			year22Bool = true
			year21Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year22Bool == true){
		if(key === ' '){
			year23Bool = true
			year22Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year23Bool == true){
		if(key === ' '){
			year24Bool = true
			year23Bool = false
			money = floor(random(-50000, 50001))
			return
		}
	}
	if(year24Bool == true){
		if(key === ' '){
			year25Bool = true
			year24Bool = false
			money = floor(random(-50000, 50000))
			return
		}
	}
}

function startScreen(){
	background(45, 61, 115)
	image(title, windowWidth/2, windowHeight/2 - 150, 800, 300)
	image(start, windowWidth/2, windowHeight/2 + 200, 400, 200)
}

function instructions(){
	background(45, 61, 115)
	text('Instructions:', 50, 100)
	text('After choosing your character, you will recieve $10,000 to buy and sell stocks from 4 companies.', 50, 150)
	text('Once you select a portfolio of stocks, you can either use your money, or save it.', 50, 200)
	text('After finishing, click the space button to run through a 5 year simulation.', 50, 250 )
	text('You only win if you end the simulation with at least the $10,000 you started with.', 50, 300)
	textSize(30)
	fill(255)
	image(start, windowWidth/2, windowHeight/2 + 200, 400, 200)
}

function menuScreen(){
	background(45, 61, 115)
	fill(255)
	textSize(30)
	text('Welcome to Bulls v. Bears. Please select your character.', windowWidth/4, windowHeight/4)
	image(bull,(windowWidth/2)-225, windowHeight/2, 300, 250)
	image(bear, (windowWidth/2)+225, windowHeight/2, 300, 250)
	}

function startBull(){
	background(45, 61, 115)
	image(p1,(windowWidth/2)-225, windowHeight/2, 350, 300)
	text('Portfolio #1',(windowWidth/4)+85,windowHeight/4)
	image(p2, (windowWidth/2)+225, windowHeight/2, 400, 300)
	text('Portfolio #2', (windowWidth/2)+150, windowHeight/4)
	text('Please type either 1 or 2 to select a portfolio.', (windowWidth/3)-50, windowHeight/10)

}

function startBear(){
	background(45, 61, 115)
	image(p1,(windowWidth/2)-225, windowHeight/2, 350, 300)
	text('Portfolio #1',(windowWidth/4)+85,windowHeight/4)
	image(p2, (windowWidth/2)+225, windowHeight/2, 400, 300)
	text('Portfolio #2', (windowWidth/2)+150, windowHeight/4)
	text('Please type either 1 or 2 to select a portfolio.', (windowWidth/3)-50, windowHeight/10)

}

function portfolio1(){
	background(7, 20, 27)
	image(p1button,windowWidth/2,windowHeight/2, 800, 300)
}

function portfolio2(){
	background(7, 20, 27)
	image(p2button, windowWidth/2, windowHeight/2, 800, 300)
}

//p1 buttons
function meta1(){
	background(7, 20, 27)
	image(meta, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + metastock + ' shares of Meta.', windowWidth/3, windowHeight/8)
}

function nvidia1(){
	background(7, 20, 27)
	image(nvidia, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + nvidiastock + ' shares of Nvidia.', windowWidth/3, windowHeight/8)
}

function microsoft1(){
	background(7, 20, 27)
	image(microsoft, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(finish, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + microsoftstock + ' shares of Microsoft.', windowWidth/3, windowHeight/8)
}

function nasdaq1(){
	background(7, 20, 27)
	image(nasdaq, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + nasdaqstock + ' shares of Nasdaq.', windowWidth/3, windowHeight/8)
}
//p2 buttons
function apple2(){
	background(7, 20, 27)
	image(apple, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + applestock + ' shares of Apple.', windowWidth/3, windowHeight/8)
}

function spotify2(){
	background(7, 20, 27)
	image(spotify, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + spotifystock + ' shares of Spotify.', windowWidth/3, windowHeight/8)
}

function chevron2(){
	background(7, 20, 27)
	image(chevron, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(next, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + chevronstock + ' shares of Chevron.', windowWidth/3, windowHeight/8)
}

function intel2(){
	background(7, 20, 27)
	image(intel, windowWidth/2, windowHeight/2, 690, 450)
	image(button, windowWidth/6, windowHeight/2, 300, 250)
	image(finish, windowWidth/2, windowHeight/2 + 250, 300, 100)
	text('You have: $' + money + ' and ' + intelstock + ' shares of Intel.', windowWidth/3, windowHeight/8)
}

//p1
function year11(){
		background(7, 20, 27)
image(p1y1, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year12(){
		background(7, 20, 27)
image(p1y2, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year13(){
		background(7, 20, 27)
image(p1y3, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year14(){
		background(7, 20, 27)
image(p1y4, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year15(){
		background(7, 20, 27)
image(p1y5, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
image(finish, windowWidth/2, windowHeight/2, 300, 100)
}

//p2
function year21(){
		background(7, 20, 27)
image(p2y1, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year22(){
		background(7, 20, 27)
image(p2y2, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year23(){
		background(7, 20, 27)
image(p2y3, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year24(){
		background(7, 20, 27)
image(p2y4, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
}
function year25(){
		background(7, 20, 27)
image(p2y5, windowWidth/2, (windowHeight/2) + 50, windowWidth - windowWidth/4, windowHeight - windowHeight/8)
text('You now have: $ ' + money, windowWidth/3, windowHeight - windowHeight + 50)
image(finish, windowWidth/2, windowHeight/2, 300, 100)
}

function winGame(){
	background(7, 20, 27)
	image(win, windowWidth/2, windowHeight/2, windowWidth - 100, windowHeight - 100)
}

function loseGame(){
	background(7, 20, 27)
	image(lose, windowWidth/2, windowHeight/2, windowWidth - 100, windowHeight - 100)
}

