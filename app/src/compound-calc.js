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

    <Container id="Compound-Calc-Container">

      <Row className="justify-content-md-center">

        <Col>
          <h3><small>Fund Value</small></h3>
          <DollaDollaInput/>
        </Col>

        <Col>
            <h3><small>Regular Deposit</small></h3>
            <DollaDollaInput/>
        </Col>
                  
        <Col>
            <h3><small>Deposit Frequency</small></h3>
            <DepositFrequency/>
        </Col>

      </Row>
      <Row>
                
        <Col>
          <h3><small>Number of Years</small></h3>
          <Years/>
        </Col>
        
        <Col>
          <h3><small>Interest Rate</small></h3>
          <InterestRate/>
        </Col>
               
        <Col>
          <h3><small>Compound Frequency</small></h3>
          <CompoundFrequency/>
        </Col>

      </Row>
    </Container>


  );
}

export default CompoundCalc;