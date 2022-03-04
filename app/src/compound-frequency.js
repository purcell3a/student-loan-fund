import './App.css';
import {InputGroup, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function CompoundFrequency() {
  return (
    <div>
        <Form.Select aria-label="">
        <option>DepositFrequency</option>
        <option value="1">Annually</option>
        <option value="2">Quarterly</option>
        <option value="3">Monthly</option>
        </Form.Select>
    </div>
  );
}

export default CompoundFrequency;