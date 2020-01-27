import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    render() {
        return(
            
            <Grid class='contact-tg'>
                <h7>Contact</h7>
                <hr style={{bordertop: '3px solid #e22947'}} />
                <Cell>
                    <div className = 'mail'>
                    <h5><b>Let's Talk</b></h5>

                <Content>
                    <Form >
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <button class='sendbutton' type="button">
                        <a class= 'mailto' href="mailto:bopannamj@gmail.com">Send</a>
                        </button>
                    </Form>
                </Content>
                    </div>
                </Cell>
                <Cell col={5}>
                <div className = 'phone'>
                    <h2>Contact Me</h2>
                    <div className="contact-list">
                <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '30px'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +91 8105528922
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: '30px'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    bopannamj@gmail.com
                    </ListItemContent>
                <ListItem>
                    <ListItemContent style={{fontSize: '30px'}}>
                    <i class="fa fa-home" aria-hidden="true"></i>
                     'Yashasvi'Chamaraj villa,
                      Dechur, Madikeri, Karnataka
                    </ListItemContent>
                </ListItem>
                </ListItem>
        </List>
        </div>
        </div>
            </Cell>
            <Footer />
            </Grid>
        );
    }

}

export default ContactPage;