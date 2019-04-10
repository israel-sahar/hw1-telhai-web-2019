function UpByLike() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}

var counter = 0;
function changeImage(source) {
    document.getElementById('main-photo').src = source.src;
}