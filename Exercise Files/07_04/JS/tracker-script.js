const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const square = document.querySelector('.square');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition1 = windowWidth - e.clientX - 20;
    var verticalPosition1= windowHeight - e.clientY - 20;

    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;


    // Set horizontal and vertical position.
    square.style.left = horizontalPosition1 + 'px';
    square.style.top = verticalPosition1 + 'px';
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';


}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "yellow";
    CIRCLE.style.borderColor = "red";
}
function changeColorOnTouch1() {
    square.style.backgroundColor = "orange";
    square.style.borderColor = "black";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
square.addEventListener('mouseenter', changeColorOnTouch1, false);
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);


// When the mouse leaves the circle, remove inline styles with an anonymous function.
square.addEventListener('mouseleave', function(){square.removeAttribute("style");}, false);
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
