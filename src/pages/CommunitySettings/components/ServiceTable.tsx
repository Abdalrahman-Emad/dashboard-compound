import { Table, ActionIcon,   } from '@mantine/core';
import { IconPencilMinus , IconTrash } from '@tabler/icons';

import { fakeUnitsTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';

const ServiceTable = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const rows = fakeUnitsTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.type}</td>
            <td>{element.unitNo}</td>
            <td>{element.unitNo}</td>
            <td>{element.status}</td>
            <td>{element.unitArea}</td>
            <td>{element.owner}</td>
            <td>{element.owner}</td>
            <td>
                <ActionIcon color="orange" onClick={()=>navigate("edit-units" , {state:{element}})}>
                    <IconPencilMinus/>
                </ActionIcon>
            </td>
            <td>
            <ActionIcon color="red">
                <IconTrash/>
              </ActionIcon>

            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>Title</th>
                        <th>Contact Number</th>
                        <th>Working Hours</th>
                        <th>Working Days</th>
                        <th>Price</th>
                        <th>Sort Order</th>
                        <th>Service Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default ServiceTable;
