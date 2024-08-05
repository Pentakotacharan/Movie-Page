import React from 'react'
import './Heading.css'

const Heading = ({subtitle,title}) => {
  return (
    <div className="heading">
        <h1>{subtitle}</h1>
        <h1>{title}</h1>
    </div>
  )
}

export default Heading