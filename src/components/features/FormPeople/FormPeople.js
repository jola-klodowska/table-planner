import styles from './FormPeople.module.scss'
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const FormPeople = props => {
const [maxPeople, setMaxPeople] = useState(props.maxPeopleAmount);
const [people, setPeople] = useState(props.peopleAmount)

    return (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPeople">
            <Row>
                <Form.Label column sm={1} className={styles.label}>
                    People:
                </Form.Label>
                <Col xs={1}>
                    <Form.Control type="number" value={people} onChange={e => setPeople(e.target.value)}/>
                </Col>
                <Col xs={1}>
                    <Form.Control type="number" value={maxPeople} onChange={e => setMaxPeople(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
    );
}

export default FormPeople;