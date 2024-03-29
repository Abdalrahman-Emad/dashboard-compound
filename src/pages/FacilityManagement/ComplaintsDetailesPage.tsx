import React, { useState } from 'react';
import { Button, Grid, Stack, TextInput, Text, Select } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const ComplaintsDetails: React.FC = () => {
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
    const [owner, setOwner] = useState('');
    const [AdminComment, setAdminComment] = useState('');

    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const startRecording = () => {
        // Start recording logic
        setRecording(true);
    };

    const stopRecording = () => {
        // Stop recording logic
        setRecording(false);
        // Process recorded audio and set audioURL
        const recordedAudioURL = ''; // Replace with recorded audio URL
        setAudioURL(recordedAudioURL);
    };

    return (
        <div>
            <PageTitle title="Edits Complaints" />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <form onSubmit={handleSubmit}>
                            <Grid>
                                <Grid.Col span={6}>
                                    <Stack spacing="sm">
                                        <Select
                                            label="Project Name"
                                            value={categoryName}
                                            onChange={(value) => setCategoryName(value as string)}
                                            placeholder="Select Project Name"
                                            data={[
                                                { label: 'Blue blue', value: 'Blue blue' },
                                                { label: 'HQ', value: 'HQ' },
                                                { label: 'Lavida', value: 'Lavida' },
                                            ]}
                                        />

                                        <TextInput
                                            label="Complaint ID"
                                            value={complainId}
                                            placeholder='Enter Complain ID'
                                            onChange={(e) => setComplainId(e.target.value)}
                                        />
                                        <Select
                                            label="Category Name"
                                            value={categoryName}
                                            onChange={(value) => setCategoryName(value as string)}
                                            placeholder="Select Category"
                                            data={[
                                                { label: 'Global', value: 'Global' },
                                                { label: 'Category 2', value: 'Category 2' },
                                                { label: 'Category 3', value: 'Category 3' },
                                            ]}
                                        />
                                        <TextInput
                                            label="Location"
                                            placeholder='Location'
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                        <TextInput
                                            label="Owner"
                                            value={owner}
                                            placeholder='Owner'
                                            onChange={(e) => setOwner(e.target.value)}
                                        />

                                        <TextInput
                                            label="Unit"
                                            value={unit}
                                            placeholder='Enter Unit'
                                            onChange={(e) => setUnit(e.target.value)}
                                        />
                                        <TextInput
                                            label="Unit Type"
                                            value={unitType}
                                            placeholder='Enter Unit Type'
                                            onChange={(e) => setUnitType(e.target.value)}
                                        />
                                        <Select
                                            label="Complaint Priority"
                                            value={complainPriority}
                                            onChange={(value) => setComplainPriority(value as string)}
                                            placeholder="Select Priority"
                                            data={[
                                                { label: 'High', value: 'High' },
                                                { label: 'Low', value: 'Low' },
                                            ]}
                                        />
                                        <Text>Comments:</Text>
                                        <textarea
                                            value={comments}
                                            onChange={(e) => setComments(e.target.value)}
                                            rows={3}
                                        />
                                    </Stack>
                                </Grid.Col>

                                <Grid.Col span={6}>
                                    <PaperBox>
                                        <div
                                            style={{
                                                height: '300px',
                                                backgroundColor: '#F8F9FA',
                                                position: 'relative',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                <FontAwesomeIcon className="fs-1" icon={faImage} />
                                            </div>
                                        </div>
                                    </PaperBox>

                                    <div className="my-3">
                                        <PaperBox>
                                            <div style={{ position: 'relative', width: '100%' }}>
                                                <TextInput
                                                    style={{ paddingRight: '2.5rem' }}
                                                    label="Attach a Record"
                                                    placeholder="Attach a Record"
                                                    value=""
                                                    onChange={() => {}}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faMicrophone}
                                                    className="fs-4"
                                                    style={{
                                                        position: 'absolute',
                                                        right: '10px', // Adjust as needed
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        cursor: 'pointer',
                                                        marginTop: '11px',
                                                    }}
                                                />
                                            </div>
                                        </PaperBox>
                                    </div>
                                </Grid.Col>
                            </Grid>
                            <Button className="my-4" color="teal" type="submit" fullWidth>
                                Save
                            </Button>
                        </form>
                    </PaperBox>
                </Grid.Col>
            </Grid>

            <div style={{ border: '10px', borderRadius: '50px', marginTop: '50px' }}>
                <h4 className="m-3">Reply Complain</h4>
                <Grid>
                    <Grid.Col span={12}>
                        <PaperBox>
                            <form onSubmit={handleSubmit}>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <Stack spacing="sm">
                                            <Text>Reply Details:</Text>
                                            <textarea
                                                value={replyDetails}
                                                onChange={(e) => setReplyDetails(e.target.value)}
                                                rows={3}
                                            />

                                            <TextInput
                                                label="Creator"
                                                value={replyCreator}
                                                placeholder='Enter Creator Name'
                                                onChange={(e) => setReplyCreator(e.target.value)}
                                            />
                                            <TextInput
                                                label="Date Time"
                                                type="datetime-local"
                                                value={replyDateTime}
                                                onChange={(e) => setReplyDateTime(e.target.value)}
                                            />
                                            <Text>Complaint Status:</Text>
                                            <select
                                                className="form-select"
                                                value={complainStatus}
                                                onChange={(e) => setComplainStatus(e.target.value)}
                                            >
                                                <option value="open">Open</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="resolved">Resolved</option>
                                                <option value="resolved">Closed</option>
                                            </select>
                                            <Text>Admin Comments:</Text>
                                            <textarea
                                                value={AdminComment}
                                                onChange={(e) => setAdminComment(e.target.value)}
                                                rows={3}
                                            />

                                            {/* Submit button */}
                                            <Button color="teal" type="submit" fullWidth>
                                                Save
                                            </Button>
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Stack spacing="sm">
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
                                                    marginTop: '45px',
                                                    width: '100%',
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
                                            <PaperBox>
                                                <div
                                                    style={{
                                                        height: '300px',
                                                        backgroundColor: '#F8F9FA',
                                                        position: 'relative',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                        }}
                                                    >
                                                        <FontAwesomeIcon className="fs-1" icon={faImage} />
                                                    </div>
                                                </div>
                                            </PaperBox>

                                            {/* Image preview */}
                                            {image && (
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt="Preview"
                                                    style={{ marginTop: '20px', maxWidth: '100%' }}
                                                />
                                            )}
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </form>
                        </PaperBox>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
};

export default ComplaintsDetails;
