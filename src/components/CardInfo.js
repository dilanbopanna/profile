import React from 'react';

const cardInfo = (props) => {


    return(
        <div className="g-card-info" >
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );

}

export default cardInfo;