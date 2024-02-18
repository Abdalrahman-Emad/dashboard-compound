import {  Table, ActionIcon, Group } from '@mantine/core';
import { IconBell ,IconMessageCircle2, IconUser ,IconLock } from '@tabler/icons';
import { fakeTable } from '../../../faker';
import { useStyles } from '../../../styles/table';

const ResidentsTable = () => {
    const { classes } = useStyles();
    const rows = fakeTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.firstName}</td>
            <td>{element.registeredUnit}</td>
            <td>{element.email}</td>
            <td>{element.mobile}</td>
            <td>{new Date(element.requestDate).toLocaleDateString()}</td>
            <td>
                <Group>
                    <ActionIcon
                        color="blue"
                        radius="xl"
                    >
                        <IconUser size={24} />
                    </ActionIcon>
                    <ActionIcon
                        color="orange"
                        radius="xl"
                    >
                        <IconMessageCircle2 size={24} />
                    </ActionIcon>
                    <ActionIcon
                        color="green"
                        radius="xl"
                    >
                        <IconBell size={24} />
                    </ActionIcon>
                    <ActionIcon
                        color="dark"
                        radius="xl"
                    >
                        <IconLock size={24} />
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Unit</th>
                        <th>Mobile</th>
                        <th>Date Created</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default ResidentsTable;

