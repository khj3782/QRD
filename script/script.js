var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var id5 = null;

function init_position(elem_id){
  var elem = document.getElementById(elem_id);
  var x = Math.floor(Math.random() * (window.innerHeight - 140));
  var y = Math.floor(Math.random() * (window.innerWidth - 140));
  elem.style.top = x + 'px';
  elem.style.left = y + 'px';
}

function move(elem_id, id_num) {
  var elem = document.getElementById(elem_id);
  var x = elem.offsetTop;
  var y = elem.offsetLeft;
  /*elem.style.top = x + 'px';
  elem.style.left = y + 'px';*/

  var xStep, yStep;
  xStep = Math.floor(Math.random() * 10) - 5;
  yStep = Math.floor(Math.random() * 10) - 5;
  xStep = xStep * 4 + 1;
  yStep = yStep * 4 + 1;

  clearInterval(id_num);
  id_num = setInterval(frame, 30);

  function frame() {
    x += xStep;
    y += yStep;
    if (!boundary(x, y, elem_id)) {
      clearInterval(id_num);
      move(elem_id, id_num);
    } else {
      elem.style.top = x + 'px';
      elem.style.left = y + 'px';
    }
  }
}

function boundary(x, y, elem_id) {
  var elem = document.getElementById(elem_id);
  if (x < 0) return false;
  if (y < 0) return false;
  if (x > (window.innerHeight - elem.offsetHeight)) return false;
  if (y > (window.innerWidth - elem.offsetWidth)) return false;
  else return true;
}

init_position("dot1");
init_position("dot2");
init_position("dot3");
init_position("dot4");
init_position("dot5");
init_position("dot6");
init_position("dot7");
init_position("dot8");
init_position("dot9");
init_position("dot10");
move("dot1", id1);
move("dot2", id2);
move("dot3", id3);
move("dot4", id4);
move("dot5", id5);
move("dot6", id1);
move("dot7", id2);
move("dot8", id3);
move("dot9", id4);
move("dot10", id5);
