import React, { useState } from 'react';
import { Button, Grid, Group, Title, TextInput, ActionIcon, Checkbox, Table } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../../styles/table';
import { IconPencilMinus, IconTrash } from '@tabler/icons';

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
            owner: 'Owner 1'
        },
        {
            id: 2,
            type: 'Type 2',
            unitNo: 'Unit 102',
            status: 'Closed',
            unitArea: '150 sqft',
            owner: 'Owner 2'
        },
        // Add more complaints as needed
    ];

    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Complaints
                </Title>
                <Group>
                    <Button onClick={() => navigate('/dashboard/facility-management/complaints/add-complaints')}>Add Complaints</Button>
                    <Button>Upload Complaints</Button>
                    <Button>Export Complaints</Button>
                    <Button>Export Warranty Complaints</Button>
                </Group>
            </Group>
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
                        <Button color="green" fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
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
                        <tbody>
                            {complaints.map((complaint) => (
                                <tr key={complaint.id} className={classes.tableRow}>
                                    <td>{complaint.id}</td>
                                    <td>{complaint.type}</td>
                                    <td>{complaint.unitNo}</td>
                                    <td>{complaint.status}</td>
                                    <td>{complaint.unitArea}</td>
                                    <td>{complaint.owner}</td>
                                    <td>
                                        <ActionIcon color="orange" onClick={() => navigate("complaints-detailes")}>
                                            <IconPencilMinus />
                                        </ActionIcon>
                                    </td>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <ActionIcon color="red">
                                            <IconTrash />
                                        </ActionIcon>
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
