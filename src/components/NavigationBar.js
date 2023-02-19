import {Navbar, Nav, Container} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar className="bg-white border">
                <Container>
                    <Navbar.Brand className="text-dark" href="/">Cihuy Movie</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="text-dark" href="#action">Action</Nav.Link>
                        <Nav.Link className="text-dark" href="#anime">Anime</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar