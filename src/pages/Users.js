// Hooks
import { useEffect, useState } from 'react';
// Libraries
import axios from 'axios';
// Components
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// Constants
import { API_URL } from '../config/config';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        let mounted = true;
        axios.get(API_URL+'/users', config)
        .then(res => {
            if (mounted) setUsers(res.data);
        });        
        return () => mounted = false;
    }, []);

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td className='d-flex justify-content-evenly'>
                                <Button variant="outline-primary"> Update</Button>
                                <Button variant="outline-danger">Delete</Button>    
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Users;