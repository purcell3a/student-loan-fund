import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TrueAdvocate</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Calculator</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Login || Join </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  );
}

export default Header;