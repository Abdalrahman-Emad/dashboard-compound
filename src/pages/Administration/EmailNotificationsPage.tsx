import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import EmailNotificationsTable from './components/EmailNotificationsTable';

const EmailNotificationsPage = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Email Notifications
                </Title>
                <Group position="right">
                    <Button>Add Email</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Search" type="search" />
                    </Grid.Col>
                </Grid>
                <EmailNotificationsTable />
            </PaperBox>
        </div>
    );
};

export default EmailNotificationsPage;
