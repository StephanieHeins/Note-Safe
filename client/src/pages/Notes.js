import React from 'react'
import './Styles/Notes.css'
import MainScreen from '../components/MainScreen'
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

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
        </MainScreen>
    )
}

export default Notes
