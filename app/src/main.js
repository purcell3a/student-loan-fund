import { Row, Card, Col } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Main() {
  return (

        <React.Fragment>

            <Row id='Main'>
                <Col>
                    <Card.Text id='main-text'>
                       <p> This Website is a Work In Progress</p>
                    </Card.Text>
                </Col>

                <Col>
                    <img id="main-img" src="https://us.123rf.com/450wm/bsd555/bsd5552005/bsd555200501890/148177562-support-for-students-black-glyph-icon-education-loan-financial-aid-for-graduate-school-accessibility.jpg?ver=6" alt="dollar sign with graduation hat on top" width="400" height="400"></img>
                </Col>
            </Row>

        </React.Fragment>

  );
}

export default Main;