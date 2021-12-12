import React, { useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import MainScreen from '../components/MainScreen';
import './Styles/Login.css';

const Login = () => {

    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password);
    };

    return (
        <div>
            <MainScreen title="Login">
            <Container>
                <Row>
                <Col></Col>
                <Col xs={6}>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="my-3" controlId="formBasicEmail">
                        <Form.Label className="formlabel">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email}
                            placeholder="john@example.com" 
                            onChange={(e) => setEmail (e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="formlabel">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password}
                            placeholder="P@ssw0Rd" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Row className="text-center">
                        <Col>
                            <Button type="submit">
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
