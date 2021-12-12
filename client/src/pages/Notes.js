import React, { useEffect } from 'react';
import axios from 'axios';
import './Styles/Notes.css';
import MainScreen from '../components/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Row, Card, Col, Accordion } from 'react-bootstrap';
import noteinfo, {} from '../data/noteinfo';

const Notes = () => {

    const deleteHandler = (id) => {
        if (window.confirm("Delete this note?")) {

        }
    };

    const fetchNotes = async() => {
        const data = await axios.get('/api/noteinfo');
        console.log(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <MainScreen title="Welcome User">

            <Row className="text-center">
              <Col>
                <Link to="/CreateNote">
                    <Button>
                        New Note
                    </Button> 
                </Link>
              </Col>
            </Row>

            <Row>
            {noteinfo.map((note) => (   

            <Accordion flush>
            <Accordion.Item eventKey="0">

                <Card className="my-4">
                    <Card.Header>
                        <Row>
                        <Accordion.Header>
                            <Col xs={8} id="notetitle">
                                {note.title}
                            </Col>
                            <Col className="text-end mt-2 px-3">
                                {note.category}
                            </Col>
                        </Accordion.Header>
                        </Row>
                    </Card.Header>

                    <Accordion.Body>
                    <Card.Body>
                        <Card.Text>
                            {note.content}
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button 
                                    variant="primary" 
                                    className="me-3 mt-1"
                                    href={`/note/${note._id}`}
                                    >Edit
                                </Button>
                                <Button 
                                    variant="primary" 
                                    className="mt-1"
                                    onClick={()=>deleteHandler(note._id)}
                                    >Delete
                                </Button>
                            </Col>
                            <Col className="mt-3">
                                <Card.Text className="text-end mt-1" id="notedate">
                                    Written on 12-12-2021
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Accordion.Body>
                </Card>

            </Accordion.Item>
            </Accordion>

            ))}
            </Row>
        </MainScreen>
    )
}

export default Notes
