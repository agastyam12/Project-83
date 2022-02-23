var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;
var current_position_of_touch_x, current_position_of_touch_y;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

var width = screen.width ; 
var new_width = screen.width - 70 ;
var new_height = screen.height - 300 ; 

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
        canvas.addEventListener("touchstart", my_touchstart);

        function my_touchstart(e){
            console.log("my_touchstart");

            color = document.getElementById("color_input").value;

            width_of_line = document.getElementById("width_of_line").value;

            last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        }


    canvas.addEventListener("touchmove" , my_touchmove);

     function my_touchmove(e){
        console.log("my_touchmove");

        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
         
        strokeWeight(width_of_line);
        stroke(0);
        strokeStyle(color);
        if(mouseIsPressed) {
            line(pmouseX , pmouseY , mouseX , mouseY);
        }
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
        ctx.stroke();   
        
        last_position_of_x = current_position_of_touch_x;
        last_position_of_y = current_position_of_touch_y;

     }

 canvas.addEventListener("mouseup" , my_mouseup);


function my_mouseup(e){
    mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseleave" , my_mouseleave);


function my_mouseleave(e){
    mouseEvent = "mouseleave";
}


canvas.addEventListener("mousedown" , my_mousedown);


function my_mousedown(e){
   color = document.getElementById("color_input").value;
   width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}     



canvas.addEventListener("mouseup" , my_mouseup);



function my_mouseup(e){
    mouseEvent = "mouseup";   
}



canvas.addEventListener("mousemove" , my_mousemove);



function my_mousemove(e){
    current_position_of_touch_x = e.clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.clientY-canvas.offsetTop;

    if(mouseEvent == "mousedown"){

          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;
          ctx.moveTo(last_position_of_x  , last_position_of_y);
          ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
          ctx.stroke();
      } 

      last_position_of_x = current_position_of_touch_x;
      last_position_of_y = current_position_of_touch_y;
}


function clearArea(){
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
}