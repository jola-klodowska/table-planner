import styles from './FormBill.module.scss'
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const FormBill = props => {
const [bill, setBill] = useState(props.bill)

    return (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBill">
            <Form.Label column sm={1} className={styles.label}>
                Bill:
            </Form.Label>
            <Col sm={1}>
                <Form.Control type="number" placeholder="$" value={bill} onChange={e => setBill(e.target.value)}/>
            </Col>
        </Form.Group>
    );
}

export default FormBill;