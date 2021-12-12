import React, { useState, useEffect } from 'react';
import './Styles/Landing.css'
import { Container, Row, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Landing = ({history}) => {

    return (
        <div>
            <div className="main">
                <Container>
                    <Row className="text-center">
                        <div>
                            <h1>
                                Welcome to NoteSafe
                            </h1>
                            <h3>
                                A place to keep your notes 
                                safe, organized, and accessible
                            </h3>
                        </div>
                        <div className="my-3">
                            <a href="/login" >
                                <Button className="mx-3 btn-lg">
                                    Login
                                </Button>
                            </a>
                            <a href="/register" >
                                <Button className="mx-3 btn-lg">
                                    Signup
                                </Button>
                            </a>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Landing
