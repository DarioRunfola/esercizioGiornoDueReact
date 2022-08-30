import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MyFooter = () => (
    <>
        <footer>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#home">Footer</Navbar.Brand>
                    <Nav className="justify-conten-sppace-around">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Conatct</Nav.Link>
                        <Nav.Link href="#">InfoMail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>

    </>

)

export default MyFooter