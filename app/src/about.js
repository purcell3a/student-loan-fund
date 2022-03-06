import { Container, Row, Card } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return (

        <React.Fragment>

            <Row className='about'>

                <Card.Text id=''>
                    <p>
                        A project designed to provide individuals with resources they previously would <br></br>
                        not have had access to for student loan relief.
                    </p>

                    <p>
                        The intention here is to build an not-for-profit investment fund for individuals to contribute <br></br>
                        to and benefit from. The fund will be fully transparent, displaying the preformance of the fund <br></br>
                        as well as its investments. Individuals will be able to sign up for small monthly contributions <br></br>
                        and see not only how their contribution affects the fund <br></br> 
                        but also where they are in line. When and indivuals loan is paid off they will be removed <br></br>
                        from the list of beneficiaries and the funds they contributed <br></br>
                        will continue to grow the fund and provide relief. 
                    </p>

                    <p>
                        It's kind of like a massive refinance<br></br>
                        Why is this different? Well not everyone has enough money to access to fund managers, <br></br>
                        the time or the funds to invest themselves. This is lasting contribution an individual<br></br>
                        can make towards our society while also helping themselves. 
                    </p>

                </Card.Text>

            </Row>
        </React.Fragment>

  );
}

export default About;