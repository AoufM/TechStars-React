import React from 'react';
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, 
  AiFillAmazonCircle, 
  AiFillYoutube,
  AiFillInstagram,} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems.</p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />

    <div>
        <p>
            We are your one and only solution to tech problems you face every day.
            We are leading tech company whose aim is to increase the problems solving ability in children
        </p>
    </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sunt, consectetur numquam laborum explicabo sit error ea porro dolor illum veritatis nemo ex perspiciatis corrupti quis minus labore non optio dolore quos. Reprehenderit doloremque, consequatur iusto architecto quaerat deserunt omnis molestias itaque, eius maxime quasi officiis temporibus expedita incidunt ducimus ipsam aliquid beatae placeat et!</p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>

          <div style={{
            animationDelay:"1s"
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
