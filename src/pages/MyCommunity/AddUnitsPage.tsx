import React, { useState } from 'react';
import { Box, Button, Grid, Select, Stack, TextInput, Container } from '@mantine/core';
import PageTitle from '../../components/PageTitle';
import PaperBox from '../../components/PaperBox';

export default function AddUnitsPage(): JSX.Element {
    const [selectedUnitKind, setSelectedUnitKind] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [buildingType, setBuildingType] = useState<string>('');
    const [totalSqf, setTotalSqf] = useState<string>('');
    const [floor, setFloor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [amenities, setAmenities] = useState<string>('');
    const [rooms, setRooms] = useState<string>('');
    const [bathrooms, setBathrooms] = useState<string>('');
    const [withParking, setWithParking] = useState<boolean>(false);
    const [location, setLocation] = useState<string>('');
    const [features, setFeatures] = useState<string>('');
    const [indoorFacilities, setIndoorFacilities] = useState<string>('');
    const [outdoorFacilities, setOutdoorFacilities] = useState<string>('');
    const [gardenOrRoofSpace, setGardenOrRoofSpace] = useState<string>('');
    const [propertyActive, setPropertyActive] = useState<boolean>(false);
    const [hasPoolOrBeach, setHasPoolOrBeach] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <Container size="xl">
            <PageTitle />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing="md">
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="ID"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                            <TextInput
                                                label="Project"
                                                value={buildingType}
                                                onChange={(e) => setBuildingType(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Unit Size"
                                                value={totalSqf}
                                                onChange={(e) => setTotalSqf(e.target.value)}
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Work Unit', value: 'Work Unit' },
                                                    { label: 'Unit for Living', value: 'Unit for Living' },
                                                    { label: 'Office', value: 'Office' },
                                                ]}
                                                value={selectedUnitKind}
                                                onChange={(value) => setSelectedUnitKind(value as string)}
                                                label="Unit Kinds"
                                                placeholder="Select Unit Kind"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Status"
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            />
                                            <TextInput
                                                label="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Building"
                                                value={buildingType}
                                                onChange={(e) => setBuildingType(e.target.value)}
                                            />
                                            <TextInput
                                                label="Floor"
                                                value={floor}
                                                onChange={(e) => setFloor(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                            <TextInput
                                                label="Amenities"
                                                value={amenities}
                                                onChange={(e) => setAmenities(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Rooms"
                                                value={rooms}
                                                onChange={(e) => setRooms(e.target.value)}
                                            />
                                            <TextInput
                                                label="Bathrooms"
                                                value={bathrooms}
                                                onChange={(e) => setBathrooms(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'With Parking', value: 'true' },
                                                    { label: 'No Parking', value: 'false' },
                                                ]}
                                                value={withParking.toString()}
                                                onChange={(value) => setWithParking(value === 'true')}
                                                label="Parking"
                                                placeholder="Select Parking"
                                            />
                                            <TextInput
                                                label="Location"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Features"
                                                value={features}
                                                onChange={(e) => setFeatures(e.target.value)}
                                            />
                                            <TextInput
                                                label="Indoor Features"
                                                value={indoorFacilities}
                                                onChange={(e) => setIndoorFacilities(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Outdoor Features"
                                                value={outdoorFacilities}
                                                onChange={(e) => setOutdoorFacilities(e.target.value)}
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Garden', value: 'Garden' },
                                                    { label: 'Roof Space', value: 'Roof Space' },
                                                ]}
                                                value={gardenOrRoofSpace}
                                                onChange={(value) => setGardenOrRoofSpace(value as string)}
                                                label="Garden or Roof Space"
                                                placeholder="Select Garden or Roof Space"
                                            />{' '}
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'Active', value: 'true' },
                                                    { label: 'Not Active', value: 'false' },
                                                ]}
                                                value={propertyActive.toString()}
                                                onChange={(value) => setPropertyActive(value === 'true')}
                                                label="Property Active"
                                                placeholder="Select Property Active"
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Beach', value: 'true' },
                                                    { label: 'Pool', value: 'false' },
                                                ]}
                                                value={hasPoolOrBeach.toString()}
                                                onChange={(value) => setHasPoolOrBeach(value === 'true')}
                                                label="Pool or Beach"
                                                placeholder="Select Pool or Beach"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </Stack>
                            <Box mt={5} display="flex">
                                {/* Image upload input */}
                                <label
                                    htmlFor="image-upload"
                                    className="w-25"
                                    style={{
                                        marginTop:'50px',
                                        backgroundColor: 'teal',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                    }}
                                >
                                    Upload Image
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                </label>
                            </Box>
                            {/* Image preview section */}
                            <Grid.Col span={4}>
                                <PaperBox>
                                    {/* Display the selected image */}
                                    {image && (
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Uploaded"
                                            style={{ width: '100%' }}
                                        />
                                    )}
                                </PaperBox>
                            </Grid.Col>
                            <Button className="w-100 my-3" color="teal" type="submit">
                                Save
                            </Button>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
