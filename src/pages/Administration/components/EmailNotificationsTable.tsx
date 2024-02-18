import { Table, ActionIcon } from '@mantine/core';
import {  IconEdit, IconTrash } from '@tabler/icons';

import { fakeTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';

const EmailNotificationsTable = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const rows = fakeTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td>{element.firstName}</td>
            <td>{element.email}</td>
            <td>
                <ActionIcon color="orange" radius="xl" onClick={() => navigate(`${element.id}`, { state: { element } })}>
                    <IconEdit size={24} />
                </ActionIcon>
            </td>
            <td>
                <ActionIcon color="red" radius="xl">
                    <IconTrash size={24} />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default EmailNotificationsTable;
