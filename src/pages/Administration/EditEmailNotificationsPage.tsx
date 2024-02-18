import { Box, Button, Grid, Stack, TextInput } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';

const EditEmailNotificationsPage = () => {
    const { state } = useLocation();
    const { element } = state;

    return (
        <div>
            <PageTitle title=" Email Notifications" additionalTitle="Edit" />
            <Grid>
                <Grid.Col span={7}>
                    <PaperBox>
                        <Box component="form">
                            <Stack>
                                <TextInput label="Type" disabled value={element.firstName} />
                                <TextInput label="Email" value={element.email} />
                            </Stack>
                            <Button mt={24}>Update</Button>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default EditEmailNotificationsPage;
