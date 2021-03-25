import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './group.css';

// goint to build using functional components. This is the old class based method.
// class GroupPage extends Component {

//     render() {
//         return (
//             <h1>
//                 This is where you select your group and order.
//             </h1>
//         )
//     }
// }
function GroupPage() {
    return (
            <Card style={{width: '50%' , margin: 'auto', marginTop: '10%'}}>
                <Card.Body>
                    <Card.Title as = 'H1'>
                        Your group:
                    </Card.Title>
                    <Form id="group-names">
                        <Form.Group as={Row} controlId="golferOneName">
                            <Form.Label column sm="2">
                                Golfer 1:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Golfer #1" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="golferTwoName">
                            <Form.Label column sm="2">
                                Golfer 2:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Golfer #2" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="golfer3Name">
                            <Form.Label column sm="2">
                                Golfer 3:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Golfer #3" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="golferFourName">
                            <Form.Label column sm="2">
                                Golfer 4:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Golfer #4" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
    )
}

export default GroupPage;