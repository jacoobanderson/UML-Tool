import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import './canvas.css'
import ClassSquare from './classSquare.js'
import Arrow from './arrow.js'
import SideNav from './sideNav.js'

const Canvas = () => {

  const [squareList, setSquareList] = useState([])
  const [arrowList, setArrowList] = useState([])
  const [compareKey, setCompareKey] = useState([])
  const [margin, setMargin] = useState('5%')

  function setMarginSideBar(margins){
    setMargin(margins)
  }

const selectBoxes = () => {
    const squareOne = document.querySelector(`#squareDiv${compareKey[compareKey.length - 2]}`)
    const squareTwo = document.querySelector(`#squareDiv${compareKey[compareKey.length - 1]}`)
    setArrowList(arrowList.concat(<Arrow divA={squareOne} divB={squareTwo} key={arrowList.length} id={arrowList.length} />));
    setCompareKey([])
  }

const getKeyFromChild = (key) => {
  setCompareKey(compareKey => [...compareKey, key])
}

const onAddBtnClick = () => {
  setSquareList(squareList.concat(<ClassSquare key={squareList.length} id={squareList.length} getKeyFromChild={getKeyFromChild} />));
}

  return (
    <div className="mainContainer">
      <SideNav setMargin={setMarginSideBar}/>
      <div className="container" style={{marginLeft: margin}}>
        <button onClick={onAddBtnClick}>Add box</button>
        <button onClick={selectBoxes}>Add arrow between boxes</button>
          {squareList}
          {arrowList}
      </div>
    </div>
  )
  }

export default Canvas