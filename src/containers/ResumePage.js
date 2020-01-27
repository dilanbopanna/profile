import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from '../components/Education';
import MyCV from '../components/MyCV.pdf';
import Footer from '../components/Footer';

class ResumePage extends React.Component {
  render() {
    return(
      <div class='resume-tg'>
          
          <h8>Resume</h8>
          <hr style={{bordertop: '3px solid #e22947'}} />
      
            <div style={{width:"800px"}}>
            <div style={{width:"500px"} ,{float:"left"}}>
                <div class="education-content"><h2>Education</h2>
                <Education 
                startYear={2011}
                endYear={2015}
                schoolName="Bharathiya Vidya Bhavan Kodagu Vidyalaya"
                schoolDescription="Studied my High school here,located in Madikeri.(CBSE Board)"
                />
                <hr style={{bordertop: '3px solid #e22947'}} />
                <Education 
                startYear={2015}
                endYear={2017}
                schoolName="Deeksha PU College"
                schoolDescription="Did my 11th & 12th here,located in Mysore.(State Board)"
      />
                <hr style={{bordertop: '3px solid #e22947'}} />
                <Education 
                startYear={2017}
                schoolName="Vidhyavardaka College of Engineering"
                schoolDescription="Studying computer science engineering in this college,located in mysore.(VTU)"
                />
               
            </div>
        
            <hr style={{bordertop: '3px solid #e22947'}} />
            <div class="container">
            <h2>Skills</h2>
            <p>Problem Solving</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                <span class="sr-only">80% Complete</span>
                </div>
            </div>
            <p>Coding</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}>
                <span class="sr-only">75% Complete</span>
                </div>
            </div>
            <p>Creativity</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                <span class="sr-only">90% Complete</span>
            </div>
            </div>
            <p>Adaptive Thinking</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}>
                <span class="sr-only">85% Complete</span>
                </div>
                
            </div>
            
            <hr style={{bordertop: '3px solid #e22947'}} />
            
        </div>
       
    </div>
    
    
      
        <div class= 'download-pdf' style={{width:"300px"},{ float:"right"}}>
       
        <a href="MyCV" download="MyCV.pdf"> 
                <button type="button">Download CV</button> 
        </a>

    </div>
   
</div>
</div>

    )
  }
}

export default ResumePage;