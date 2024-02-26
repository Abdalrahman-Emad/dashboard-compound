// Import necessary components and libraries
import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextInput, Text } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

// Define the AddComplaintsPage component
const AddComplaintsPage: React.FC = () => {
    // Define state variables
    const [complainId, setComplainId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [creator, setCreator] = useState('');
    const [location, setLocation] = useState('');
    const [unit, setUnit] = useState('');
    const [unitType, setUnitType] = useState('');
    const [image, setImage] = useState<File | null>(null); // State to hold the selected image file

    // Define handleSubmit function
    const handleSubmit = () => {
        // Handle form submission logic here
    };

    // Define handleImageChange function
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]); // Set the first selected image
        }
    };

    // Return JSX
    return (
        <div>
            {/* Page title */}
            <PageTitle />
            {/* Grid layout */}
            <Grid>
                {/* Form section */}
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            {/* Form fields stack */}
                            <Stack spacing="lg">
                                <TextInput
                                    label="Complain ID"
                                    value={complainId}
                                    onChange={(e) => setComplainId(e.target.value)}
                                />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <label style={{ marginRight: '10px' }}>Category Name:</label>
                                    <select
                                        style={{ padding:'10px'}}
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Category 1">Global</option>
                                        <option value="Category 2">Category 2</option>
                                    </select>
                                </div>
                                <Text>Descriptions:</Text>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                />
                                <TextInput
                                    label="Date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <TextInput
                                    label="Creator"
                                    value={creator}
                                    onChange={(e) => setCreator(e.target.value)}
                                />
                                <TextInput
                                    label="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <TextInput label="Unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
                                <TextInput
                                    label="Unit Type"
                                    value={unitType}
                                    onChange={(e) => setUnitType(e.target.value)}
                                />
                                {/* Image upload input */}
                                <label
                                    htmlFor="image-upload"
                                    className="w-25"
                                    style={{
                                        backgroundColor: 'teal',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                        marginBottom: '20px',
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
                                {/* Submit button */}
                                <Link to="/dashboard/facility-management/complaints">
                                    <Button color="teal" type="submit" fullWidth>
                                        Save
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
                {/* Image preview section */}
                <Grid.Col span={4}>
                    <PaperBox>
                        {/* Display the selected image */}
                        {image && <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '100%' }} />}
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

// Export the component
export default AddComplaintsPage;
