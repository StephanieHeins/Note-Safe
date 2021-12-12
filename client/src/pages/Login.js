import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import MainScreen from '../components/MainScreen';
import './Styles/Login.css';

const Login = () => {
    return (
        <div>
            <MainScreen title="Login">
            <Container>
                <Row>
                <Col></Col>
                <Col xs={6}>
                <Form>
                    <Form.Group className="my-3" controlId="formBasicEmail">
                        <Form.Label className="formlabel">Email</Form.Label>
                        <Form.Control type="email" placeholder="john@example.com" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="formlabel">Password</Form.Label>
                        <Form.Control type="password" placeholder="P@ssw0Rd" />
                    </Form.Group>

                    <Row className="text-center">
                        <Col>
                            <Button>
                                Login
                            </Button> 
                        </Col>
                    </Row>

                    <div className="my-3 text-center">
                        Don't have an account? {' '}
                        <a href="/Register">
                        Signup here!
                        </a>
                    </div>

                </Form>
                </Col>
                <Col></Col>
                </Row>
            </Container>
            </MainScreen>
        </div>
    )
}

export default Login
