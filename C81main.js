canvas = document.getElementById("myCanvas");
color_1 = "blue";
color_2 = "yellow";
color_3 = "black";
color_4 = "green";
color_5 = "red";

ctx= canvas.getContext("2d");

ctx.beginPath("2d");
ctx.strokeStyle = color_1;
ctx.lineWidth = 5;
ctx.arc(300, 228, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath("2d");
ctx.strokeStyle = color_2;
ctx.lineWidth = 5;
ctx.arc(345, 273, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath("2d");
ctx.strokeStyle = color_3;
ctx.lineWidth = 5;
ctx.arc(390, 228, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath("2d");
ctx.strokeStyle = color_4;
ctx.lineWidth = 5;
ctx.arc(435, 273, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath("2d");
ctx.strokeStyle = color_5;
ctx.lineWidth = 5;
ctx.arc(480, 228, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    ctx.stroke();
}