import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

function EmployeeAdd() {
    const [rangeValue, setRangeValue] = useState(50);


    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

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

    return (
        <Container>
            <h1 className='title'>New Employee</h1>
            <Form onSubmit={handleAddEmployee}>
                <Row>
                    <div className='col-6 input-space'>
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                        />
                    </div>
                    <div className='col-6 input-space'>
                        <Form.Label htmlFor="surname">Surname</Form.Label>
                        <Form.Control
                            type="text"
                            id="surname"
                        />
                    </div>
                    <div className='col-6 input-space'>
                        <Form.Label htmlFor="department">Department</Form.Label>
                        <Form.Control
                            type="text"
                            id="department"
                        />
                    </div>
                    <div className='col-6 input-space'>
                        <Form.Label htmlFor="salary">Salary</Form.Label>
                        <Form.Control
                            type="text"
                            id="salary"
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
                        />
                    </div>
                    <div className='col-6 input-space'>
                        <Form.Label htmlFor="email">E-Mail</Form.Label>
                        <Form.Control
                            type="text"
                            id="email"
                        />
                    </div>
                    <div className='col-12 input-space'>
                        <Form.Label htmlFor="Address">Address</Form.Label>
                        <Form.Control
                            type="text"
                            id="Address"
                        />
                    </div>
                    <div className='col-12 input-space cent'>
                        <Button type="submit" variant="success"><FaUserPlus/> Add</Button>
                    </div>
                </Row>
            </Form>
        </Container>
    );
}

export default EmployeeAdd;
