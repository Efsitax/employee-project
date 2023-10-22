import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import './App.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className='navbar-custom'>
      <Navbar.Brand>Company ABC</Navbar.Brand>
      <Nav className="ml-auto">
          <Nav.Link href="/">Employees</Nav.Link>
          <Nav.Link href="/employeeAdd">New Employee</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;