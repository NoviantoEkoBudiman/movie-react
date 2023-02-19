import { Card, Button, Container, Row, Col } from "react-bootstrap"
import ipman from "../assets/images/action/Ip Man.jpeg"
import ipman2 from "../assets/images/action/Ip Man 2.jpeg"
import ipman3 from "../assets/images/action/Ip Man 3.jpeg"
import johnWick from "../assets/images/action/Jhon Wick.jpg"
import theRaid from "../assets/images/action/The Raid.jpeg"
import theRaid2 from "../assets/images/action/The Raid 2.jpeg"

const Action = () => {
    return(
        <Container>
            <br/>
            <h1 className="text-white" id="action">Action Movie</h1>
            <br/>
            <div>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={ipman} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={ipman2} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={ipman3} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={johnWick} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={theRaid} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                        <Card.Img variant="top" src={theRaid2} className="movieImage"/>
                        <Card.Body className="bg-dark">
                            <Card.Title className="text-white">Card Title</Card.Title>
                            <Card.Text className="text-white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Pesan Tiket Sekarang!</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Action