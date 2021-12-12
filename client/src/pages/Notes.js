import React from 'react'
import './Styles/Notes.css'
import MainScreen from '../components/MainScreen'
import { Link } from 'react-router-dom';
import { Button, Row, Card, Col } from 'react-bootstrap';
import noteinfo, {} from '../data/noteinfo';

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
            {noteinfo.map((note) => (   

                <Card className="my-4">
                    <Card.Header>
                        <Row>
                        <Col id="notetitle">
                            {note.title}
                        </Col>
                        <Col className="text-end mt-2">
                            {note.category}
                        </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {note.content}
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="primary" className="me-3 mt-1">Edit</Button>
                                <Button variant="primary" className="mt-1">Delete</Button>
                            </Col>
                            <Col className="mt-3">
                                <Card.Text className="text-end mt-1" id="notedate">
                                    Written on 12-12-2021
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>


            ))}
                </Row>
        </MainScreen>
    )
}

export default Notes
