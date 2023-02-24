//1) call important elements

let control = document.getElementById("control");
let drawFreeHand = document.getElementById("freeHand");
let drawLine = document.getElementById("line");
let drawRect = document.getElementById("rect");
let drawCircle = document.getElementById("circle");
let erase = document.getElementById("erase");
let fillColor = document.getElementById("fill");
let fillSwitch = document.getElementById("fill-switch");
let strokeColor = document.getElementById("stroke");
let strokeSwitch = document.getElementById("stroke-switch");

//2) work on canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//3) event listener

control.addEventListener("click", controlBlock);

function controlBlock(e) {
  console.log(e.target.id);

  if (e.target.id === drawLine.id) {
    remove();
    canvas.addEventListener("mouseup", lineEnd);
    canvas.addEventListener("mousedown", lineStart);
  } else if (e.target.id === drawFreeHand.id) {
    remove();
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", continueDraw);
    canvas.addEventListener("mouseup", stopDraw);
  } else if (e.target.id === drawRect.id) {
    remove();
    canvas.addEventListener("mouseup", rectContinue);
    canvas.addEventListener("mousedown", rectStart);
  } else if (e.target.id === drawCircle.id) {
    remove();
    canvas.addEventListener("mouseup", continueCircle);
    canvas.addEventListener("mousedown", startCircle);
  } else if (e.target.id === erase.id) {
    remove();
    canvas.addEventListener("mousedown", startDelete);
    canvas.addEventListener("mousemove", continueDelete);
    canvas.addEventListener("mouseup", stopDelete);
  }
}

/////////////////////////////////fill switches//////////////////////////////

let fillSwitchFlag = false;
let strokeSwitchFlag = false;

fillSwitch.addEventListener("click", () => {
  fillSwitchFlag = fillSwitchFlag === false ? true : false;
  fillSwitch.innerHTML =
    fillSwitch.innerHTML === "Fill Off" ? "Fill On" : "Fill Off";
  console.log(fillSwitchFlag);
});

strokeSwitch.addEventListener("click", () => {
  strokeSwitchFlag = strokeSwitchFlag === false ? true : false;
  strokeSwitch.innerHTML =
    strokeSwitch.innerHTML === "Stroke Off" ? "Stroke On" : "Stroke Off";
  console.log(strokeSwitchFlag);
});

// //////////////////////////one line///////////////////////////////////////

function lineStart(e) {
  let point = { x: 0, y: 0 };
  point.x = e.offsetX;
  point.y = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}
function lineEnd(e) {
  if (strokeSwitchFlag) {
    ctx.strokeStyle = `${strokeColor.value}`;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();
  } else {
    ctx.strokeStyle = "black";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.closePath();
  }
}

// ////////////////////////////////free draw//////////////////////////////

let drawFlag = false;

function startDraw(e) {
  drawFlag = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}
function continueDraw(e) {
  if (drawFlag) {
    if (strokeSwitchFlag) {
      ctx.strokeStyle = `${strokeColor.value}`;
    }
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
}
function stopDraw() {
  drawFlag = false;
}

//////////////////////////////////////////////////Rectangle/////////////////////////

let pointsRec = { x: 0, y: 0 };

function rectStart(e) {
  pointsRec.x = e.offsetX;
  pointsRec.y = e.offsetY;
}

function rectContinue(e) {
  ctx.beginPath();

  let width = -(pointsRec.x - e.offsetX);
  let height = -(pointsRec.y - e.offsetY);

  if (fillSwitchFlag) {
    ctx.fillStyle = `${fillColor.value}`;
    ctx.fillRect(pointsRec.x, pointsRec.y, width, height);
  } else {
    ctx.strokeStyle = "black";
    ctx.rect(pointsRec.x, pointsRec.y, width, height);
    ctx.stroke();
    ctx.closePath();
  }
}

//////////////////////////////circle//////////////////////////////

let point1Circle = { x: 0, y: 0 };
let point2Circle = { x: 0, y: 0 };

function startCircle(e) {
  point1Circle.x = e.offsetX;
  point1Circle.y = e.offsetY;
}
function continueCircle(e) {
  point2Circle.x = e.offsetX;
  point2Circle.y = e.offsetY;

  let a = Math.abs(point1Circle.x - point2Circle.x);
  let b = Math.abs(point1Circle.y - point2Circle.y);

  let radius = Math.sqrt(a * a + b * b);

  ctx.beginPath();

  if (fillSwitchFlag) {
    ctx.fillStyle = `${fillColor.value}`;
    ctx.arc(point1Circle.x, point2Circle.y, radius, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.strokeStyle = "black";
    ctx.arc(point1Circle.x, point2Circle.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  // ctx.stroke();
}

//////////////////////////////erase//////////////////////////////

let drawFlagBrush = false;

function startDelete(e) {
  drawFlagBrush = true;
  // ctx.moveTo(e.offsetX, e.offsetY);
}
function continueDelete(e) {
  if (drawFlagBrush) {
    ctx.clearRect(e.offsetX, e.offsetY, 20, 20);
    // ctx.stroke();
  }
}
function stopDelete(e) {
  drawFlagBrush = false;
}

///////////////////////////////////////////////////////////////////

function remove() {
  canvas.removeEventListener("mousedown", startDelete);
  canvas.removeEventListener("mousemove", continueDelete);
  canvas.removeEventListener("mouseup", stopDelete);

  canvas.removeEventListener("mouseup", continueCircle);
  canvas.removeEventListener("mousedown", startCircle);

  canvas.removeEventListener("mouseup", rectContinue);
  canvas.removeEventListener("mousedown", rectStart);

  canvas.removeEventListener("mousedown", startDraw);
  canvas.removeEventListener("mousemove", continueDraw);
  canvas.removeEventListener("mouseup", stopDraw);

  canvas.removeEventListener("mouseup", lineEnd);
  canvas.removeEventListener("mousedown", lineStart);
}

///////////////////////////////////////////////////////////////////
