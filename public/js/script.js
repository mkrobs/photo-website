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

function stickyFunction() {
      var header = document.getElementById("stickyheader");
      //var icon = document.getElementById("hamburger")
       if ($(window).width() < 540) {
        header.classList.add("non-sticky");
          } else {
        header.classList.remove("non-sticky");
    }
}


//function stickyFunction() {
      //var header = document.getElementById("stickyheader");
      //var icon = document.getElementById("hamburger")
      //var sticky = header.offsetTop;
       //if (window.pageYOffset > sticky && $(window).width() < 540) {
        //header.classList.add("non-sticky");
       // icon.classList.add("sticky-icon");
          //} else {
        //header.classList.remove("non-sticky");
       // icon.classList.remove("sticky-icon");
          // }
      //}

window.onscroll = () => 
  {scrollFunction(), stickyFunction()}

 
 
     

      
