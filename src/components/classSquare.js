import React, { useEffect } from 'react'
import './classSquare.css'

const ClassSquare = () => {
  useEffect(() => {
    document.querySelector('.classcontainerdiv').addEventListener('mousedown', (event) => onMouseDown(event))
  })

  function onMouseDown (event) {
    const element = document.querySelector('.classcontainerdiv')

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
    <div className="classcontainerdiv">
        <div className="nameOfClass"></div>
        <div className="classAttributes"></div>
        <div className="classMethods"></div>
    </div>
  )
}

export default ClassSquare