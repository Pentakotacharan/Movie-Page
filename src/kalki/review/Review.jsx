import React from 'react'
import './Review.css'
import Reactplayer from 'react-player'

const Review = () => {
  return (
    <div className="review">
        <Reactplayer controls url="https://youtu.be/494O0JdXB-4?si=zIA2O1CoxvB5Kpxe" className="rev"/>
         <div className="review-right"><h1>Review</h1>
         <p>'Prabhas' latest film, "Kalki," is nothing short of a cinematic marvel that transcends the boundaries of conventional storytelling. This epic saga, directed by the visionary filmmaker Nag Ashwin, masterfully blends mythology, action, and drama to create a mesmerizing experience for audiences.
         </p>
         <p>From the moment the film begins, it captivates with its stunning visuals and intricate set designs, transporting viewers into a world where ancient legends and modern aesthetics seamlessly converge. The attention to detail in the production design is commendable, showcasing the meticulous efforts of the entire creative team.
         </p>
         <p>Prabhas, in the titular role of Kalki, delivers a performance that is both powerful and nuanced. His portrayal of the mythological hero is imbued with a sense of grandeur and gravitas that makes every scene he is in truly unforgettable. The physical transformation he underwent for the role is remarkable, adding a layer of authenticity to his character.</p>
         </div>
    </div>
  )
}

export default Review