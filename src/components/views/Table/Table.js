import styles from './Table.module.scss'
import { ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Table = props => {

    return (
        <li className={styles.tableLine}>
            <div className={styles.direction}>
                <h4 className={styles.table}>Table {props.id}</h4>
                <p><span className={styles.status}>Status:</span> {props.status}</p>
            </div>
            <div>
                <ButtonGroup className="mb-2">
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to={"/table/" + props.id}>
                        <Button>
                            Show More
                        </Button>
                    </NavLink>
                </ButtonGroup>
            </div>

        </li>
    )
}

export default Table;