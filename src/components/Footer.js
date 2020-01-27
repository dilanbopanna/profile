import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const footer = () => {

    return(
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Follow me 
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <div className="social-links">

                        <a href="https://www.linkedin.com/in/bopannamj4a7a7/" rel="noopener noreferer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="https://github.com/dilanbopanna" rel="noopener noreferer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default footer;