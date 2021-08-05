var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var bg = "https://t4.ftcdn.net/jpg/02/49/76/09/360_F_249760944_xtVZtOvutK9ofVo03vBeQ06ZeaOrPgWD.jpg";
var ball = "https://pngimage.net/wp-content/uploads/2018/06/golf-ball-vector-png.png";
var bat = "https://freepngimg.com/thumb/golf/33325-6-golf-club-transparent-background.png";
var hole = "https://www.clipartmax.com/png/full/364-3645719_black-hole-png-png-images-sprites-de-agujeros-negros.png";
var bg_tag = new Image();
var ball_tag = new Image();
var bat_tag = new Image();
var hole_tag = new Image();
var bat_x = 0;
var ball_x = 0;
var ball_y = 490;
var hitOrnot = "not";

function add(){
   bg_tag.src = bg;
   bg_tag.onload = addBg(); 

   bat_tag.src = bat;
   bat_tag.onload = addBat();

   hole_tag.src = hole;
   hole_tag.onload = addHole();

   ball_tag.src = ball;
   ball_tag.onload = addBall();
}
function addBg(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
}
function addBall(){
    ctx.drawImage(ball_tag,ball_x,ball_y,50,50);
}
function addBat(){
    ctx.drawImage(bat_tag,bat_x,490,80,80);
}
function addHole(){
    ctx.drawImage(hole_tag,290,0,50,50);
}
window.addEventListener("keydown",key_down);
function key_down(e){
    var keyPressed = e.keyCode;
    if (keyPressed == 37){
            left();
    }
    if (keyPressed == 39){
    right();
    }
    if (keyPressed == 32) {
        hit();
    }
    if (ball_x == 290 && ball_y == 0) {
        document.getElementById("score").innerHTML = "You Win";
        console.log("You Win");
    }
}
function left(){
    if (hitOrnot == "not") {
        ball_x = ball_x - 10
        bat_x = bat_x - 10;
        addBg();
        addBat();
        addBall();
        addHole();
    }else{
        bat_x = bat_x - 10;
        addBg();
        addBat();
        addBall();
        addHole();
    }
}
function right(){
    if (hitOrnot == "not") {
        ball_x = ball_x + 10
        bat_x = bat_x + 10;
        addBg();
        addBat();
        addBall();
        addHole();
        console.log(ball_x);
    }else{
        bat_x = bat_x + 10;
        addBg();
        addBat();
        addBall();
        addHole();
    }
}
function hit(){
for (var i = 0; i < 210; i++) {
    ball_y = ball_y - ball_y;
    addBg();
    addBat();
    addBall();
    addHole();
    hitOrnot = "hit";
}
}
