var cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})