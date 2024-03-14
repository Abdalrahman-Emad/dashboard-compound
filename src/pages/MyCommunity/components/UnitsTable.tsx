import React from 'react';
import { Table, ActionIcon, Checkbox } from '@mantine/core';
import { IconPencilMinus, IconTrash } from '@tabler/icons';
import { fakeUnitsTable } from '../../../faker';
import { useStyles } from '../../../styles/table';
import { useNavigate } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnitsTable = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();

    const handleEdit = (element: {
        id: string;
        type: string;
        unitNo: number;
        status: string;
        unitArea: number;
        owner: string;
    }) => {
        navigate('edit-units', { state: { element } });
    };

    const handleDelete = (element: {
        id: string;
        type: string;
        unitNo: number;
        status: string;
        unitArea: number;
        // Implement delete functionality here
        owner: string;
    }) => {
        // Implement delete functionality here
    };

    const rows = fakeUnitsTable(8).map((element) => (
        <tr className={classes.tableRow} key={element.id}>
            <td>{element.id}</td>
            <td onClick={() => navigate('unit-detailes', { state: { element } })}>{element.type}</td>
            <td onClick={() => navigate('unit-detailes', { state: { element } })}>{element.unitNo}</td>
            <td onClick={() => navigate('unit-detailes', { state: { element } })}>{element.status}</td>
            <td onClick={() => navigate('unit-detailes', { state: { element } })}>{element.unitArea}</td>
            <td onClick={() => navigate('unit-detailes', { state: { element } })}>{element.owner}</td>
            <td>
                <td>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FontAwesomeIcon
                            icon={faEdit}
                            className="btn btn-sm btn-primary mx-1"
                            onClick={() => navigate('edit-units')}
                        />{' '}
                        <FontAwesomeIcon icon={faTrash} className="btn btn-sm btn-danger mx-1" />
                        {''}
                    </div>
                </td>
            </td>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            ID
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Type
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Unit No
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Status
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Unit Area
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Owner
                        </th>
                        <th className="text-center" style={{ border: '1px solid #ccc' }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default UnitsTable;
