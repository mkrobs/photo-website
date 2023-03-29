window.onload=function() { 
    window.onscroll = function() {stickyFunction()};
        var header = document.getElementById("stickyheader");
        var sticky = header.offsetTop;

        function stickyFunction() {
         if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
            } else {
          header.classList.remove("sticky");
             }
        }
  }

function showMenu() {
    var x = document.getElementById("navMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}



function setMenu() {
  

  if ($(window).width() < 540) {
    document.getElementById("stickyheader").style.fontSize = "10px";
    document.getElementById("stickyheader").style.height = "85px";
    document.getElementById("logo").style.height = "50px";
  }

  else if ($(window).width() > 540 && $(window).width() < 1280) {
    document.getElementById("stickyheader").style.fontSize = "15px";
    document.getElementById("stickyheader").style.height = "100px";
    document.getElementById("logo").style.height = "75px";
  }
  else {
    document.getElementById("stickyheader").style.fontSize = "30px";
    document.getElementById("stickyheader").style.height = "175px";
    document.getElementById("logo").style.height = "150px";
  }
  
}


function scrollFunction() {
  if ($(window).width() > 1280) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("stickyheader").style.fontSize = "15px";
      document.getElementById("stickyheader").style.height = "100px";
      document.getElementById("logo").style.height = "75px";
    } else {
      document.getElementById("stickyheader").style.fontSize = "30px";
      document.getElementById("stickyheader").style.height = "175px";
      document.getElementById("logo").style.height = "150px";
    }
  }

  else if ($(window).width() < 540) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("stickyheader").style.fontSize = "10px";
      document.getElementById("stickyheader").style.height = "85px";
      document.getElementById("logo").style.height = "50px";
    } else {
      document.getElementById("stickyheader").style.fontSize = "10px";
      document.getElementById("stickyheader").style.height = "85px";
      document.getElementById("logo").style.height = "50px";
    }
  }
  else {  
      document.getElementById("stickyheader").style.fontSize = "15px";
      document.getElementById("stickyheader").style.height = "100px";
      document.getElementById("logo").style.height = "75px";
  }
} 


$(window).resize(function() {
  setMenu();
});

window.onscroll = function() {scrollFunction()};