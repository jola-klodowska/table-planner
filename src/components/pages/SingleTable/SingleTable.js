import styles from './SingleTable.module.scss'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tableRedux";
import { Form } from 'react-bootstrap';
import FormStatus from '../../features/FormStatus/FormStatus';
import FormPeople from '../../features/FormPeople/FormPeople';
import FormBill from '../../features/FormBill/FormBill';
import UpdateButton from '../../common/UpdateButton/UpdateButton';
import { useState } from 'react';

const SingleTable = props => {
    const { tableId } = useParams();
    const tableData = useSelector(state => getTableById(state, tableId));
    const [status, setStatus] = useState(tableData.status);
    const [bill, setBill] = useState(tableData.bill);
    const [maxPeople, setMaxPeople] = useState(tableData.maxPeopleAmount);
    const [people, setPeople] = useState(tableData.peopleAmount);

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            id: tableId,
            status: status,
            peopleAmount: parseInt(people),
            maxPeopleAmount: parseInt(maxPeople),
        };

        if (status === "Busy") {
            payload["bill"] = parseInt(bill);
        } else {
            payload["bill"] = 0;
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        };

        fetch(`http://localhost:3131/tables/${tableId}`, options)
    }

    if (!tableData) return <Navigate to="/" />
    return (
        <div>
            <h1 className={styles.title}>Table {tableData.id}</h1>
            <Form>
                <FormStatus status={status} onStatusChange={setStatus} />
                <FormPeople maxPeopleAmount={maxPeople} onMaxPeopleChange={setMaxPeople} peopleAmount={people} onPeopleChange={setPeople} />
                {status === "Busy" &&
                    <FormBill bill={bill} onBillChange={setBill} status={status} />
                }
            </Form>
            <UpdateButton onClick={handleSubmit}>Update</UpdateButton>
        </div>
    );
}

export default SingleTable;