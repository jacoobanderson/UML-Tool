import React, { useState } from 'react'
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
        setStyling('openSideNav')
        return (
            <button onClick={closeNav}>Close</button>
        )
    }

    function ClosedNavElement () {
        setStyling('closeSideNav')
        return (
            <button onClick={openNav}>Open</button>
        )
    }
  return (
    <div className={styling}>{open ? <OpenNavElement className="closeSideNav"/> : <ClosedNavElement />}</div>
  )
}

export default SideNav