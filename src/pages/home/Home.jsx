import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from '../../data'
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The bet for every budget
            </div>
            <p>
              Find high quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The bet for every budget
            </div>
            <p>
              Find high quality services at every price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The bet for every budget
            </div>
            <p>
              Find high quality services at every price point.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home