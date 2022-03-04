import './App.css';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DollaDollaInput from './dollar-input.js'
import Years from './years.js'
import InterestRate from './years.js'
import CompoundFrequency from "./compound-frequency.js"
import DepositFrequency from "./deposit-frequency.js"

function CompoundCalc() {
  return (
    <div className="App">
      <header className="App-header">
            <Container>
            <Row className="justify-content-md-center">
                <Col>Seed Amount
                    <DollaDollaInput/>
                </Col>

                <Col> Regular Deposit
                    <DollaDollaInput/>
                </Col>
                
                <Col>Deposit Frequency
                  <DepositFrequency/>
                </Col>
            </Row>
            <Row>
                <Col>Number of Years
                    <Years/>
                </Col>
                <Col>Interest Rate
                    <InterestRate/>
                </Col>
                <Col>Compound Frequency
                  <CompoundFrequency/>
                </Col>
            </Row>
            </Container>
      </header>
    </div>
  );
}

export default CompoundCalc;