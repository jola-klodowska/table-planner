import styles from './FormStatus.module.scss'
import { Form, Row, Col } from "react-bootstrap";
import React from 'react';
import { useState } from 'react';


const FormStatus = props => {

    const [status, setStatus] = useState(props.status) 

    return (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalStatus">
            <Form.Label column sm={1} className={styles.label}>
                Status:
            </Form.Label>
            <Col sm={3}>
                <Form.Select value={status} aria-label="Status Select" onChange={e => setStatus(e.target.value)}>
                    <option value="Busy">Busy</option>
                    <option value="Free">Free</option>
                    <option value="Reserved">Reserved</option>
                    <option value="Cleaning">Cleaning</option>
                </Form.Select>
            </Col>
        </Form.Group>
    );
}

export default FormStatus;