import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const content = (props) => {

    return(
        <Container>
            <Row className="contentsection">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default content;