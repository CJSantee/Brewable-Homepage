// Bootstrap Components
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';

// Assets
import GitHub from '../assets/GitHub.png';

export default function Footer() {
    return (
        // .fixed-bottom for Sticky Footer
        <Container className="fixed-bottom"> 
            <Navbar variant="light" className="justify-content-center align-items-center">
                <Nav>
                    <Nav.Link href="https://github.com/CJSantee/Brewable-Homepage">
                        {"Developed by "}
                        <img src={GitHub} alt="" width={16}/>
                        {" Colin Santee"} 
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}