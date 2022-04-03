import styles from './FormStatus.module.scss'
import { Form, Row, Col } from "react-bootstrap";
import React from 'react';

const FormStatus = props => {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalStatus">
            <Form.Label column sm={1} className={styles.label}>
                Status:
            </Form.Label>
            <Col sm={3}>
                <Form.Select value={props.status} aria-label="Status Select" onChange={e => props.onStatusChange(e.target.value)}>
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