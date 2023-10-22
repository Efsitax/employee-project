import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import { useState, useEffect } from 'react'; // React'ı içe aktarın
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Employee() { // Komponent adını büyük harfle başlatın
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <h1 className='title'>
        Employees
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td className='button'>
                <Link to={`/employeeInfo/${employee._id}`}>
                  <Button variant="secondary">
                    <FaUser/> Detail
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Employee;
