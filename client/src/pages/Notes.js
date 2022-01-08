import React, { useEffect } from 'react';
import axios from 'axios';
import './Styles/Notes.css';
import MainScreen from '../components/MainScreen';
import Loading from "../components/Loading";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Row, Card, Col, Accordion } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from "../actions/noteActions";
import ErrorMessage from '../components/ErrorMessage';

const Notes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const noteList = useSelector((state) => state.noteList)
    const { loading, notes, error } = noteList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // const [noteinfo, setNoteinfo] = useState([])

    const deleteHandler = (id) => {
        if (window.confirm("Delete this note?")) {
        }
    };

    // const fetchNotes = async() => {
    //     const { data } = await axios.get('/api/noteinfo');
    //     setNoteinfo(data);
    // };

    //console.log(noteinfo);

    useEffect(() => {
        // fetchNotes();
        dispatch(listNotes());
        if (!userInfo){
            navigate('/');
        }
    }, [dispatch])

    return (
        <MainScreen title={`Welcome ${userInfo.name}`}>

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
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            {notes?.map((note) => (   

            <Accordion key={note._id} flush>
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
                                    Written on {note.createdAt.substring(0, 10)}
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
