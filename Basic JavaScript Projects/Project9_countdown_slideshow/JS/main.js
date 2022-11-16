
function countdown() { // A function for a countdown
    var seconds = document.getElementById("seconds").value; // var seconds is getting the user input.

    function tick() { // funtion tick is the clock. 
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) { // if conditonal to see if time is up
            alert("Times Up!"); // the alert sent to the user when the timer is up
            clearTimeout(time);
            timer.innerHTML = "";
        }

    }
    tick(); // running the clock in the countdown function 

};

let slideIndex = 1; // setting slideIndex to 1 
showSlides(slideIndex); // showing Slide 1


function plusSlides(n) { // a funtion to show the next slide 
  showSlides(slideIndex += n);
}


function currentSlide(n) { // a funtion to show current slide
  showSlides(slideIndex = n);
}


function showSlides(n) { // A funtion that takes the # of the slide and sets it as "Active" for viewing.
  let i;

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { // Checks to make sure we are within the slide limit.
    slideIndex = 1
}    
  if (n < 1) { // 
    slideIndex = slides.length
}
  for (i = 0; i < slides.length; i++) { // i is less then slide legnth add 1 to i. 

    slides[i].style.display = "none";  

  }
  for (i = 0; i < dots.length; i++) {

    dots[i].className = dots[i].className.replace(" active", ""); // Setting it as Active since in the css the display was set to none.

  }
  slides[slideIndex-1].style.display = "block";  // intervines with the style of the slides element "mySlides".
  dots[slideIndex-1].className += " active"; // intervines with the style of the dots element.

}