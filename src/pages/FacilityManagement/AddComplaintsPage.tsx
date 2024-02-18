import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextInput, Title, Text } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

const AddComplaintsPage: React.FC = () => {
    const [complainId, setComplainId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [creator, setCreator] = useState('');
    const [location, setLocation] = useState('');
    const [unit, setUnit] = useState('');
    const [unitType, setUnitType] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    return (
        <div>
            <PageTitle />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing="lg">
                                <TextInput
                                    className="textFilds"
                                    label="Complain ID"
                                    value={complainId}
                                    onChange={(e) => setComplainId(e.target.value)}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Category Name"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                                <Text>Descriptions:</Text>
                                <textarea
                                    className="textFilds"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Creator"
                                    value={creator}
                                    onChange={(e) => setCreator(e.target.value)}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Unit"
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                />
                                <TextInput
                                    className="textFilds"
                                    label="Unit Type"
                                    value={unitType}
                                    onChange={(e) => setUnitType(e.target.value)}
                                />
                                <Link to="/dashboard/facility-management/complaints">
                                    <Button color="teal" type="submit" fullWidth>
                                        Save
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default AddComplaintsPage;
