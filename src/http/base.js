/**
 * Created by ruioli on 2018/8/21.快快快所扩扩扩扩扩扩扩扩扩
 */
(function(){
  function w() {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;
    if (a > 750 ){
      a = 750;
    }
    //750/w = 100/font-size
    rem = a / 7.5;
    r.style.fontSize = 2*rem + "px"
  }
  var t;
  w();
  window.addEventListener("resize", function() {
    clearTimeout(t);
    t = setTimeout(w, 300)
  }, false);
})();
