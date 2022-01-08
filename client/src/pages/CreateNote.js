import React, { useEffect, useState } from 'react';
import MainScreen from "../components/MainScreen";
import Loading from "../components/Loading";
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction } from "../actions/noteActions";
import reactMarkdown from 'react-markdown';

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const noteCreate = useSelector((state) => state.noteCreate);
    const { loading, error, note } = noteCreate;

    console.log(note);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!title || !content || !category) return;
        dispatch(createNoteAction(title, content, category));

        navigate('/notes');
        window.location.reload();
    };

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

                    <Form onSubmit={submitHandler}>
                        {error && <ErrorMessage variant="primary">{error}</ErrorMessage>}

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="formlabel">Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Grocery List"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="content">
                        <Form.Label className="formlabel">Notes</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={5}
                            placeholder="Eggs, Cheese, Milk..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>
                    {content && (
                        <Card>
                            <Card.Header>Preview</Card.Header>
                            <Card.Body>
                                <reactMarkdown>{content}</reactMarkdown>
                            </Card.Body>
                        </Card>
                    )}

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label className="formlabel">Category</Form.Label>
                        <Form.Control 
                            type="category" 
                            placeholder="Shopping" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Form.Group>

                    {loading && <Loading />}

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