import React, { useState } from 'react';
import { Button, Grid, Group, Title, TextInput, ActionIcon, Checkbox, Table } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../../styles/table';
import { IconPencilMinus, IconTrash } from '@tabler/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ComplaintsPage = () => {
    const navigate = useNavigate();
    const { classes } = useStyles();

    // Define static complaints data
    const complaints = [
        {
            id: 1,
            type: 'Type 1',
            unitNo: 'Unit 101',
            status: 'Open',
            unitArea: '100 sqft',
            owner: 'Owner 1',
        },
        {
            id: 2,
            type: 'Type 2',
            unitNo: 'Unit 102',
            status: 'Closed',
            unitArea: '150 sqft',
            owner: 'Owner 2',
        },
        // Add more complaints as needed
    ];

    function handleDelete(id: number): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div>
                <Title order={2} my={0}>
                    Complaints
                </Title>
            <div className="d-flex justify-content-end align-items-end mb-3">
                    <Group>
                        <Button onClick={() => navigate('/dashboard/facility-management/complaints/add-complaints')}>
                            Add Complaints
                        </Button>
                        <Button>Export Complaints</Button>
                    </Group>
                </div>

            <PaperBox>

                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="ID" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Type" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit No" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Status" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit Area" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Owner" />
                    </Grid.Col>
                    <Grid.Col xs={1}>
                        <Button style={{ backgroundColor: '#5C636A' }} fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <div style={{ overflowX: 'auto' }}>
                    <Table
                        verticalSpacing="md"
                        className={`${classes.tableBody} table-hover`}
                        style={{ borderCollapse: 'collapse', border: '1px solid #ccc' }} // Adjust border color to light gray
                    >
                        <thead className={classes.tableHeader}>
                            <tr>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    ID
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Type
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Unit No
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Status
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Unit Area
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Owner
                                </th>
                                <th className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((complaint) => (
                                <tr key={complaint.id} className={classes.tableRow}>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.id}
                                    </td>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.type}
                                    </td>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.unitNo}
                                    </td>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.status}
                                    </td>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.unitArea}
                                    </td>
                                    <td className="text-center" style={{ border: '1px solid #ccc', fontSize: '16px' }}>
                                        {complaint.owner}
                                    </td>
                                    <td style={{ border: '1px solid #ccc' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                className="btn btn-sm btn-primary mx-1"
                                                onClick={() => navigate('complaints-detailes')}
                                            />{' '}
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="btn btn-sm btn-danger mx-1"
                                                onClick={() => handleDelete(complaint.id)}
                                            />
                                            {''}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </PaperBox>
        </div>
    );
};

export default ComplaintsPage;
