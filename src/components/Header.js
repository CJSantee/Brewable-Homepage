import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';

import { useAuth } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let auth = useAuth();
    let navigate = useNavigate();

    return (
        <Container>
            <Navbar expand="md">
                <Navbar.Brand onClick={() => navigate("/")}>Brewable</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-between'>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {auth.user 
                    ?<NavDropdown title={auth.user}>
                        <NavDropdown.Item>Account</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            auth.signout(() => navigate("/"));
                        }}>Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    :<Nav>
                        <Nav.Item>
                            <Nav.Link onClick={() => navigate("/login")}>Sign In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => navigate("/signup")}>Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}