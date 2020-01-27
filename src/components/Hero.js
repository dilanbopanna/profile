import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const hero = (props) => {

    return(
        <Jumbotron className="jumbotron-fluid">
            <Container fluid={true}>
                <Row className="justify-content-center ">
                    <Col class="hero-title" md={8} sm={12}>
                    <img 
                    src="https://1.bp.blogspot.com/-eRiza3-A0AQ/XhL9JdmzjhI/AAAAAAAANk0/TqHThCcb25oCU4TAaEIcUpVU6pD9H8WZwCLcBGAsYHQ/s1600/imgonline-com-ua-shape-irhzCGYqv8Y.png"
                    alt="avatar"
                    className="avatar"/>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default hero;