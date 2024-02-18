import { Table,  } from '@mantine/core';

import { fakeRequestTable } from '../../../faker';
import { useStyles } from '../../../styles/table';


const AuthenticationTrackingTable = () => {
    const { classes } = useStyles();
    const rows = fakeRequestTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.category}>
            <td>{element.creator}</td>
            <td>{element.creator}</td>
            <td>{element.unit}</td>
            <td>{`${element.creator}@email.com`}</td>
            <td>{element.rating}</td>
            <td>{element.commentCount}</td>
            <td>{element.creator}</td>
            <td>{new Date(element.lastUpdate).toDateString()}</td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Unit</th>
                        <th>Email</th>
                        <th>User Type</th>
                        <th>Status</th>
                        <th>Authenticated by</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default AuthenticationTrackingTable;
