var id = null;

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

  var xStep, yStep;
  xStep = Math.floor(Math.random() * 10) - 5;
  yStep = Math.floor(Math.random() * 10) - 5;
  xStep = xStep * 2.5 + 1;
  yStep = yStep * 2.5 + 1;

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
move("dot1", id);
move("dot2", id);
move("dot3", id);
move("dot4", id);
move("dot5", id);
move("dot6", id);
move("dot7", id);
move("dot8", id);
move("dot9", id);
move("dot10", id);
