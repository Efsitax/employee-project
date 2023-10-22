import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EmployeeInfo() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/get/${id}`)
      .then(result => setEmployee(result.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        window.location.href = '/';
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      {employee ? (
        <>
          <h1 className='title'>{employee.name} {employee.surname}</h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Department</td>
                <td>{employee.department}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{employee.salary}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{employee.age}</td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td>{employee.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{employee.phone}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{employee.address}</td>
              </tr>
            </tbody>
          </Table>
          <div className='input-space' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href={`/employeeUpdate/${employee._id}`}>
              <Button type="submit" variant="warning"><FaUserEdit /> Update</Button>
            </a>
            <div style={{ marginLeft: '10px' }}>
              <Button type="submit" variant="danger" onClick={() => setShowConfirmationModal(true)}><FaUserMinus /> Delete</Button>
            </div>
          </div>

          <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Do you really want to delete?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => {
                handleDelete();
                setShowConfirmationModal(false);
              }}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  )
}

export default EmployeeInfo;
