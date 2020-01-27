import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';

function AboutPage(props) {

    return(
        <div className = 'about-me'>
            <h6>About Me</h6>
            <hr style={{bordertop: '3px solid #e22947'}} />

            <Content>
            <p>Hello, my name is Bopanna. I'm a Computer Science Engineer with experience in Javascript, React, C/C++, Python, SQL, Swift and Java.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with  React, Machine learning, Angular, Mongo DB.</p>

            <p class="content-p">I love to build Apps and hopefully be a great developer one day.</p>

            </Content>
            <Footer />
        </div>     
    );

}

export default AboutPage;