import React, { useEffect, useRef } from 'react'
import './classSquare.css'

const ClassSquare = (props) => {
  const square = useRef(null)
  useEffect(() => {
    square.current.addEventListener('mousedown', (event) => onMouseDown(event))
    square.current.addEventListener('click', (event) => props.getKeyFromChild(props.id))
    square.current.setAttribute('id', 'squareDiv' + props.id)
  })

  function onMouseDown (event) {
    const element = square.current

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    let previousX = event.clientX
    let previousY = event.clientY

    /**
     * Handles the mouse movement.
     *
     * @param {string} event - The event
     */
    function onMouseMove (event) {
      const newPosX = previousX - event.clientX
      const newPosY = previousY - event.clientY

      element.style.left = element.offsetLeft - newPosX + 'px'
      element.style.top = element.offsetTop - newPosY + 'px'

      // Stops the window to the left.
      if (parseInt(element.style.left.slice(0, 4)) <= -600) {
        element.style.left = element.offsetLeft + newPosX + 'px'
      }
      // Stops the window at the top.
      if (parseInt(element.style.top.slice(0, 4)) <= -15) {
        element.style.top = element.offsetTop + newPosY + 'px'
      }
      // Stops the window at the bottom.
      if (parseInt(element.style.top.slice(0, 4)) >= 800) {
        element.style.top = element.offsetTop - newPosX + 'px'
      }
      // Stops the window to the right.
      if (parseInt(element.style.left.slice(0, 4)) >= 1200) {
        element.style.left = element.offsetLeft + newPosX + 'px'
      }

      previousX = event.clientX
      previousY = event.clientY
    }

    /**
     * Removes the event listeners when the mouse is up.
     */
    function onMouseUp () {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }

  
  return (
    <div className="classcontainerdiv" ref={square} style={{zIndex: '5'}}>
        <div className="nameOfClass"></div>
        <div className="classAttributes"></div>
        <div className="classMethods"></div>
    </div>
  )
}

export default ClassSquare