canvas=document.getElementById("my_canvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=100
rover_x=50
rover_y=50
nasa_img=["nasa_img_1.jpeg", "nasa_img_2.jpeg", "nasa_img_3.jpg", "nasa_img_4.jpg", "nasa_img_5.jpg", "mars.jpg" ]
random_no=Math.floor(Math.random()*nasa_img.length)
console.log(random_no)


bg_img=nasa_img[random_no]
rover_img="rover.png"

function add(){
    bg_imgtag=new Image();
bg_imgtag.onload=uploadbg
bg_imgtag.src=bg_img
rover_imgtag=new Image()
rover_imgtag.onload=uploadrover
rover_imgtag.src=rover_img
}
function uploadbg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(keyPressed=='37'){
        left();
        console.log("left key is pressed")
    }
    if(keyPressed=='38'){
        up();
        console.log("up key is pressed")
    }

    if(keyPressed=='39'){
        right();
        console.log("right key is pressed")
    }

    if(keyPressed=='40'){
        down();
        console.log("bottom key is pressed")
    }


}

function up(){
    if (rover_y>=0){
        rover_y=rover_y - 10
        uploadbg()
        uploadrover()
        console.log("up")
    }

}
function down(){
    if (rover_y<=500){
        rover_y=rover_y + 10
        uploadbg()
        uploadrover()
        console.log("down")
    }

}
function left(){
    if (rover_x>=0){
        rover_x=rover_x - 10
        uploadbg()
        uploadrover()
        console.log("left")
    }

}
function right(){
    if (rover_x<=700){
        rover_x=rover_x + 10
        uploadbg()
        uploadrover()
        console.log("right")
    }

}