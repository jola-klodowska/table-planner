import styles from './FormBill.module.scss'
import { Form, Row, Col } from 'react-bootstrap';

const FormBill = props => {


    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalBill">
                <Form.Label column sm={1} className={styles.label}>
                    Bill:
                </Form.Label>
                <Col sm={1}>
                    <Form.Control type="number" placeholder="$" value={props.bill} onChange={e => props.onBillChange(e.target.value)} />
                </Col>
            </Form.Group>
        </div>
    );
}

export default FormBill;