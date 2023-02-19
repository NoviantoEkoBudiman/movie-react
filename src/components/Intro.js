import { Container, Row, Col, Button } from 'react-bootstrap';
import "../style/landingpage.css"

const Intro = () => {
    return(
        <div className='intro'>
            <Container className="d-flex text-center justify-content-center align-items-center text-white">
                <Row>
                    <Col>
                        <div className="title">Tempat nonton asik</div>
                        <div className="title mb-4">Bareng orang terdekat</div>
                        <div className='text-center'>
                            <Button>Lihat List Movie</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro