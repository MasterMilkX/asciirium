var text_size = 20;
var text_font = "Consolas"

var game_map = [];
var WIDTH = 0;
var HEIGHT = 0;
var mapOffX = 0;
var mapOffY = 0;

var debugTxt = "Hello World!";

//setup the canvas
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set the map dimensions based on window and canvas size
function setMapSize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    WIDTH = Math.floor(canvas.width/text_size);
    HEIGHT = Math.floor(canvas.height/text_size);

    mapOffX = canvas.width/text_size - (WIDTH*text_size);
    mapOffY = canvas.height/text_size - (HEIGHT*text_size);
    mapOffX /= 2;
    mapOffY /= 2;
    mapOffX = Math.floor(mapOffX);
    mapOffY = Math.floor(mapOffY);
}


///////////////   RENDERING   ///////////////


//visual rendering function
function render(){
    //background
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //render characters
    renderChar();

    //render map
    renderMap();

    //render debug
    renderDebug();
}

//render the characters
function renderChar(){
    
}

//render the map onto the canvas
function renderMap(){
    //show the current state of the map
    for(var i = 0; i < HEIGHT; i++){
        for(var j = 0; j < WIDTH; j++){
            //use text to render the map
            ctx.fillStyle = "#fff";
            ctx.font = text_size + "px " + text_font;
            ctx.fillText(game_map[i][j],j*text_size + mapOffX,i*text_size + mapOffY);
        }
    }
}

//render debugging
function renderDebug(){
    if(debugTxt == "") return;  //don't render if there is no text

    ctx.fillStyle = "#00f";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0,0,200,20);

    //render the text
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#fff";
    ctx.font = "12px Consolas";
    ctx.fillText(debugTxt,0,0);
}




///////////////   GAME LOOP   ///////////////



//main game loop function
function main(){
    requestAnimationFrame(main);

    render();
}

//initialization function
function init(){
    console.log("starting generation")
    setMapSize();

    game_map = randomMap(WIDTH,HEIGHT);

    debugTxt = `WIDTH: ${WIDTH} HEIGHT: ${HEIGHT} | mapOffX: ${mapOffX} mapOffY: ${mapOffY}`;
}

//check if the window was resized
window.addEventListener("resize", function(){
    setMapSize();
});

main();