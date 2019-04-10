                var counter = 0;
                function changeImage(source) {
                    document.getElementById('mainPic').src = source.src;
                }
        
                function UpByLike() {
                    counter++;
                    document.getElementById('counter').innerHTML = counter;
                }