import React from 'react';

import CardInfo from '../components/CardInfo';


const card = (props) => {

    return(
        
   
          <div class="card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
           
                <h4><b>Medical Store Management System</b></h4>
                    <p>Database Project is designed to focus on the medical store to help them in their billing management with taking care of other details like stock, staff, medicines and bills.</p>
               
            </div>
            <div class="flip-card-back">
              <div class='git'>
              <button class='git-button' type="button" color='white'>
                        <a href="https://github.com/dilanbopanna/dilanbops">GitHub</a>
                        </button>
              </div>

            </div>
          </div>

        </div>
        
        );

}

export default card;