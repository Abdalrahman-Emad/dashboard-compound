import { Table,  } from '@mantine/core';

import { fakeRequestTable } from '../../../faker';
import { useStyles } from '../../../styles/table';


const VisitorGateAccessTable = () => {
    const { classes } = useStyles();
    const rows = fakeRequestTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.category}>
            <td>{element.creator}</td>
            <td>{element.creator}</td>
            <td>{element.phases}</td>
            <td>{element.rating}</td>
            <td>{new Date(element.lastUpdate).toDateString()}</td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>Name</th>
                        <th>User type</th>
                        <th>Unit Name </th>
                        <th>Gate</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default VisitorGateAccessTable;
