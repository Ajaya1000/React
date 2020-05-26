import React, { Component } from 'react';
import { FormGroup, Label, Col, Input, Button, Row } from 'reactstrap';
import {LocalForm, Control} from 'react-redux-form';
class Contact extends Component {
   
    handleSubmit(values){
        console.log("The current State is " + JSON.stringify(values));
        alert("The current State is " + JSON.stringify(values));
       
    }
    render(){
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>

                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="https://www.skype.com/en/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>
                            Send us Your feedback
                        </h3>
                    </div>
                    <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                               <Row className='form-group'>
                                    <Label htmlFor='firstname' md={2} > First Name</Label>
                                    <Col md={10}>
                                        <Control.text model='.firstname'
                                        className='form-control'
                                         id='firstname' name='firstname' 
                                        placeholder='first name'  />
                                    </Col>
                            </Row>
                            <Row className='form-group'>
                                    <Label htmlFor='laststname' md={2} > Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model='.lastname' id='lastname' name='lastname'
                                        className='form-control'
                                        placeholder='last name'  />
                                    </Col>
                            </Row>
                            <Row className='form-group'>
                                    <Label htmlFor='email' md={2} > Email address</Label>
                                    <Col md={10}>
                                        <Control.text model='.email' id='email' name='email'
                                            placeholder='email'  />
                                    </Col>
                             
                            </Row>
                            <Row className='form-group'>
                                    <Col md={{size:6, offset:2}}>
                                        <div className='form-check'>
                                            <Label check>
                                                <Control.checkbox model='.agree' name='agree'
                                                className='form-check-input'
                                                 /> {''}
                                                <strong>May we contact you ?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size: 3, offset : 1}}>
                                        <Control.select model='.contactType' className='form-control' name='contactType' 
                                         >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                            </Row>
                            <Row className='form-group'>
                                    <Label md={2} htmlFor='message'>Your Feedback</Label>
                                    <Col md={10} >
                                        <Control.textarea model='.message' className='form-control' id='message' name='message' 
                                        rows='12' />
                                    </Col>
                            </Row>
                            <Row className='form-group'>
                                    <Col md={{size:10, offset:2}}>
                                        <Button type='submit' color='primary'>
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;