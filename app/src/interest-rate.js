import './App.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function InterestRate() {
  return (
    <div>
       <InputGroup>
            <FormControl aria-label="" />
            <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
    </div>
  );
}

export default InterestRate;