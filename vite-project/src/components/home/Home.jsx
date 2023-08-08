import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
    <div class="content">
        <span class="hi">Hi there...</span>
        <h3 class="hello">My name is <span>Michelle Goba</span></h3>
        <h3 class="my-profession">I'm a <span class="typing">Web Developer</span></h3>
        <p class="text">I put into practice the front-end logic that controls how web applications' visual components behave. My expertise is to create website designs, applications and many more...</p>
        <a href="#about"class="btn">More about Me</a>
      </div>

      <div className='image'>
        <img src=''></img>

      </div>
  
  </section>
  )
}

export default Home