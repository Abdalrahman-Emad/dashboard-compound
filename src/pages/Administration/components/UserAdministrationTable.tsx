import { Table, ActionIcon, Group } from '@mantine/core';
import { IconSettings, IconEdit, IconTrash } from '@tabler/icons';

import { fakeTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';

const UserAdministrationTable = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const rows = fakeTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>{element.mobile}</td>
            <td>{element.registeredUnit}</td>
            <td>
                <Group>
                    <ActionIcon
                        color="blue"
                        radius="xl"
                        onClick={() => navigate(`${element.id}`, { state: { element } })}
                    >
                        <IconSettings size={24} />
                    </ActionIcon>
                    <ActionIcon color="orange" radius="xl">
                        <IconEdit size={24} />
                    </ActionIcon>
                    <ActionIcon color="red" radius="xl">
                        <IconTrash size={24} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Group</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default UserAdministrationTable;
