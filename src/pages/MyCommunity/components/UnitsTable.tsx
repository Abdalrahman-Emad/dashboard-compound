import { Table, ActionIcon,  Checkbox } from '@mantine/core';
import { IconPencilMinus , IconTrash } from '@tabler/icons';
import { fakeUnitsTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';

const UnitsTable = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const rows = fakeUnitsTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td style={{ display: 'flex' }}>{element.type}</td>
            <td onClick={() => {navigate("unit-detailes" , {state:{element}})}}>{element.type}</td>
            <td onClick={() => {navigate("unit-detailes" , {state:{element}})}}>{element.unitNo}</td>
            <td onClick={() => {navigate("unit-detailes" , {state:{element}})}}>{element.status}</td>
            <td onClick={() => {navigate("unit-detailes" , {state:{element}})}}>{element.unitArea}</td>
            <td onClick={() => {navigate("unit-detailes" , {state:{element}})}}>{element.owner}</td>
            <td>
                <ActionIcon color="orange" onClick={()=>navigate("edit-units" , {state:{element}})}>
                    <IconPencilMinus/>
                </ActionIcon>
            </td>
            <td>
                <Checkbox />
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
                        <th>ID</th>
                        <th>Type</th>
                        <th>Unit No</th>
                        <th>Status</th>
                        <th>Unit Area</th>
                        <th>Owner</th>
                        <th>Edit</th>
                        <th>Warranty</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default UnitsTable;
