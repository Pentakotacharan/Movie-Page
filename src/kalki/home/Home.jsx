import React from 'react'
import './Home.css'
import title_ from "../../kalki/images/title_.webp";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <nav className="cha">
        <img src={title_} alt="" className="im"/>
        <ul>
            <li><Link to='back' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to='maincharacter' smooth={true} offset={-200} duration={500}>MainCharacters</Link></li>
            <li><Link to='review' smooth={true} offset={-200} duration={500}>Review</Link></li>
            <li><Link to='booktickets' smooth={true} offset={0} duration={500}>Book tickets</Link></li>
        </ul>
    </nav>
  )
}

export default Home