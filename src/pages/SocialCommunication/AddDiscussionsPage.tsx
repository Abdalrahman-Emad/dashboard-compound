import { Box, Button, Grid, Select, Stack, TextInput, Textarea } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { IconChevronDown } from '@tabler/icons';
import PageTitle from '../../components/PageTitle';

const AddDiscussionsPage = () => {
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
                                <TextInput label="Image" type='file'  variant='unstyled' size='md' sx={{height:50}} mb={24}/>
                                <Select
                                    rightSection={<IconChevronDown size={14} />}
                                    rightSectionWidth={30}
                                    label="Type"
                                    styles={{ rightSection: { pointerEvents: 'none' } }}
                                    data={['1', '2']}
                                    size="md"
                                />
                                <Button >Save</Button>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default AddDiscussionsPage;
