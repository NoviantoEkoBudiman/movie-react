import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import FMA from "../assets/images/anime/Fullmetal Alchemist Brotherhood.jpeg"
import Inuyasha from "../assets/images/anime/Inuyasha.jpg"
import Evangelion from "../assets/images/anime/Neon Genesis Evangelion.jpg"
import SamuraiX from "../assets/images/anime/Samurai X.jpg"
import Yugioh from "../assets/images/anime/Yu Gi Oh.jpg"
import HXH from "../assets/images/anime/Hunter X Hunter.png"
import "../style/landingpage.css";

const Anime = () => {
    return(
        <div className='bgAnime'>
            <Container>
                <br/>
                <h1 className="text-white" id="anime">Anime</h1>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={FMA} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={Inuyasha} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={Evangelion} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={SamuraiX} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={Yugioh} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className="p-1">
                            <Card.Img variant="top" src={HXH} className="movieImage"/>
                            <Card.Body className='bg-dark text-white'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Anime