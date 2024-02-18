import { Box, Button, Grid,  Select, Stack, TextInput } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { IconCalendar, IconChevronDown } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
import PageTitle from '../../components/PageTitle';


const AddResidentPage = () => {
    return (
        <div>
            <PageTitle />
            <Grid>
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form">
                            <Stack>
                                <TextInput label="First name" />
                                <TextInput label="Last Name" />
                                <TextInput label="Email" type="email" />
                                <TextInput label="Mobile" />
                                <Select
                                    rightSection={<IconChevronDown size={14} />}
                                    rightSectionWidth={30}
                                    label="Gender"
                                    styles={{ rightSection: { pointerEvents: 'none' } }}
                                    data={['Male', 'Female']}
                                    size="md"
                                />
                                <DatePicker
                                    placeholder="Pick date"
                                    label="Event date"
                                    icon={<IconCalendar size={24} />}
                                    size="md"
                                />
                                <Select
                                    rightSection={<IconChevronDown size={14} />}
                                    rightSectionWidth={30}
                                    label="Resident Type"
                                    styles={{ rightSection: { pointerEvents: 'none' } }}
                                    data={['1', '2']}
                                    size="md"
                                />
                                <Button color='green'>Save</Button>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default AddResidentPage;
