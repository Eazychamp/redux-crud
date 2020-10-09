import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row, Button } from 'react-bootstrap';



class User extends Component {
    render() {
        return (
            <div className="user">
                <Container>
                    <Row>
                        <Col className='d-flex'>Name-<h4>{this.props.user.firstName} {' '}{this.props.user.lastName}</h4></Col>
                        <Col className='d-flex'>Email-<h4>{this.props.user.email}</h4></Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>Address-<h4>{this.props.user.address}</h4></Col>
                    </Row>
                    <Row>
                        <Col className='d-flex'>City-<h4>{this.props.user.city}</h4></Col>
                    </Row>
                    <Row>
                        <Col className='d-flex '>Description-<h4>{this.props.user.description}</h4></Col>
                    </Row>
                </Container>
                <Button variant="primary" 
                     onClick={() => this.props.dispatch({ type: 'EDIT_USER', id: this.props.user.id })}>
                         Edit</Button>
                <Button variant="danger" onClick={() => this.props.dispatch({ type: 'DELETE_USER', id: this.props.user.id })}>
                        Delete</Button>
            </div>
        );
    }
}


export default connect()(User);