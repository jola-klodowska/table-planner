import styles from './FormPeople.module.scss'
import { Form, Row, Col } from 'react-bootstrap';

const FormPeople = props => {

    return (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPeople">
            <Row>
                <Form.Label column sm={1} className={styles.label}>
                    People:
                </Form.Label>
                <Col xs={1}>
                    <Form.Control type="number" min="0" max="10" value={props.peopleAmount} onChange={e => props.onPeopleChange(e.target.value)}/>
                </Col>
                <Col xs={1}>
                    <Form.Control type="number" min="0" max="10" value={props.maxPeopleAmount} onChange={e => props.onMaxPeopleChange(e.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
    );
}

export default FormPeople;