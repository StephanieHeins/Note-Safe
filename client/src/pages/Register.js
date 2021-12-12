import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import MainScreen from '../components/MainScreen';
import './Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';

const Register = () => {

    const [email, setEmail] =  useState("");
    const [name, setName] =  useState("");
    const [pic, setPic] =  useState(
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [picMessage, setPicMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.')
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };

                setLoading(true);
                const { data } = await axios.post(
                    "/api/users",
                    { name, pic, email, password },
                    config
                );

                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));

            } catch (error) {
                setError(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo){
            navigate('/notes');
        }
    })

    return (
        <div>
            <MainScreen title="Signup">
            <Container>
                {error && <ErrorMessage variant="primary">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="primary">{message}</ErrorMessage>}
                {loading && <Loading />}
                <Row>
                <Col></Col>
                <Col xs={6}>
                    <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="formlabel">Name</Form.Label>
                        <Form.Control 
                            type="input" 
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="email">
                        <Form.Label className="formlabel">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="formlabel">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="P@ssw0Rd" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label className="formlabel">Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="P@ssw0Rd" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="pic" className="mb-3">
                        <Form.Label className="formlabel">Profile Picture</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Row className="text-center">
                        <Col>
                            <Button type="submit">
                                Signup
                            </Button> 
                        </Col>
                    </Row>

                    <div className="my-3 text-center">
                        Already have an account? {' '}
                        <a href="/Login">
                        Login here!
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

export default Register
