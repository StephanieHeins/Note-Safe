import React from 'react'
import './Styles/Notes.css'
import MainScreen from '../components/MainScreen'
import { Link } from 'react-router-dom';
import { Button, Row, Card, Col } from 'react-bootstrap';

const Notes = () => {
    return (
        <MainScreen title="Welcome User">
            <Row className="text-center">
                <Link to="/CreateNote">
                    <Button className="">
                        New Note
                    </Button>
                </Link>
            </Row>
            <Row>
                <Card className="my-4">
                    <Card.Header>
                        <Row>
                        <Col id="notetitle">
                            Title
                        </Col>
                        <Col className="text-end mt-2">
                            Category
                        </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Note content...
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="primary">Edit</Button>
                                <Button variant="primary" className="mx-3">Delete</Button>
                            </Col>
                            <Col className="mt-3">
                                <Card.Text className="text-end" id="notedate">
                                    Written on 12-12-2021
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </MainScreen>
    )
}

export default Notes
