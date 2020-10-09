import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';


class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fisrtName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            address: this.props.user.address,
            city: this.props.user.city,
            description: this.props.user.description,
        };

    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
        }, () => console.log(this.state.description));
    }




    handleEdit = (e) => {
    e.preventDefault();
    const data = {
        id:  new Date().getTime(),
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        editing: false,
        description: this.state.description,
        address: this.state.address,
        city: this.state.city
    }
    console.log(data)
    this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    this.setState({
        firstName: '',
        lastName: '',
        description: '',
        address: '',
        city: ''
      });
    }
    
    render() {
        return (
            <div key={this.props.user.id} className="user">
                {/* <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                    defaultValue={this.props.user.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                    defaultValue={this.props.user.description} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form> */}
                <Form className='mt-3' onSubmit={this.handleEdit}>
                <Form.Row>
                        <Col>
                        <Form.Control type="email" disabled placeholder="Your Email" name='email' defaultValue={this.props.user.email} onChange={this.handleChange} />
                        </Col>
                        <Col>
                        <Form.Control type='password' required placeholder="Password" disabled name='pass' onChange={this.handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='mt-3'>
                        <Col>
                        <Form.Control placeholder="First name" required name='firstName' defaultValue={this.props.user.firstName} onChange={this.handleChange} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" defaultValue={this.props.user.lastName} required name='lastName' onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row className='mt-3'>
                        <Col>
                        <Form.Control placeholder="Address" defaultValue={this.props.user.address} name='address' onChange={this.handleChange} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="City" defaultValue={this.props.user.city} name='city' onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Group className='mt-3'>
                        <Form.Control placeholder="Description"  defaultValue={this.props.user.description} as="textarea" rows="3" name='description' onChange={this.handleChange} />
                    </Form.Group>
                    <Button className='mt-3' variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
            </div>
        );
    }
    }
    
export default connect()(EditComponent);
