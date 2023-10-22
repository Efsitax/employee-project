import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeAdd() {
    const [rangeValue, setRangeValue] = useState(50);
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);


    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/get/${id}`)
          .then(result => {
            setEmployee(result.data)
            setRangeValue(result.data.age)
            })
          .catch(err => console.log(err));
      }, [id]);

    const handleAddEmployee = (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            department: document.getElementById('department').value,
            salary: document.getElementById('salary').value,
            age: rangeValue,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('Address').value,
        };

        axios.post('http://localhost:3001/add', formData)
            .then(response => {
                alert('Employee added successfully');
                console.log(response.data);
                document.getElementById('name').value = '';
                document.getElementById('surname').value = '';
                document.getElementById('department').value = '';
                document.getElementById('salary').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Address').value = '';
                setRangeValue(50);
            })
            .catch(error => {
                console.error('Error adding employee', error);
            });
    };

    const handleUpdateEmployee = (e) => {
        e.preventDefault();
    
        const formData = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            department: document.getElementById('department').value,
            salary: document.getElementById('salary').value,
            age: rangeValue,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('Address').value,
        };
    
        axios.put(`http://localhost:3001/update/${id}`, formData) // Assuming you have an endpoint for updating data
            .then(response => {
                alert('Employee updated successfully');
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error updating employee', error);
            });
    };

    return (
        <Container>
            <h1 className='title'>Update Employee</h1>
            {employee ? (
                <>
                <Form onSubmit={handleAddEmployee}>
                    <Row>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                defaultValue={employee.name}
                            />
                        </div>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="surname">Surname</Form.Label>
                            <Form.Control
                                type="text"
                                id="surname"
                                defaultValue={employee.surname}

                            />
                        </div>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="department">Department</Form.Label>
                            <Form.Control
                                type="text"
                                id="department"
                                defaultValue={employee.department}
                            />
                        </div>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="salary">Salary</Form.Label>
                            <Form.Control
                                type="text"
                                id="salary"
                                defaultValue={employee.salary}
                            />
                        </div>
                        <div className='col-12 input-space'>
                            <Form.Label>Age {rangeValue}</Form.Label>
                            <Form.Range
                                value={rangeValue}
                                onChange={handleRangeChange}
                                min={0}
                                max={100}
                            />
                        </div>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control
                                type="text"
                                id="phone"
                                defaultValue={employee.phone}

                            />
                        </div>
                        <div className='col-6 input-space'>
                            <Form.Label htmlFor="email">E-Mail</Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                defaultValue={employee.email}

                            />
                        </div>
                        <div className='col-12 input-space'>
                            <Form.Label htmlFor="Address">Address</Form.Label>
                            <Form.Control
                                type="text"
                                id="Address"
                                defaultValue={employee.address}

                            />
                        </div>
                        <div className='col-12 input-space cent'>
                            <Button type="submit" variant="warning" onClick={handleUpdateEmployee}><FaUserEdit/> Update</Button>
                        </div>
                    </Row>
                </Form>
                </>
            ) : (
            <p>Loading...</p>
            )}
        </Container>
    );
}

export default EmployeeAdd;
