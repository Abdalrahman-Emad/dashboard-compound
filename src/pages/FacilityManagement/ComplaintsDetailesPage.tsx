// import { useState } from "react";
// import { Button, Divider, FileButton, Grid, Group, Image, Select, Stack, Text, Textarea, Title } from "@mantine/core";
// import PaperBox from "../../components/PaperBox";
// import PageTitle from "../../components/PageTitle";
// import { IconChevronDown } from "@tabler/icons";

// export default function ComplaintsDetailesPage() {
//     const [file, setFile] = useState<File | null>(null);

//     return (
//         <div>
//             <PageTitle additionalTitle="Details" />
//             <Grid>
//                 <Grid.Col span={8}>
//                     <Stack spacing={16}>
//                         <PaperBox>
//                             <Group position="right">
//                                 <Button color="red">Delete</Button>
//                             </Group>
//                             <Text my={16} size="lg" color="gray">
//                                 Details
//                             </Text>
//                             <Stack spacing={8}>
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Category Name</Title>
//                                     <Text>Water</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Type</Title>
//                                     <Text>private</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Creation Time</Title>
//                                     <Text>2002-1-2</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Location</Title>
//                                     <Text>Egypt</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Creator</Title>
//                                     <Text>mahmoud</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Unit</Title>
//                                     <Text>33fsdfd</Text>
//                                 </Group>
//                                 <Divider />
//                                 <Group position="apart" align="center">
//                                     <Title order={6}>Status</Title>
//                                     <Select
//                                         rightSection={<IconChevronDown size={14} />}
//                                         rightSectionWidth={30}
//                                         styles={{ rightSection: { pointerEvents: 'none' } }}
//                                         data={['open', 're-open', 'close']}
//                                         size="md"
//                                     />
//                                 </Group>
//                                 <Divider />
//                                 {/* <Group position="apart" align="center">
//                                     <Title order={6}>Priority</Title>
//                                     <Text>test</Text>
//                                 </Group> */}
//                                 <Button fullWidth={false}>Update</Button>
//                             </Stack>
//                         </PaperBox>
//                         <PaperBox>
//                             <Title my={16} order={4}>
//                                 Communicate With the user
//                             </Title>
//                             <Group mb={16}>
//                                 <FileButton onChange={setFile} accept="image/png,image/jpeg">
//                                     {(props) => <Button {...props}>Upload image</Button>}
//                                 </FileButton>
//                             </Group>
//                             {file && (
//                                 <Text size="sm" align="center" mt="sm">
//                                     Picked file: {file.name}
//                                 </Text>
//                             )}

//                             <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
//                             <Button>Update</Button>
//                         </PaperBox>
//                     </Stack>
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <Stack spacing={32}>
//                         <PaperBox>
//                             <Title order={3}>Image</Title>
//                             <Image src="" mt={16} withPlaceholder height={200} width={'100%'} />
//                         </PaperBox>
//                         <PaperBox>
//                             <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
//                             <Button>Add comments</Button>
//                         </PaperBox>
//                     </Stack>
//                 </Grid.Col>
//             </Grid>
//         </div>
//     );
// }
///////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import { Button, Divider, FileButton, Grid, Group, Image, Select, Stack, Textarea, Title } from "@mantine/core";
// import PaperBox from "../../components/PaperBox";
// import PageTitle from "../../components/PageTitle";
// import { IconChevronDown } from "@tabler/icons";

// export default function ComplaintsDetailesPage() {
//     const [file, setFile] = useState<File | null>(null);

//     return (
//         <div>
//             <PageTitle additionalTitle="Details" />
//             <Grid>
//                 <Grid.Col span={8}>
//                     <Stack spacing={16}>
//                         <PaperBox>
//                             <Group position="right">
//                                 <Button color="red">Delete</Button>
//                             </Group>
//                             <Title my={16} size="lg" color="gray">
//                                 Details
//                             </Title>
//                             <Stack spacing={8}>
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Category Name:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="Water" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Type:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="private" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Creation Time:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="2002-1-2" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Location:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="Egypt" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Creator:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="mahmoud" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Unit:</Title>
//                                     <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '16px' }} value="33fsdfd" readOnly />
//                                 </div>
//                                 <Divider />
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <Title order={6} style={{ width: '200px', fontWeight: 'bold' }}>Status:</Title>
//                                     <Select
//                                         rightSection={<IconChevronDown size={14} />}
//                                         rightSectionWidth={30}
//                                         styles={{ rightSection: { pointerEvents: 'none' } }}
//                                         data={['open', 're-open', 'close']}
//                                         size="md"
//                                     />
//                                 </div>
//                                 <Divider />
//                                 {/* <Group position="apart" align="center">
//                                     <Title order={6}>Priority</Title>
//                                     <Text>test</Text>
//                                 </Group> */}
//                                 <Button fullWidth={false}>Update</Button>
//                             </Stack>
//                         </PaperBox>
//                         <PaperBox>
//                             <Title my={16} order={4}>
//                                 Communicate With the user
//                             </Title>
//                             <Group mb={16}>
//                                 <FileButton onChange={setFile} accept="image/png,image/jpeg">
//                                     {(props) => <Button {...props}>Upload image</Button>}
//                                 </FileButton>
//                             </Group>
//                             {file && (
//                                 <div style={{ fontSize: 'small', textAlign: 'center', marginTop: '8px' }}>
//                                     Picked file: {file.name}
//                                 </div>
//                             )}

//                             <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
//                             <Button>Update</Button>
//                         </PaperBox>
//                     </Stack>
//                 </Grid.Col>
//                 <Grid.Col span={4}>
//                     <Stack spacing={32}>
//                         <PaperBox>
//                             <Title order={3}>Image</Title>
//                             <Image src="" mt={16} withPlaceholder height={200} width={'100%'} />
//                         </PaperBox>
//                         <PaperBox>
//                             <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
//                             <Button>Add comments</Button>
//                         </PaperBox>
//                     </Stack>
//                 </Grid.Col>
//             </Grid>
//         </div>
//     );
// }
/////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { Box, Button, Grid, Stack, TextInput, Text, Badge, Select } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

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
                <Grid.Col span={12}>
                    <PaperBox>
                        <form onSubmit={handleSubmit}>
                            <Grid>
                                <Grid.Col span={6}>
                                    <Stack spacing="lg">
                                        <TextInput
                                            label="Complain ID"
                                            value={complainId}
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
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                        <TextInput
                                            label="Unit"
                                            value={unit}
                                            onChange={(e) => setUnit(e.target.value)}
                                        />
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
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Stack spacing="lg">
                                        <TextInput
                                            label="Creator"
                                            value={replyCreator}
                                            onChange={(e) => setReplyCreator(e.target.value)}
                                        />
                                        <Select
                                            label="Complain Priority"
                                            value={complainPriority}
                                            onChange={(value) => setComplainPriority(value as string)}
                                            placeholder="Select Priority"
                                            data={[
                                                { label: 'High', value: 'High' },
                                                { label: 'Low', value: 'Low' },
                                            ]}
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
                                            <option value="resolved">Closed</option>
                                        </select>
                                        <Text>Comments:</Text>
                                        <textarea
                                            value={comments}
                                            onChange={(e) => setComments(e.target.value)}
                                            rows={4}
                                        />

                                        <Text>Reply Details:</Text>
                                        <textarea
                                            value={replyDetails}
                                            onChange={(e) => setReplyDetails(e.target.value)}
                                            rows={4}
                                        />
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                            {/* Submit button */}
                            <Button className='my-4' color="teal" type="submit" fullWidth>
                                Save
                            </Button>
                        </form>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default ComplaintsDetails;
