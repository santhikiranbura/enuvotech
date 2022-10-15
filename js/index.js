const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-link');
const navitem = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset);
    if(y>150){
        navbar.style.backgroundColor = "#FF5F15";
        navbar.style.transition = "background-color 300ms linear";
        navbar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
        for(i=0;i<navlink.length;i++){
            navlink[i].style.color="black !important";
        }
    }else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";

    }
})
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadeSection");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      }
    }
  });
let k = 0;
let txt = "...counting";
function typeWriter() {
    if (k < txt.length) {
      document.getElementById("counting").innerHTML += txt.charAt(k);
      k++;
      setTimeout(typeWriter, 100);
    }else{
        k=0;
        document.getElementById("counting").innerHTML = "";
        setTimeout(typeWriter, 1000);
    }
  }
  typeWriter();


$("#teams-btn").click(function(){
    if($("#arrow-toggle").hasClass("down")){
        $("#arrow-toggle").removeClass("down");
        $("#arrow-toggle").addClass("up");
    }else{
        $("#arrow-toggle").removeClass("up");
        $("#arrow-toggle").addClass("down");
    }
});