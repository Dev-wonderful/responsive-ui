
let sliderImages = document.querySelectorAll('.display');
let nextArrow = document.querySelector('.next-button');
let prevArrow = document.querySelector('.previous-button');
let current = 0;

    function reset() {
        for (let i = 0; i < sliderImages.length; i++){
            sliderImages[i].style.display = 'none';
            sliderImages[i].style.opacity = 0;
        }
    }

    function startSlide(){
        reset();
        sliderImages[0].style.display = 'block';
        // sliderImages[0].style.transition = 'all 2s'
        sliderImages[0].style.opacity = 1;
    }

    function previousSlide(){
        reset();
        sliderImages[current - 1].style.display = 'block';
        sliderImages[current - 1].style.opacity = 1;
        current--;
    }
    
    function nextSlide(){
        reset();
        sliderImages[current + 1].style.display = 'block';
        // sliderImages[current + 1].style.transition = 'opacity 0.5s ease-in-out';
        sliderImages[current + 1].style.opacity = 1;
        current++;
    }

    prevArrow.addEventListener('click', function(){
        if(current === 0){
            current = sliderImages.length;
        }
        previousSlide();
    });
    
    nextArrow.addEventListener('click', function(){
        if(current === sliderImages.length - 1){
            current = -1;
        }
        nextSlide();
    });

    function autoNext(){
        if(current === sliderImages.length - 1){
            current = -1;
        }
        nextSlide();
    }

    startSlide();
    
    setInterval(() => autoNext(), 3500);