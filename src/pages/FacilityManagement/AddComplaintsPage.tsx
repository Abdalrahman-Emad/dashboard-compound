import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextInput, Text } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

const AddComplaintsPage: React.FC = () => {
    const [complainId, setComplainId] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [complainPriority, setComplainPriority] = useState('');
    const [location, setLocation] = useState('');
    const [unit, setUnit] = useState('');
    const [unitType, setUnitType] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [replyDetails, setReplyDetails] = useState('');
    const [replyCreator, setReplyCreator] = useState('');
    const [replyDateTime, setReplyDateTime] = useState('');
    const [complainStatus, setComplainStatus] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div>
            <PageTitle />
            <Grid>
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing="lg">
                                <TextInput
                                    label="Complain ID"
                                    value={complainId}
                                    onChange={(e) => setComplainId(e.target.value)}
                                />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <label className="form-label" style={{ marginRight: '10px' }}>
                                        Category Name:
                                    </label>
                                    <select
                                        className="form-select w-100"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Global">Global</option>
                                        <option value="Category 2">Category 2</option>
                                        <option value="Category 3">Category 3</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <label className="form-label" style={{ marginRight: '10px' }}>
                                        Complain Priority:
                                    </label>
                                    <select
                                        className="form-select w-100"
                                        value={complainPriority}
                                        onChange={(e) => setComplainPriority(e.target.value)}
                                    >
                                        <option value="">Select Priority</option>
                                        <option value="High">High</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
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
                                    style={{
                                        backgroundColor: 'teal',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        display: 'block',
                                        marginTop: '20px',
                                        width: '25%',
                                        textAlign: 'center',
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
                                {/* Image preview */}
                                {image && (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Preview"
                                        style={{ marginTop: '20px', maxWidth: '60%' }}
                                    />
                                )}
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing="lg">
                                <Text>Reply Details:</Text>
                                <textarea
                                    value={replyDetails}
                                    onChange={(e) => setReplyDetails(e.target.value)}
                                    rows={4}
                                />
                                <TextInput
                                    label="Creator"
                                    value={replyCreator}
                                    onChange={(e) => setReplyCreator(e.target.value)}
                                />
                                <TextInput
                                    label="Date Time"
                                    type="datetime-local"
                                    value={replyDateTime}
                                    onChange={(e) => setReplyDateTime(e.target.value)}
                                />
                                <Text>Complain Status:</Text>
                                <select
                                    className="form-select"
                                    value={complainStatus}
                                    onChange={(e) => setComplainStatus(e.target.value)}
                                >
                                    <option value="open">Open</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="resolved">Resolved</option>
                                    <option value="closed">Closed</option>

                                </select>
                                <Text>Comments:</Text>
                                <textarea value={comments} onChange={(e) => setComments(e.target.value)} rows={4} />
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
            {/* Submit button */}
            <Button color="teal" type="submit" fullWidth>
                Save
            </Button>
        </div>
    );
};

export default AddComplaintsPage;
