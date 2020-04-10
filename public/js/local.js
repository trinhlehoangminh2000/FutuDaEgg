window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-light");
  } else {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-transparent");
  }
}
setTimeout(function(){
  document.getElementById("hero-1").classList.remove("text-2");
  document.getElementById("hero-1").classList.add("text-white");
}, 1200); 
setTimeout(function(){
  const itemlist = document.querySelectorAll('.hero');
  itemlist.forEach(function(item){
    item.classList.remove("hidden");
    item.classList.add('animated', 'slideInUp');
  });
}, 1350);
