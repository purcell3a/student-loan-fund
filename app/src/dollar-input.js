import './App.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function DollaDollaInput() {
  return (
    <div>
       <InputGroup>
            <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
    </div>
  );
}

export default DollaDollaInput;