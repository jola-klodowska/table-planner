import styles from './SingleTable.module.scss'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tableRedux";
import { ButtonGroup, Button, Form } from 'react-bootstrap';
import FormStatus from '../../features/FormStatus/FormStatus';
import FormPeople from '../../features/FormPeople/FormPeople';
import FormBill from '../../features/FormBill/FormBill';

const SingleTable = props => {
    const { tableId } = useParams();
    const tableData = useSelector(state => getTableById(state, tableId));

    if (!tableData) return <Navigate to="/" />
    return (
        <div>
            <h1 className={styles.title}>Table {tableData.id}</h1>
            <Form>
                <FormStatus status={tableData.status} />
                <FormPeople maxPeopleAmount={tableData.maxPeopleAmount} peopleAmount={tableData.peopleAmount}/>
                <FormBill bill={tableData.bill}/>
            </Form>
            <ButtonGroup className="mb-2">
                <Button>
                    Update
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default SingleTable;