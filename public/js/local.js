window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-light");
  } else {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-transparent");
  }
}