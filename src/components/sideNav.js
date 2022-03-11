import React, { useEffect, useState } from 'react'
import './sideNav.css'

const SideNav = (props) => {
    const [open, setOpen] = useState(false)
    const [styling, setStyling] = useState('closeSideNav')

    function openNav () {
        props.setMargin('25%')
        setOpen(true)
    }

    function closeNav () {
        props.setMargin('5%')
        setOpen(false)
    }

    function OpenNavElement () {
        useEffect(() => {
            setStyling('openSideNav')
        })
        return (
            <div className="sideBarItemsOpen">
                <button onClick={closeNav}>Close</button>
                <button onClick={props.addClassBox}>Add class</button>
                <button onClick={props.drawArrow}>Draw arrow</button>
            </div>
        )
    }

    function ClosedNavElement () {
        useEffect(() => {
            setStyling('closeSideNav')
        })
        return (
            <div className="sideBarItems" onClick={openNav}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-chevron-double-right" viewBox="0 0 16 25">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        )
    }
  return (
    <div className={styling}>{open ? <OpenNavElement /> : <ClosedNavElement />}</div>
  )
}

export default SideNav