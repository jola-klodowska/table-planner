
import styles from './MainPage.module.scss'
import { useSelector } from "react-redux";
import Table from "../../views/Table/Table";

const MainPage = () => {

    const tables = useSelector(state => state.tables);

    return (
        <div>
            <h2 className={styles.title}>All tables</h2>
            <ul className={styles.list}>
                {tables.map(table =>
                    <Table
                        key={table.id}
                        {...table} />
                )}
            </ul>
        </div>
    );
}

export default MainPage;