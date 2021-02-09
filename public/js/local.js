window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-6");
  } else {
    document.getElementById("navbar").setAttribute("class", "fixed-top navbar navbar-expand-lg navbar-light bg-1");
  }
}
window.onload = function(){
  reformatGrid();
};
function reformatGrid(){
  if (screen.width >= 768){
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('hero-desktop').innerHTML;
    document.getElementById('hero-content').appendChild(div);
    delayEffect();
  } else {
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('hero-mobile').innerHTML;
    document.getElementById('hero-content').appendChild(div);
    delayEffect();
  }
}
function delayEffect(){
  setTimeout(function(){
    document.getElementById("hero-1").classList.remove("text-2");
    document.getElementById("hero-1").classList.add("text-1");
  }, 1300); 
  setTimeout(function(){
    const itemlist = document.querySelectorAll('.hero');
    itemlist.forEach(function(item){
      item.classList.remove("hidden");
      item.classList.add('animated', 'slideInUp');
    });
  }, 1500);
}

