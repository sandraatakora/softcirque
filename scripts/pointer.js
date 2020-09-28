

// cursor settings

    var pointer = $(".pointer");

    $(window).mousemove(function(e) {
        pointer.css({
            top: e.clientY - pointer.height() / 2,
            left: e.clientX - pointer.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            pointer.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            pointer.css({
                opacity: "1"
            });
        });

//Scale cursor on link hover
    $('a')
        .mouseenter(function() {
            pointer.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            pointer.css({
                transform: "scale(1)"
            });
        });

//Scale cursor on soft cirque hover
        // $("#softcirque")
        // .mouseenter(function() {
        //     pointer.css({
        //         transform: "scale(3.2)"
        //     });
        // })
        // .mouseleave(function() {
        //     pointer.css({
        //         transform: "scale(1)"
        //     });
        // });




    $(window)
        .mousedown(function() {
            pointer.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            pointer.css({
                transform: "scale(1)"
            });
        });



 // Softcirque follower

var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY;
});




// cache the selector
var follower = $("#softcirque");
var xp = 0;
var yp = 0;



var loop = setInterval(function(){
  follower.delay(3000).fadeIn(2000);
    var width = $(window).width();
    mouseX = Math.max(mouseX, 20);
    mouseX = Math.min(mouseX, width-20);
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    follower.css({left:xp});  
    yp += (mouseY - yp) / 12;
    follower.css({top:yp});    
}, 30);

//Fade out soft cirque

$('.softcirque').delay(2000).fadeOut(2000);


// IMAGE SLIDESHOW

class Slideshow {

    constructor() {
      this.initSlides();
      this.initSlideshow();
    }
  
    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
      this.container = $('[data-slideshow]');
      this.slides = this.container.find('img');
      this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
    }
  
    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
      this.imagesLoaded = 0;
      this.currentIndex = 0;
      this.setNextSlide();
      this.slides.each((idx, slide) => {
        $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
      });
    }
  
    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
      this.imagesLoaded++;
      if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }
  
    // Start the slideshow.
    playSlideshow() {
      this.slideshow = window.setInterval(() => { this.performSlide() }, 4000);
    }
  
    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {
      if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
      this.nextSlide.removeClass('next');
      this.prevSlide = this.nextSlide;
      this.prevSlide.addClass('prev');
  
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
      this.setNextSlide();
  
      this.prevSlide.addClass('fade-out');
    }
  
    setNextSlide() {
      this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
      this.nextSlide.addClass('next');
    }
  
  }
  
  $(document).ready(function() {
    new Slideshow;
  });
  


  //menu
  $("#about").click(function() {
    $("#about").toggleClass("active");
    $("#aboutp").toggleClass("hidden");
    $("#img1").toggleClass("hidden");
  });

  $("#play").click(function() {
    $("#play").toggleClass("active1");
    $("#playp").toggleClass("hidden");
    $("#img2").toggleClass("hidden");
  });

//   $("#play").click(function() {
//     $("#playp").toggle();
//     $("#playp").css("text-align","left");
//     $("#play").css("text-align","left");
//   });



  
