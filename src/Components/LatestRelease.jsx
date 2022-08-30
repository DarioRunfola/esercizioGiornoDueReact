import { Component } from 'react';
import { Card } from 'react-bootstrap';
import fantasy from '../Data/books/fantasy.json'
import { Container, Row, Col } from 'react-bootstrap';

class LatestRelease extends Component {
    render() {
        return (

            <>
                <Container className='d-flex'>
                    <Row className=' m-auto justify-content-center'>
                        <Col xs={12} md={6} >
                            {fantasy.map((fantasy) =>
                                <Card className='mb-3' style={{ width: '18rem' }} key={fantasy.asin} >
                                    <Card.Img variant="top" src={fantasy.img} />
                                    <Card.Body>
                                        <Card.Title>{fantasy.title}</Card.Title>
                                        <Card.Text>
                                            {fantasy.category}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}

export default LatestRelease
