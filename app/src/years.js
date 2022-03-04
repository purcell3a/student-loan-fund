import './App.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Years() {
  return (
    <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Years</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
    </div>
  );
}

export default Years;