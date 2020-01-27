import React from 'react';

import Hero from '../components/Hero';
import CardDesc from '../components/CardDesc';
import Footer from '../components/Footer';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <div class='info' >
                <p>Hi! I am a Software Engineer based in Mysore,
                     BE specialzing in developing
                    and designing high quality websites and applications.
                     Currently working in 
                    <a href="https://www.betaflux.co/" target="_blank"> Betaflux</a> as an Intern.
                </p>
            </div>
            <CardDesc />
            <Footer />
        </div>
    );

}

export default HomePage;