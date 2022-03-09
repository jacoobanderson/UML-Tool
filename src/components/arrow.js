import React, { useEffect } from 'react'

const Arrow = (props) => {
    function drawArrow () {

        var arrow  = document.querySelector(`#arrow${props.id}`);
        var svg  = document.querySelector(`#svg${props.id}`);
        
        var drawConnector = function() {
          var posnALeft = {
            x: props.divA.offsetLeft - 8,
            y: props.divA.offsetTop  + props.divA.offsetHeight / 2
          };
          var posnARight = {
            x: props.divA.offsetLeft + props.divA.offsetWidth / 2,
            y: props.divA.offsetTop + props.divA.offsetHeight + 10
          };
          var posnBLeft = {
            x: props.divB.offsetLeft - 8,
            y: props.divB.offsetTop + props.divB.offsetHeight / 2
          };
          var posnBRight = {
            x: props.divB.offsetLeft + props.divB.offsetWidth / 2,
            y: props.divB.offsetTop - props.divB.offsetHeight + 80
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
        useEffect(() => {
            drawArrow()
        })
  return (
    <div>
        <svg id={'svg' + props.id} style={{position: 'absolute', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="3" refY="5"
                markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
        </defs>
        <g fill="none" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" style={{display: 'block'}}>
            <path id={'arrow' + props.id}/>
        </g>
        </svg>
    </div>
  )
}

export default Arrow