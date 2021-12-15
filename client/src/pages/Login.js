import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import MainScreen from '../components/MainScreen';
import './Styles/Login.css';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Login = () => {

    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

            useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo){
            navigate('/notes');
        }
    }, [userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault()

        dispatch(login(email, password))
        
    };

    return (
        <div>
            <MainScreen title="Login">
                {error && <ErrorMessage variant="primary">{error}</ErrorMessage>}
                {loading && <Loading />}
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
