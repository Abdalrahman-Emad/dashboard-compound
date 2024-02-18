import { Table, ActionIcon } from '@mantine/core';
import { IconPencilMinus } from '@tabler/icons';

import { fakeRequestTable } from '../../../faker';
import { useStyles } from '../../../styles/table';

import { useNavigate } from 'react-router-dom';

const RequestsTable = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const rows = fakeRequestTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.category}>
            <td style={{ display: 'flex' }}>{element.status}</td>
            <td>{element.phases}</td>
            <td>{element.creator}</td>
            <td>{element.status}</td>
            <td>{element.unit}</td>
            <td>{new Date(element.lastUpdate).toDateString()}</td>
            <td>{element.commentCount}</td>
            <td>{element.rating}</td>
            <td>
                <ActionIcon color="orange" onClick={() => navigate('edit-request', { state: { element } })}>
                    <IconPencilMinus />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>Category</th>
                        <th>Status</th>
                        <th>phases</th>
                        <th>Creator</th>
                        <th>Unit </th>
                        <th>Last update</th>
                        <th>comment Count</th>
                        <th>Star Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default RequestsTable;
