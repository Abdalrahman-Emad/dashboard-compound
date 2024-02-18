import {  Table, ActionIcon, Group } from '@mantine/core';
import { IconEye  } from '@tabler/icons';

import { fakeTable } from '../../../faker';
import { useStyles } from '../../../styles/table';

import { useNavigate } from 'react-router-dom';

const ReportTable = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const rows = fakeTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td >{element.firstName}</td>
            <td>{new Date(element.requestDate).toLocaleDateString()}</td>
            <td>
                <Group>
                    <ActionIcon
                        color="blue"
                        radius="xl"
                        onClick={()=>navigate(`details/${element.id}`)}
                    >
                        <IconEye size={24} />
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
                        <th>Type</th>
                        <th>Date Create</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default ReportTable;

