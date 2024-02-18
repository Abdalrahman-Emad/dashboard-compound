import { Table, ActionIcon } from '@mantine/core';
import { IconPencilMinus , IconCoin } from '@tabler/icons';

import { fakeUnitsTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';

const UnitsTable = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const rows = fakeUnitsTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.type}</td>
            <td>{element.type}</td>
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
            <ActionIcon color="blue">
                <IconCoin/>
              </ActionIcon>

            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Unit No</th>
                        <th>Status</th>
                        <th>Unit Area</th>
                        <th>Owner</th>
                        <th>Display Address</th>
                        <th>Edit</th>
                        <th>Financial Block</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default UnitsTable;
