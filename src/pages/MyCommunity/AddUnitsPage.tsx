import React, { useState } from 'react';
import { Box, Button, Grid, Select, Stack, TextInput, Container } from '@mantine/core';
import PageTitle from '../../components/PageTitle';
import PaperBox from '../../components/PaperBox';

export default function AddUnitsPage(): JSX.Element {
    const [buildingDetails, setBuildingDetails] = useState({
        buildingType: '',
        floor: '',
        // Add more building details as needed
    });

    const [unitDetails, setUnitDetails] = useState({
        selectedUnitKind: '',
        status: '',
        description: '',
        totalSqf: '',
        // Add more unit details as needed
    });

    const [amenitiesDetails, setAmenitiesDetails] = useState({
        amenities: '',
        rooms: '',
        bathrooms: '',
        withParking: false,
        // Add more amenities details as needed
    });
const [projectName, setProjectName] = useState<string>('');
    const [selectedUnitKind, setSelectedUnitKind] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [buildingType, setBuildingType] = useState<string>('');
    const [totalSqf, setTotalSqf] = useState<string>('');
    const [floor, setFloor] = useState<string>('');
    const [amenities, setAmenities] = useState<string>('');
    const [rooms, setRooms] = useState<string>('');
    const [withParking, setWithParking] = useState<boolean>(false);
    const [features, setFeatures] = useState<string>('');
    const [indoorFacilities, setIndoorFacilities] = useState<string>('');
    const [outdoorFacilities, setOutdoorFacilities] = useState<string>('');
    const [gardenOrRoofSpace, setGardenOrRoofSpace] = useState<string>('');
    const [propertyActive, setPropertyActive] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);
    const [constructionPosition, setConstructionPosition] = useState<string>('');
    const [finishingModule, setFinishingModule] = useState<string>('');
    const [poolType, setPoolType] = useState<string>('');
    const [parkingSpace, setParkingSpace] = useState<string>('');
    const [usageCategory, setUsageCategory] = useState<string>('');
    const [completionDate, setCompletionDate] = useState<string>('');
    const [unitOption, setUnitOption] = useState<string>('');
    const [unitModule, setUnitModule] = useState<string>('');
    const [stage, setStage] = useState<string>('');
    const [typeOfBuilding, setTypeOfBuilding] = useState<string>('');
    const [usageType, setUsageType] = useState<string>('');
    const [buildingArea, setBuildingArea] = useState<string>('');
    const [locationDetails, setLocationDetails] = useState<string>('');
    const [outsideSpace, setOutsideSpace] = useState<string>('');
    const [unitSales, setUnitSales] = useState<string>('');

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
            <PageTitle title="Add Units" />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing="md">
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'Blue blue', value: 'Blue blue' },
                                                    { label: 'HQ', value: 'Hq' },
                                                ]}
                                                value={projectName}
                                                onChange={(value) => setProjectName(value as string)}
                                                label="Project"
                                                placeholder="Select Project"
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Villa', value: 'Villa' },
                                                    { label: 'Flat', value: 'Flat' },
                                                    { label: 'Shop', value: 'Shop' },
                                                ]}
                                                value={selectedUnitKind}
                                                onChange={(value) => setSelectedUnitKind(value as string)}
                                                label="Unit Type"
                                                placeholder="Select Unit Type"
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
                                            <Select
                                                label="Unit Status"
                                                value={status}
                                                onChange={(value) => setStatus(value as string)}
                                                placeholder="Select Unit Status"
                                                data={[
                                                    { label: 'Ready', value: 'Option 1' },
                                                    { label: 'Under Construction', value: 'Option 2' },
                                                ]}
                                            />
                                            <TextInput
                                                label="Unit Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
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
                                                label="Construction Position"
                                                value={constructionPosition}
                                                onChange={(e) => setConstructionPosition(e.target.value)}
                                            />
                                            <TextInput
                                                label="Amenities"
                                                value={amenities}
                                                onChange={(e) => setAmenities(e.target.value)}
                                            />
                                            <TextInput
                                                label="Building Area"
                                                value={buildingArea}
                                                onChange={(e) => setBuildingArea(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="No of Rooms"
                                                value={rooms}
                                                onChange={(e) => setRooms(e.target.value)}
                                            />
                                            <TextInput
                                                label="Completion Date"
                                                value={completionDate}
                                                onChange={(e) => setCompletionDate(e.target.value)}
                                            />
                                            <TextInput
                                                label="Unit Module"
                                                value={unitModule}
                                                onChange={(e) => setUnitModule(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>

                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'Yes', value: 'true' },
                                                    { label: 'No', value: 'false' },
                                                ]}
                                                value={withParking.toString()}
                                                onChange={(value) => setWithParking(value === 'true')}
                                                label="With Parking"
                                                placeholder="With Parking"
                                            />
                                            <TextInput
                                                label="The Stage"
                                                value={stage}
                                                onChange={(e) => setStage(e.target.value)}
                                            />
                                            <TextInput
                                                label="Location Details"
                                                value={locationDetails}
                                                onChange={(e) => setLocationDetails(e.target.value)}
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
                                            <TextInput
                                                label="Outdoor Features"
                                                value={indoorFacilities}
                                                onChange={(e) => setIndoorFacilities(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'Loux', value: 'Loux' },
                                                    { label: 'Without', value: 'Without' },
                                                    // Add more options as needed
                                                ]}
                                                value={finishingModule}
                                                onChange={(value) => setFinishingModule(value as string)}
                                                label="Finishing Module"
                                                placeholder="Select Finishing Module"
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Private', value: 'Private' },
                                                    { label: 'Individual', value: 'Individual' },
                                                    // Add more options as needed
                                                ]}
                                                value={poolType}
                                                onChange={(value) => setPoolType(value as string)}
                                                label="Pool Type"
                                                placeholder="Select Pool Type"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Parking Space"
                                                value={parkingSpace}
                                                onChange={(e) => setParkingSpace(e.target.value)}
                                            />
                                            <Select
                                                data={[
                                                    { label: 'VIP', value: 'VIP' },
                                                    { label: 'Normal', value: 'Normal' },
                                                    // Add more options as needed
                                                ]}
                                                value={usageCategory}
                                                onChange={(value) => setUsageCategory(value as string)}
                                                label="Usage Category"
                                                placeholder="Select Usage Category"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>

                                <Grid>
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
                                                    { label: 'Sold', value: 'Sold' },
                                                    { label: 'Reserved', value: 'Reserved' },
                                                ]}
                                                value={unitSales}
                                                onChange={(value) => setUnitSales(value as string)}
                                                label="Unit Sales"
                                                placeholder="Select Unit Sales"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Type of Building"
                                                value={typeOfBuilding}
                                                onChange={(e) => setTypeOfBuilding(e.target.value)}
                                            />
                                            <Select
                                                data={[
                                                    { label: 'Usage Type 1', value: 'Usage Type 1' },
                                                    { label: 'Usage Type 2', value: 'Usage Type 2' },
                                                    // Add more options as needed
                                                ]}
                                                value={usageType}
                                                onChange={(value) => setUsageType(value as string)}
                                                label="Usage Type"
                                                placeholder="Select Usage Type"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <Select
                                                data={[
                                                    { label: 'With Roof', value: 'With Roof' },
                                                    { label: 'With Pool', value: 'With Pool' },
                                                ]}
                                                value={unitOption}
                                                onChange={(value) => setUnitOption(value as string)}
                                                label="Unit Option"
                                                placeholder="Select Unit Option"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="md">
                                            <TextInput
                                                label="Out Side Space"
                                                value={outsideSpace}
                                                onChange={(e) => setOutsideSpace(e.target.value)}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </Stack>
                            <Box mt={5} display="flex">
                                {/* Image upload input */}
                                <label
                                    htmlFor="image-upload"
                                    style={{
                                        width: '11%',
                                        marginTop: '50px',
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
                        </form>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
