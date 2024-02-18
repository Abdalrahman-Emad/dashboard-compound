import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextInput, Title, Select } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import './style/style.css';

const EditUnitsPage: React.FC = () => {
    const { state } = useLocation();
    const { element } = state;

    // State variables for existing fields
    const [id, setId] = useState(element.id);
    const [type, setType] = useState(element.type);
    const [unitNo, setUnitNo] = useState(element.unitNo);
    const [status, setStatus] = useState(element.status);
    const [unitArea, setUnitArea] = useState(element.unitArea);
    const [owner, setOwner] = useState(element.owner);
    const [phaseId, setPhaseId] = useState('');
    const [address, setAddress] = useState('');

    // State variables for additional fields
    const [buildingType, setBuildingType] = useState('');
    const [totalSqf, setTotalSqf] = useState('');
    const [floor, setFloor] = useState('');
    const [size, setSize] = useState('');
    const [amenities, setAmenities] = useState('');
    const [rooms, setRooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [withParking, setWithParking] = useState(false);
    const [location, setLocation] = useState('');
    const [features, setFeatures] = useState('');
    const [indoorFacilities, setIndoorFacilities] = useState('');
    const [outdoorFacilities, setOutdoorFacilities] = useState('');
    const [gardenOrRoofSpace, setGardenOrRoofSpace] = useState('');
    const [propertyActive, setPropertyActive] = useState(false);
    const [hasPoolOrBeach, setHasPoolOrBeach] = useState(false);

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
                            <Stack spacing="md">
                                {/* Existing fields */}
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="id" disabled value={id} onChange={(e) => setId(e.target.value)} />
                                    <TextInput className='textFilds' label="type" value={type} onChange={(e) => setType(e.target.value)} />
                                </div>
                                {/* Add additional fields */}
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Building Type" value={buildingType} onChange={(e) => setBuildingType(e.target.value)} />
                                    <TextInput className='textFilds' label="Total SQF" value={totalSqf} onChange={(e) => setTotalSqf(e.target.value)} />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} />
                                    <TextInput className='textFilds' label="Size" value={size} onChange={(e) => setSize(e.target.value)} />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Amenities" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                                    <TextInput className='textFilds' label="Rooms" value={rooms} onChange={(e) => setRooms(e.target.value)} />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                                    <Select
                                        className='textFilds'
                                        data={[
                                            { label: 'With Parking', value: 'true' },
                                            { label: 'No Parking', value: 'false' }
                                        ]}
                                        value={withParking.toString()} // Convert boolean to string
                                        onChange={(value) => setWithParking(value === 'true')}
                                        label="Parking"
                                        placeholder="Select Parking"
                                    />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                    <TextInput className='textFilds' label="Features" value={features} onChange={(e) => setFeatures(e.target.value)} />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Indoor Facilities" value={indoorFacilities} onChange={(e) => setIndoorFacilities(e.target.value)} />
                                    <TextInput className='textFilds' label="Outdoor Facilities" value={outdoorFacilities} onChange={(e) => setOutdoorFacilities(e.target.value)} />
                                </div>
                                <div className='fieldsContainer'>
                                    <TextInput className='textFilds' label="Garden or Roof Space" value={gardenOrRoofSpace} onChange={(e) => setGardenOrRoofSpace(e.target.value)} />
                                    <Select
                                        className='textFilds'
                                        data={[
                                            { label: 'Active', value: 'true' },
                                            { label: 'Not Active', value: 'false' }
                                        ]}
                                        value={propertyActive.toString()} // Convert boolean to string
                                        onChange={(value) => setPropertyActive(value === 'true')}
                                        label="Property Active"
                                        placeholder="Select Property Active"
                                    />
                                </div>
                                <div className='fieldsContainer'>
                                    <Select
                                        className='textFilds'
                                        data={[
                                            { label: 'Beach', value: 'true' },
                                            { label: 'Pool', value: 'false' }
                                        ]}
                                        value={hasPoolOrBeach.toString()} // Convert boolean to string
                                        onChange={(value) => setHasPoolOrBeach(value === 'true')}
                                        label="Pool or Beach"
                                        placeholder="Select Pool or Beach"
                                    />
                                    <input type="file" />
                                </div>
                                <Button color="green" type="submit">Save</Button>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
                <Grid.Col span={5}>
                    <PaperBox>
                        <Title order={4}>CRM</Title>
                        <Button color="blue" my={24} fullWidth>Add CRM</Button>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default EditUnitsPage;
