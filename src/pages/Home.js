import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <h1 className='home__title'>
          Turn your <span className='home__title--gym'>GYM</span> <br />
          into a<br /> <span className='home__title--hero'>HERO FACTORY</span>
        </h1>
        <p className='home__content'>
          My money's in that office, right? If she start giving me some bullshit
          about it ain't there, and we got to go someplace else and get it, I'm
          gonna shoot you in the head then and there. Then I'm gonna shoot that
          bitch in the kneecaps, find out where my goddamn money is. She gonna
          tell me too.
        </p>
      </div>

      <button className='home__button'>LIVE DEMO</button>
    </div>
  )
}

export default Home
