import React, { useEffect, useState } from 'react'
import './canvas.css'
import ClassSquare from './classSquare.js'

const Canvas = () => {

  const [squareList, setSquareList] = useState([])
  const [childKey, setChildKey] = useState(null)
  const [childKeyCompareOne, setChildCompareKeyOne] = useState(null)
  const [childKeyCompareTwo, setChildCompareKeyTwo] = useState(null)
  const [compare, setCompare] = useState(null)

const selectBoxes = () => {
    const squareOne = document.querySelector(`#squareDiv0`)
    const squareTwo = document.querySelector(`#squareDiv1`)
    drawArrow(squareOne, squareTwo)
  }

const getKeyFromChild = (key) => {
  setChildKey(key)
  if (compare === true) {
    if (childKeyCompareOne !== key) {
      setChildCompareKeyOne(key)
    } else {
      setChildCompareKeyTwo(key)
    }
  }
}

const onAddBtnClick = () => {
  setSquareList(squareList.concat(<ClassSquare key={squareList.length} id={squareList.length} getKeyFromChild={getKeyFromChild} />));
  console.log(childKey)
}

const drawArrow = (divA, divB) => {

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
}


  return (
    <div className="container">
      <button onClick={onAddBtnClick}>Add box</button>
      <button onClick={selectBoxes}>Add arrow between boxes</button>
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
        {squareList}
    </div>
  )
  }

export default Canvas