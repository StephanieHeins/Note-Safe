import React, { useEffect, useState } from 'react';
import MainScreen from "../components/MainScreen";
import Loading from "../components/Loading";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction } from "../actions/noteActions";
import ErrorMessage from '../components/ErrorMessage';
import reactMarkdown from 'react-markdown';

const CreateNote = () => {
    return (
        <div>
            <MainScreen title="New Note">
            <Container>
                {/* {error && <ErrorMessage variant="primary">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="primary">{message}</ErrorMessage>}
                {loading && <Loading />} */}
                <Row>
                <Col></Col>
                <Col xs={6}>

                    <Form>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="formlabel">Title</Form.Label>
                        <Form.Control 
                            type="input" 
                            placeholder="Grocery List"
                            // value={title}
                            // onChange={(e) => setName(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="content">
                        <Form.Label className="formlabel">Notes</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows="5"
                            // type="" 
                            placeholder="Eggs, Cheese, Milk..."
                            // value={content}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label className="formlabel">Category</Form.Label>
                        <Form.Control 
                            type="input" 
                            placeholder="Shopping" 
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Row className="text-center mb-3">
                        <Col>
                            <Button type="submit">
                                Create!
                            </Button> 
                        </Col>
                    </Row>

                </Form>
                </Col>
                <Col></Col>
                </Row>
            </Container>
            </MainScreen>
        </div>
    )
}

export default CreateNote