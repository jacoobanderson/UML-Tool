import React from 'react'
import './canvas.css'
import ClassSquare from './classSquare.js'

const Canvas = () => {
document.addEventListener('DOMContentLoaded', function() {
var divA       = document.querySelector("#a");
var divB       = document.querySelector("#b");
var arrow  = document.querySelector("#arrow");

var drawConnector = function() {
  var posnALeft = {
    x: divA.offsetLeft - 8,
    y: divA.offsetTop  + divA.offsetHeight / 2
  };
  var posnARight = {
    x: divA.offsetLeft + divA.offsetWidth / 2,
    y: divA.offsetTop + divA.offsetHeight + 10
  };
  var posnBLeft = {
    x: divB.offsetLeft - 8,
    y: divB.offsetTop + divB.offsetHeight / 2
  };
  var posnBRight = {
    x: divB.offsetLeft + divB.offsetWidth / 2,
    y: divB.offsetTop - divB.offsetHeight + 40
  };

var dStrRight =
  "M" +
  (posnBRight.x) + "," + (posnBRight.y) + " " +
  "C" +
  (posnBRight.x) + "," + (posnBRight.y) + " " +
  (posnARight.x) + "," + (posnARight.y) + " " +
  (posnARight.x) + "," + (posnARight.y);
arrow.setAttribute("d", dStrRight);
};

drawConnector()
})


  return (
    <div className="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="3" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
        </defs>
        <g fill="none" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)">
            <path id="arrow"/>
        </g>
        </svg>
        <div id="a">Div 1</div>
        <div id="b">Div 2</div>
        <ClassSquare />
    </div>
  )
}

export default Canvas