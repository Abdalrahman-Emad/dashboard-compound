import { Box, Button, Grid, Stack, TextInput, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import PageTitle from '../../components/PageTitle';

const MassBlockingPage = () => {
    return (
        <div>
            <PageTitle />
            <Grid>
                <Grid.Col span={6}>
                    <PaperBox>
                        <Box component="form">
                            <Stack>
                                <TextInput
                                    label="Image"
                                    type="file"
                                    variant="unstyled"
                                    size="md"
                                    sx={{ height: 50 }}
                                    mb={24}
                                />
                                <Group>
                                    <Button>upload</Button>
                                    <Button color="green">back</Button>
                                </Group>
                                <Group>
                                    <Button color="red">Delete</Button>
                                </Group>
                            </Stack>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default MassBlockingPage;
