import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            pass: '',
            fisrtName: '',
            lastName: '',
            address: '',
            city:'',
            description: '',
        };

    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id:  new Date().getTime(),
            email: this.state.email,
            pass: this.state.pass,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            editing: false,
            description: this.state.description,
            address: this.state.address,
            city: this.state.city
        }
        this.props.dispatch({
            type: 'REGISTER',
            data
        })
        this.setState({
            email: '',
            pass: '',
            firstName: '',
            lastName: '',
            description: '',
            address: '',
            city: ''
          });
          
    }
render() {
    return (
        <div className="user-container">
            <h1 className="user_heading">Register as a new user :)</h1>
            {/* <form className="form" onSubmit={this.handleSubmit} >
                <input required type="text" name='title' onChange={this.handleChange} 
                placeholder="Enter user Title" /><br /><br />
                <input type='text' name='description' onChange={this.handleChange} placeholder='Enter Description' /> <br /><br />
                <textarea required rows="5" name='message' onChange={this.handleChange}
                cols="28" placeholder="Enter user" /><br /><br />
                <button>Register</button>
            </form> */}
            <Form className='mt-3' onSubmit={this.handleSubmit}>
            <Form.Row>
                    <Col>
                    <Form.Control type="email" required placeholder="Your Email" name='email' onChange={this.handleChange} />
                    </Col>
                    <Col>
                    <Form.Control type='password' required placeholder="Password" name='pass' onChange={this.handleChange} />
                    </Col>
                </Form.Row>
                <Form.Row className='mt-3'>
                    <Col>
                    <Form.Control placeholder="First name" required name='firstName' onChange={this.handleChange} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" required name='lastName' onChange={this.handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Row className='mt-3'>
                    <Col>
                    <Form.Control placeholder="Address"  name='address' onChange={this.handleChange} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="City"  name='city' onChange={this.handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Group className='mt-3'>
                    <Form.Control placeholder="Description" as="textarea" rows="3" name='description' onChange={this.handleChange} />
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    );
}
}
export default connect()(UserForm);