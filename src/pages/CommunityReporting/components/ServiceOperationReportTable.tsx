import { Table,  } from '@mantine/core';

import { fakeRequestTable } from '../../../faker';
import { useStyles } from '../../../styles/table';


const ServiceOperationReportTable = () => {
    const { classes } = useStyles();
    const rows = fakeRequestTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.category}>
            <td>{element.phases}</td>
            <td>{element.creator}</td>
            <td>{element.status}</td>
            <td>{element.unit}</td>
            <td>{element.commentCount}</td>
            <td>{element.rating}</td>
            <td>{element.commentCount}</td>
            <td>{new Date(element.lastUpdate).toDateString()}</td>
            <td>{new Date(element.lastUpdate).toDateString()}</td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Rate </th>
                        <th>Service</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Date Created</th>
                        <th>Last update</th>
                        <th>Technician</th>
                        <th>Start jop</th>
                        <th>End jop</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default ServiceOperationReportTable;
