const line = document.getElementById("line");
const circle = document.getElementById("circle");
const rect = document.getElementById("rect");

const svg = document.getElementById("svg");
const g = document.getElementById("g");

// variable for the namespace
const svgNameSpace = "http://www.w3.org/2000/svg";

line.addEventListener("click", drawLine);
circle.addEventListener("click", drawCircle);
rect.addEventListener("click", drawRect);

function drawRect() {
  let newRect = document.createElementNS(svgNameSpace, "rect");
  newRect.setAttribute("x", "150");
  newRect.setAttribute("y", "150");
  newRect.setAttribute("width", "100");
  newRect.setAttribute("height", "100");
  newRect.setAttribute("fill", "#5cceee");

  // append the new rectangle to the svg
  svg.appendChild(newRect);
}

function drawCircle() {
  const newCircle = document.createElementNS(svgNameSpace, "circle");
  newCircle.setAttribute("cx", "50");
  newCircle.setAttribute("cy", "50");
  newCircle.setAttribute("r", "40");
  newCircle.setAttribute("stroke", "black");
  newCircle.setAttribute("stroke-width", "3");
  newCircle.setAttribute("fill", "red");

  // append the new circle to the svg
  svg.appendChild(newCircle);
}

function drawLine() {
  const newLine = document.createElementNS(svgNameSpace, "path");
  newLine.setAttribute("stroke-width", "2");
  newLine.setAttribute("d", "M250 100 L300 200");

  // append the new circle to the svg
  g.appendChild(newLine);
}
