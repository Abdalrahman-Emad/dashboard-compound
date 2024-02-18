import { Box, Button, Grid, Select, Stack, TextInput, Title, Container } from "@mantine/core";
import PageTitle from "../../components/PageTitle";
import PaperBox from "../../components/PaperBox";
import { useState } from "react";
import './style/style.css';

export default function AddUnitsPage() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [description, setDescription] = useState('');
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
    const [image, setImage] = useState(null);

    const options = [
        { label: 'work unit', value: 'work unit' },
        { label: 'unit for living', value: 'unit for living' },
        { label: 'office', value: 'office' },
    ];

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    function value(value: string | null): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Container size="lg">
            <PageTitle />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing="lg">
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <Select className='textFilds' data={options} value={selectedValue}  label="Select Unit Type" placeholder="Type" onChange={value}/>
                                </div>
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Type of Building" value={buildingType} onChange={(e) => setBuildingType(e.target.value)} />
                                    <TextInput className='textFilds' label="Total SQF" value={totalSqf} onChange={(e) => setTotalSqf(e.target.value)} />
                                </div>
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} />
                                    <TextInput className='textFilds' label="Size" value={size} onChange={(e) => setSize(e.target.value)} />
                                </div>
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Amenities" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                                    <TextInput className='textFilds' label="Rooms" value={rooms} onChange={(e) => setRooms(e.target.value)} />
                                </div>
                                <div className="fieldsContainer">
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
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                    <TextInput className='textFilds' label="Features" value={features} onChange={(e) => setFeatures(e.target.value)} />
                                </div>
                                <div className="fieldsContainer">
                                    <TextInput className='textFilds' label="Indoor Facilities" value={indoorFacilities} onChange={(e) => setIndoorFacilities(e.target.value)} />
                                    <TextInput className='textFilds' label="Outdoor Facilities" value={outdoorFacilities} onChange={(e) => setOutdoorFacilities(e.target.value)} />
                                </div>
                                <div className="fieldsContainer">
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
                                <div className="fieldsContainer">
                                    <Select
                                        className='textFilds'
                                        data={[
                                            { label: ' Beach', value: 'true' },
                                            { label: ' Pool', value: 'false' }
                                        ]}
                                        value={hasPoolOrBeach.toString()} // Convert boolean to string
                                        onChange={(value) => setHasPoolOrBeach(value === 'true')}
                                        label="Pool or Beach"
                                        placeholder="Select Pool or Beach"
                                    />
                                    <input type="file"  />
                                </div>
                                <Button color="green" type="submit">Save</Button>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
                <Grid.Col span={5}>
                    <PaperBox>
                        <Title order={4}>CRM</Title>
                        <Button color="blue" my={24} fullWidth>
                            Add CRM
                        </Button>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
