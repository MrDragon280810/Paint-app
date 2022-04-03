canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var lastpositionofx, lastpositionofy;
color="black";
widthofline=2;
var width=screen.width;
new_width=screen.width-70;
var heigth=screen.height;
new_heigth=screen.heigth-300;
if(width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_heigth;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
lastpositionofy=e.touches[0].clienteY-canvas.offsetTop;
    color=document.getElementById("color").value;
widthofline=document.getElementById("width_of_line").value;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");
    currentpositionoftouchx=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionoftouchy=e.touches[0].clientY-canvas.offsetTop;
    
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("Last positon of x and y corrdinates =");
        console.log("X="+lastpositionofx+"Y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy)
        console.log("Current positon of x and y corrdinates =");
        console.log("X="+currentpositionoftouchx+"Y="+currentpositionoftouchy);
        ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy);
        ctx.stroke();
    
    lastpositionofx=currentpositionoftouchx;
    lastpositionofy=currentpositionoftouchy;

}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}