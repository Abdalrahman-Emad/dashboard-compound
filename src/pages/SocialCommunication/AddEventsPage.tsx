import { Box, Button, Grid, Stack, TextInput, Textarea } from '@mantine/core';
import { IconCalendar } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';

import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

const AddEventsPage = () => {
    return (
        <div>
            <PageTitle />
            <Grid>
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form">
                            <Stack>
                                <TextInput label="Title" />
                                <Textarea minRows={5} label="Details" />
                                <TextInput
                                    label="Image"
                                    type="file"
                                    variant="unstyled"
                                    size="md"
                                    sx={{ height: 50 }}
                                    mb={24}
                                />
                                <TextInput label="Location" />
                                <TextInput label="Subscription Fees" />
                                <DatePicker
                                    placeholder="Pick date"
                                    label="From"
                                    icon={<IconCalendar size={24} />}
                                    size="md"
                                />
                                <DatePicker
                                    placeholder="Pick date"
                                    label="To"
                                    icon={<IconCalendar size={24} />}
                                    size="md"
                                />

                                <Button>Post Event</Button>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default AddEventsPage;
