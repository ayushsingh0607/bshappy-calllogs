import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import calling from '../../assets/calling.jpg'
import next from '../../assets/next.png'
import './home.css'
import Stats from '../../components/stats/Stats'
import Chat from '../../components/chat/Chat'

const Home = () => {

  const [change, setChange] = useState(false)
  const [speed, setSpeed] = useState("1x")

  return (
    <>
      <Navbar />
      <Header />
      <div className='homeWrapper'>
        <Stats />
        <div className="image">
          <img src={calling} alt="" />
        </div>
        <Chat />
      </div>
      <div className="twoicons">
        <div className="first">
          <img src={next} alt="" style={{ width: "24px", height: "24px" }} />
        </div>
        <div className="second">
          <img src="https://img.icons8.com/external-simple-solid-edt.graphics/24/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png" alt="" />
        </div>
      </div>
      <div className="recording">
        <div className="part1">
          <img src="https://img.icons8.com/color/30/000000/video-call--v1.png" alt="video" />
          <p>Client video call recording</p>
        </div>
        <div className='divider'></div>
        <div className="part2">
          <div className="upper">
            <div className='button'>
              <p>Video</p>
            </div>
            <div className="controllers">
              <img src="https://img.icons8.com/external-inkubators-glyph-inkubators/20/ffffff/external-previous-video-interface-inkubators-glyph-inkubators.png" alt="previous" className='previous' />
              <img src="https://img.icons8.com/ios/40/ffffff/play-button-circled--v1.png" alt="play" className='play' />
              <img src="https://img.icons8.com/ios-filled/24/ffffff/end--v1.png" alt="next" className='next' />
            </div>
            <div className='button'>
              <p>Transcript</p>
            </div>
          </div>
          <div className="lower">
            <div className="current">00:00</div>
            <div className="length"></div>
            <div className="total">00:00</div>
          </div>
        </div>
        <div className='divider'></div>
        <div className="part3">
          <div className='head'>Speed</div>
          <div className="ok">
            {change &&
              <>
                <div className="options">
                  <div className="option" onClick={()=>{setSpeed("0.5x"); setChange(!change)}}>0.5x</div>
                  <div className="option" onClick={()=>{setSpeed("1x"); setChange(!change)}}>1.0x</div>
                  <div className="option" onClick={()=>{setSpeed("1.5x"); setChange(!change)}}>1.5x</div>
                  <div className="option" onClick={()=>{setSpeed("2x"); setChange(!change)}}>2x</div>
                </div>
              </>
            }
            <div className="speed" onClick={(e) => setChange(!change)}>
              <div className='option1'>{speed}</div>
              <img src="https://img.icons8.com/material/24/ffffff/sort-down--v1.png" alt="speed" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home