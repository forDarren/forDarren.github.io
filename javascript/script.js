
  document.addEventListener('DOMContentLoaded', function() {



  var typed =  new Typed('#typed', {
    startDelay: 2000,

    cursorChar: '|',
    // shuffle: true,

    strings: [
    'reach your goals by...', 
    'have fun while...',    
    'gain muscle mass by...', 
    'lose bodyfat% by...',
    'get challenged while...'
 
    // 'working on stuff',
    // 'working on stuff',
    // 'working on stuff'

    ],
    

    typeSpeed: 70,
    backSpeed: 0,
    backDelay: 1500,
    fadeOut: true,
    loop: true

  });




  // new Typed('#typed5', {
  //   strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
  //   typeSpeed: 0,
  //   backSpeed: 0,
  //   shuffle: true,
  //   cursorChar: '_',
  //   smartBackspace: false,
  //   loop: true
  // });


});


function openForm() {


  if(document.getElementById('cover_image')) {

    document.getElementById("cover_image").style.animation = "fadeOut 1s forwards";
    document.getElementById("nav_js").style.animation = "fadeOut 1s forwards";
    document.getElementById("s1_container").style.animation = "fadeOut 1s forwards";
    document.getElementById("footer_js").style.animation = "fadeOut 1s forwards";

    document.getElementById("form_overlay").style.animation = "test 1.5s 0.3s forwards";
    document.getElementById("overlay-content").style.animation = "fadeIn 1s 1s forwards";

} else {
    // document.getElementById("form_overlay").style.width = "100%";
    document.getElementById("nav_js").style.animation = "fadeOut 1s forwards";
    document.getElementById("s1_container").style.animation = "fadeOut 1s forwards";
    document.getElementById("footer_js").style.animation = "fadeOut 1s forwards";


   document.getElementById("form_overlay").style.animation = "test 1.5s 0.3s forwards";
   document.getElementById("overlay-content").style.animation = "fadeIn 1s 1s forwards";
}
}


function closeForm() {
    // document.getElementById("form_overlay").style.width = "0";

  if(document.getElementById('cover_image')) {
    document.getElementById("cover_image").style.animation = "fadeIn 1s forwards";
    document.getElementById("nav_js").style.animation = "fadeIn 1s forwards";
    document.getElementById("s1_container").style.animation = "fadeIn 1s forwards";
    document.getElementById("footer_js").style.animation = "fadeIn 1s forwards";



  document.getElementById("form_overlay").style.animation = "test2 1s forwards";
  document.getElementById("overlay-content").style.animation = "fadeOut 0.2s forwards";
} else {
    document.getElementById("nav_js").style.animation = "fadeIn 1s forwards";
    document.getElementById("s1_container").style.animation = "fadeIn 1s forwards";
    document.getElementById("footer_js").style.animation = "fadeIn 1s forwards";



  document.getElementById("form_overlay").style.animation = "test2 1s forwards";
  document.getElementById("overlay-content").style.animation = "fadeOut 0.2s forwards";
}
}
function notCodedYet() {
  alert("I'm not coded yet!");
}
