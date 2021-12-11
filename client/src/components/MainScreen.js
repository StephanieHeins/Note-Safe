import React from 'react';
import { Container, Row } from 'react-bootstrap';

const MainScreen = ({title, children}) => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="page">
                        {title && (<>
                          <h3 className="heading my-4">{title}</h3>
                          <hr />
                        </>)}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MainScreen
