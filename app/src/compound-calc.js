import './App.css';
import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DollaDollaInput from './dollar-input.js'
import Years from './years.js'
import InterestRate from './years.js'
import CompoundFrequency from "./compound-frequency.js"
import DepositFrequency from "./deposit-frequency.js"

function CompoundCalc() {
  return (
    <React.Fragment id="compound-calc">

              <Row className="justify-content-md-center">

                  <Col>Fund Value
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
 </React.Fragment>

  );
}

export default CompoundCalc;