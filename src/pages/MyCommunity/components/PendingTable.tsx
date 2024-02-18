import { Table, ActionIcon, Group } from '@mantine/core';
import { IconCheck, IconCircleMinus, IconTrash, IconMessageCircle2 } from '@tabler/icons';
import { fakeTable } from '../../../faker';
import { useStyles } from '../../../styles/table';

const PendingTable = () => {
    const { classes } = useStyles();
    const rows = fakeTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.registeredUnit}</td>
            <td>{element.email}</td>
            <td>{element.mobile}</td>
            <td>{new Date(element.requestDate).toLocaleDateString()}</td>
            <td>
                <Group>
                    <ActionIcon color="green" radius="xl">
                        <IconCheck size={24} />
                    </ActionIcon>
                    <ActionIcon color="orange" radius="xl">
                        <IconCircleMinus size={24} />
                    </ActionIcon>
                    <ActionIcon color="red" radius="xl">
                        <IconTrash size={24} />
                    </ActionIcon>
                    <ActionIcon color="green" radius="xl">
                        <IconMessageCircle2 size={24} />
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
                        <th>Registered Unit</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Request Date</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default PendingTable;
